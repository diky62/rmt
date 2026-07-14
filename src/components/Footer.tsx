import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Shield, ArrowUpRight, Award, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer 
      className="bg-[#0b0b0b] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t-2 border-[#FFB800] relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.94), rgba(5, 5, 5, 0.98)), url('https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Hero%20Image%20Background')" }}
    >
      {/* Decorative top ambient bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E50012] via-[#FFB800] to-transparent opacity-80" />
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Upper Segment: Premium CTA invitation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 mb-16 border-b border-white/10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFB800] font-mono border border-[#FFB800]/20 px-3 py-1 rounded-sm bg-[#FFB800]/5">
              {t({ en: 'construction & plant maintenance synergy', id: 'kolaborasi konstruksi & pemeliharaan' })}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold capitalize leading-tight">
              {t({
                en: <>Ready to Calibrate Your<br/><span className="italic text-[#E50012] font-serif text-5xl md:text-6xl lg:text-7xl">Industrial Project?</span></>,
                id: <>Siap Mengkalibrasi Proyek <br/><span className="italic text-[#E50012] font-serif text-5xl md:text-6xl lg:text-7xl">Industri Anda?</span></>
              })}
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              {t({
                en: "Discuss complex mechanical parameters, high-pressure piping solutions, or emergency manpower supply requirements with our certified engineering leaders today.",
                id: "Diskusikan spesifikasi kebutuhan mekanis, instalasi pipa presisi tinggi, atau penyediaan manpower bersama tim engineering ahli kami."
              })}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-[#E50012] hover:bg-[#FFB800] hover:text-black hover:border-[#FFB800] border border-[#E50012] text-white font-bold text-sm px-8 py-4 transition-all duration-300 w-full md:w-auto text-center"
            >
              {t({ en: 'Connect with Technical Leaders', id: 'Hubungi Pemimpin Teknis' })}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Middle Segment: Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Premium Brand Profiling (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block focus:outline-none">
              <img 
                src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/LOGO%20RAID%20MULTI%20TEKNIK%20WH.png" 
                alt="PT. Raid Multi Teknik Logo" 
                className="h-[51px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              {t({
                en: "A nationwide mechanical, construction, and plant maintenance contractor. Championing critical asset uptime through swift responsive speeds, absolute durability, and zero-compromise safety.",
                id: "Kontraktor mekanis, konstruksi, dan pemeliharaan berskala nasional. Menjaga reliabilitas sistem produksi industri melalui prinsip kecepatan responsif, durabilitas mutlak, dan keselamatan kerja tanpa celah."
              })}
            </p>
            {/* Accreditation Badge Representation */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <Shield size={14} className="text-[#FFB800]" />
                <span>{t({ en: '3 ISO Certifications', id: '3 Sertifikasi ISO' })}</span>
              </div>
              <span className="text-gray-700">|</span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <Award size={14} className="text-[#E50012]" />
                <span>{t({ en: 'Absolute HSE Standard', id: 'Standard K3 Mutlak' })}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-6 lg:pl-4">
            <h4 className="text-sm uppercase font-mono tracking-widest text-[#FFB800] font-bold border-l-2 border-[#E50012] pl-3">
              {t({ en: 'Company', id: 'Perusahaan' })}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors block">
                  {t({ en: 'Home Lobby', id: 'Beranda Utama' })}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors block">
                  {t({ en: 'Corporate Profile', id: 'Profil Perusahaan' })}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors block">
                  {t({ en: 'Our Services', id: 'Layanan Kami' })}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white hover:underline transition-colors block">
                  {t({ en: 'Work Portfolio', id: 'Portofolio Kerja' })}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors block">
                  {t({ en: 'Office Contact', id: 'Kontak Kantor' })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan Populer (col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm uppercase font-mono tracking-widest text-[#FFB800] font-bold border-l-2 border-[#FFB800] pl-3">
              {t({ en: 'Competency Focus', id: 'Fokus Kompetensi' })}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="w-1.5 h-1.5 bg-[#E50012] rounded-full group-hover:bg-[#FFB800] transition-colors" />
                <span className="group-hover:text-white transition-colors">Construction Manufacture</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="w-1.5 h-1.5 bg-[#E50012] rounded-full group-hover:bg-[#FFB800] transition-colors" />
                <span className="group-hover:text-white transition-colors">High Pressure Piping</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="w-1.5 h-1.5 bg-[#E50012] rounded-full group-hover:bg-[#FFB800] transition-colors" />
                <span className="group-hover:text-white transition-colors">Overhaul & Rotating Maintenance</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="w-1.5 h-1.5 bg-[#E50012] rounded-full group-hover:bg-[#FFB800] transition-colors" />
                <span className="group-hover:text-white transition-colors">General Engineering Supply</span>
              </li>
              <li className="flex items-center gap-2 group cursor-pointer">
                <span className="w-1.5 h-1.5 bg-[#E50012] rounded-full group-hover:bg-[#FFB800] transition-colors" />
                <span className="group-hover:text-white transition-colors">Authorized Skilled Manpower</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Coordinates (col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm uppercase font-mono tracking-widest text-[#FFB800] font-bold border-l-2 border-[#E50012] pl-3">
              {t({ en: 'Headquarters', id: 'Kantor Pusat' })}
            </h4>
            <div className="space-y-4 text-sm text-gray-400 font-sans">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E50012] shrink-0 mt-0.5" />
                <span>Jl Cirebon Tegal Km.10, Plumbon, Cirebon, Jawa Barat, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#FFB800] shrink-0" />
                <span className="font-mono">0231-881 0181</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare size={16} className="text-[#FFB800] shrink-0" />
                <span className="font-mono">+62 8179 099 499</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#E50012] shrink-0" />
                <a href="mailto:admin@raidmt.com" className="font-mono hover:text-white hover:underline transition-colors break-all">admin@raidmt.com</a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Globe size={16} className="text-[#FFB800] shrink-0" />
                <a href="https://www.raidmt.com" className="hover:text-white hover:underline text-xs font-mono font-bold tracking-wider text-[#FFB800]">WWW.RAIDMT.COM</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Disclaimer Compliance */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {t({ en: 'PT. RAID MULTI TEKNIK. ALL RIGHTS RESERVED.', id: 'PT. RAID MULTI TEKNIK. SELURUH HAK CIPTA DILINDUNGI UNDANG-UNDANG.' })}
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors text-xs">{t({ en: 'Privacy Policy', id: 'Kebijakan Privasi' })}</span>
            <span>●</span>
            <span className="hover:text-white cursor-pointer transition-colors text-xs">{t({ en: 'Certifications & Compliance', id: 'Sertifikasi & Kepatuhan' })}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
