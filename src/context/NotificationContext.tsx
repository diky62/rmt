import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, AlertTriangle, Info, AlertOctagon, RefreshCw, WifiOff } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  suggestion?: string;
  duration?: number; // ms, optional, dynamic
}

interface NotificationContextProps {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, 'id'>) => void;
  showSuccess: (title: string, message: string, suggestion?: string) => void;
  showError: (title: string, message: string, suggestion?: string) => void;
  showWarning: (title: string, message: string, suggestion?: string) => void;
  showInfo: (title: string, message: string, suggestion?: string) => void;
  dismiss: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { t } = useLanguage();

  const dismiss = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const showNotification = useCallback((notif: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newNotif = { ...notif, id };
    
    setNotifications((prev) => [...prev, newNotif]);

    const duration = notif.duration !== undefined ? notif.duration : 6000;
    if (duration > 0) {
      setTimeout(() => {
        dismiss(id);
      }, duration);
    }
  }, [dismiss]);

  const showSuccess = useCallback((title: string, message: string, suggestion?: string) => {
    showNotification({
      type: 'success',
      title,
      message,
      suggestion: suggestion || t({ en: 'No further action required.', id: 'Tidak memerlukan tindakan lebih lanjut.' }),
    });
  }, [showNotification, t]);

  const showError = useCallback((title: string, message: string, suggestion?: string) => {
    showNotification({
      type: 'error',
      title,
      message,
      suggestion: suggestion || t({ en: 'Check your internet connection and try again.', id: 'Periksa koneksi internet Anda dan coba lagi.' }),
      duration: 8000, // Error messages persist slightly longer for readability
    });
  }, [showNotification, t]);

  const showWarning = useCallback((title: string, message: string, suggestion?: string) => {
    showNotification({
      type: 'warning',
      title,
      message,
      suggestion,
    });
  }, [showNotification]);

  const showInfo = useCallback((title: string, message: string, suggestion?: string) => {
    showNotification({
      type: 'info',
      title,
      message,
      suggestion,
    });
  }, [showNotification]);

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, showSuccess, showError, showWarning, showInfo, dismiss, clearAll }}>
      {children}
      
      {/* Toast Notifications Overlay HUD */}
      <div 
        id="notification-toast-hud"
        className="fixed top-6 right-6 z-[9999] flex flex-col gap-4 w-full max-w-md pointer-events-none px-4 sm:px-0"
      >
        <AnimatePresence mode="popLayout">
          {notifications.map((notif) => {
            let icon = <Info className="text-blue-400 shrink-0" size={24} />;
            let borderColor = 'border-blue-500';
            let bgGlow = 'rgba(59, 130, 246, 0.1)';
            let titleColor = 'text-white';

            if (notif.type === 'success') {
              icon = <CheckCircle className="text-emerald-400 shrink-0" size={24} />;
              borderColor = 'border-emerald-500';
              bgGlow = 'rgba(16, 185, 129, 0.15)';
              titleColor = 'text-emerald-400';
            } else if (notif.type === 'error') {
              icon = <AlertOctagon className="text-[#E50012] shrink-0" size={24} />;
              borderColor = 'border-[#E50012]';
              bgGlow = 'rgba(229, 0, 18, 0.15)';
              titleColor = 'text-[#E50012]';
            } else if (notif.type === 'warning') {
              icon = <AlertTriangle className="text-[#FFB800] shrink-0" size={24} />;
              borderColor = 'border-[#FFB800]';
              bgGlow = 'rgba(255, 184, 0, 0.15)';
              titleColor = 'text-[#FFB800]';
            }

            return (
              <motion.div
                key={notif.id}
                id={`toast-item-${notif.id}`}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                style={{ boxShadow: `0 8px 30px ${bgGlow}, 0 2px 4px rgba(0,0,0,0.5)`, backdropFilter: 'blur(8px)' }}
                className={`pointer-events-auto bg-[#121212]/95 border-l-4 ${borderColor} p-4 rounded-sm flex gap-4 transition-all hover:scale-[1.01]`}
              >
                <div className="mt-0.5">{icon}</div>
                <div className="flex-grow space-y-1">
                  <h4 className={`text-sm font-heading font-extrabold tracking-wide uppercase ${titleColor}`}>
                    {notif.title}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed font-sans subpixel-antialiased">
                    {notif.message}
                  </p>
                  {notif.suggestion && (
                    <div className="pt-1.5 flex items-start gap-1.5 border-t border-white/5 mt-2">
                      <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#FFB800] shrink-0 pt-0.5">
                        {t({ en: 'TIP:', id: 'SARAN:' })}
                      </div>
                      <p className="text-[#FFB800]/90 text-xs italic font-sans font-medium">
                        {notif.suggestion}
                      </p>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  id={`btn-dismiss-toast-${notif.id}`}
                  onClick={() => dismiss(notif.id)}
                  className="text-gray-500 hover:text-white hover:bg-white/5 p-1 rounded transition-all shrink-0 h-fit"
                  aria-label="Dismiss message"
                >
                  <X size={16} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
