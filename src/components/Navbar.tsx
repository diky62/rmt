import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t({ en: 'Home', id: 'Home' }), path: '/' },
    { name: t({ en: 'About Us', id: 'Tentang Kami' }), path: '/about' },
    { name: t({ en: 'Services', id: 'Layanan' }), path: '/services' },
    { name: t({ en: 'Projects', id: 'Proyek' }), path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const LanguageSelector = () => (
    <div className="relative flex items-center bg-black/60 border border-white/10 p-[2px] rounded-full text-xs font-mono select-none h-8 w-[76px]">
      <div 
        className="absolute top-[2px] bottom-[2px] w-[34px] rounded-full bg-white transition-all duration-300 ease-in-out"
        style={{
          transform: language === 'en' ? 'translateX(0px)' : 'translateX(36px)'
        }}
      />
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 flex-1 text-center text-[10px] uppercase tracking-wider font-bold h-full flex items-center justify-center transition-colors duration-350 cursor-pointer ${language === 'en' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`relative z-10 flex-1 text-center text-[10px] uppercase tracking-wider font-bold h-full flex items-center justify-center transition-colors duration-350 cursor-pointer ${language === 'id' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
      >
        ID
      </button>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6 md:py-8'}`}>
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-12 md:h-14">
          <Link to="/" className="flex items-center">
            <img 
              src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/LOGO%20RAID%20MULTI%20TEKNIK%20WH.png" 
              alt="Raid Multi Teknik Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-8 md:h-[38px]' : 'h-[38px] md:h-11'}`}
              referrerPolicy="no-referrer"
            />
          </Link>
 
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold capitalize transition-colors hover:text-[#FFB800] ${isActive(link.path) ? 'text-[#FFB800]' : 'text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSelector />
            <Link 
              to="/contact"
              className="bg-[#E50012] hover:bg-[#FFB800] hover:text-black hover:border-[#FFB800] border border-[#E50012] transition-colors duration-300 text-white font-bold text-xs px-5 py-3 capitalize"
            >
              {t({ en: 'Contact Us', id: 'Hubungi Kami' })}
            </Link>
          </div>
 
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button 
              className="text-white hover:text-[#FFB800] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-white/10 absolute w-full top-full left-0">
          <div className="px-6 py-5 flex flex-col space-y-4">
            {links.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold capitalize ${isActive(link.path) ? 'text-[#FFB800]' : 'text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
             <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold capitalize text-[#E50012]"
            >
              {t({ en: 'Contact Us', id: 'Hubungi Kami' })}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
