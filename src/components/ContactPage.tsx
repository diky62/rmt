import React from 'react';
import { Mail, Phone, MapPin, Globe, Sparkles, Clock, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <section id="contact-page-section" className="bg-[#050505] text-white py-20 lg:py-28 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,0,18,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(229,0,18,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10 space-y-16">
        
        {/* Banner/Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#FFB800] font-mono font-bold block mb-3 border-l-2 border-[#E50012] pl-3">
            {t({ en: "PT RAID MULTI TEKNIK RESPONSIVE DESK", id: "DESK RESPONSIF PT RAID MULTI TEKNIK" })}
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 font-semibold tracking-tight"
          >
            {t({
              en: <>Discuss Complex <span className="font-serif italic text-[#FFB800]">Parameters</span></>,
              id: <>Diskusikan Kebutuhan <span className="font-serif italic text-[#FFB800]">Teknis Anda</span></>
            })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-sans"
          >
            {t({
              en: "Connect directly with our engineering officers and project division heads. We are ready to assist with high-fidelity calculations, site evaluations, and technical specifications.",
              id: "Hubungi secara langsung petugas engineering dan kepala divisi proyek kami. Kami siap membantu kalkulasi teknis presisi tinggi, evaluasi lapangan, dan penyusunan spesifikasi teknis."
            })}
          </motion.p>
        </div>

        {/* Global Premium Layout without form and without simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-[#FFB800] font-mono font-semibold border-l-2 border-[#E50012] pl-3 shrink-0 mb-4 animate-pulse">
              {t({ en: "Direct Channels", id: "Saluran Komunikasi Langsung" })}
            </h3>

            {/* Email Card */}
            <a 
              href="mailto:admin@raidmt.com" 
              id="contact-email-card"
              className="block bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-[#FFB800]/40 p-8 transition-all relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFB800]/20 to-transparent group-hover:from-[#FFB800]/60 transition-all duration-300" />
              <div className="flex justify-between items-start">
                <Mail className="text-[#FFB800] mb-4 group-hover:scale-105 transition-transform" size={28} />
                <ArrowUpRight className="text-gray-600 group-hover:text-[#FFB800] transition-colors" size={18} />
              </div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 font-semibold mb-1.5">
                {t({ en: 'Secure Email Address', id: 'Alamat Email Terverifikasi' })}
              </h4>
              <p className="text-lg font-bold text-white break-all transition-colors group-hover:text-[#FFB800]">admin@raidmt.com</p>
              <p className="text-xs text-gray-500 mt-2 font-sans">
                {t({ en: 'For blueprints, tender files, & technical layouts', id: 'Untuk cetak biru, dokumen tender, & berkas teknis' })}
              </p>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/628179099499" 
              target="_blank" 
              rel="noopener noreferrer"
              id="contact-whatsapp-card"
              className="block bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-[#E50012]/40 p-8 transition-all relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E50012]/20 to-transparent group-hover:from-[#E50012]/60 transition-all duration-300" />
              <div className="flex justify-between items-start">
                <Phone className="text-[#E50012] mb-4 group-hover:scale-105 transition-transform" size={28} />
                <ArrowUpRight className="text-gray-600 group-hover:text-[#E50012] transition-colors" size={18} />
              </div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 font-semibold mb-1.5">
                {t({ en: 'Direct Hotdesk Line', id: 'Saluran Hotdesk Langsung' })}
              </h4>
              <p className="text-lg font-bold text-white font-mono transition-colors group-hover:text-[#E50012]">+62 8179 099 499</p>
              <p className="text-xs text-gray-500 mt-2 font-sans">
                {t({ en: 'Immediate operational response & field assistance', id: 'Tanggapan operasional segera & bantuan lapangan cepat' })}
              </p>
            </a>

            {/* Address with coordinates */}
            <div id="contact-address-card" className="bg-[#111] border border-white/5 p-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-500/10 to-transparent" />
              <div className="flex gap-4">
                <MapPin className="text-[#E50012] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 font-semibold mb-1.5">
                    {t({ en: 'Plant & Office Headquarters', id: 'Pusat Workshop & Kantor' })}
                  </h4>
                  <p className="text-sm text-gray-300 font-sans leading-relaxed">
                    Jl Cirebon Tegal Km.10, Plumbon, Cirebon, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-xs text-[#FFB800] font-mono">
                <Globe size={14} />
                <span>PT. Raid Multi Teknik Operational Center</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Consultation SLA & Info Box (Replacing Form) */}
          <div className="lg:col-span-7 space-y-8 bg-[#111] border border-white/10 p-8 md:p-10 rounded-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E50012]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFB800]/5 blur-3xl pointer-events-none" />
            
            {/* Header Form/Assurance banner */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-[#FFB800]" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#FFB800] font-semibold">
                  {t({ en: "Operational Sincerity & Quality SLA", id: "Pernyataan Sinergi & Standar Kualitas" })}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-white">
                {t({ en: "Enterprise Engineering Collaboration", id: "Kerjasama Distribusi & Konstruksi Premium" })}
              </h3>
            </div>

            {/* Sincerity SLA Blocks */}
            <div className="space-y-6 pt-2">
              
              {/* Item 1: Speed Assurance */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-[#151515] text-[#FFB800] border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {t({ en: "24-Hour Initial Feasibility Analysis", id: "Ulasan Kelayakan Awal 24 Jam" })}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {t({
                      en: "Our project estimators and estimators return an initial feasibility report and potential scheduling estimations within one business day of layout transmission.",
                      id: "Estimator proyek kami memberikan tinjauan kelayakan awal dan estimasi linimasa pengerjaan dalam 1x24 jam setelah rincian teknis diterima."
                    })}
                  </p>
                </div>
              </div>

              {/* Item 2: Secure Confidentiality */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-[#151515] text-[#E50012] border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {t({ en: "Vetted Blueprint Protection SLA", id: "Kebijakan Pelindungan Desain & Blueprint" })}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {t({
                      en: "All pipeline specifications, structural loads, CAD models, and materials requirements are protected by strict corporate NDA standards and offline file management protocols.",
                      id: "Seluruh berkas spesifikasi perpipaan, beban struktural, gambar CAD, dan detail kebutuhan material dilindungi standar kerahasiaan korporasi yang sangat ketat."
                    })}
                  </p>
                </div>
              </div>

              {/* Item 3: On-Site Mobilization */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-[#151515] text-[#FFB800] border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {t({ en: "Immediate Field Survey Mobilization", id: "Mobilisasi Survei Lapangan Segera" })}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {t({
                      en: "We dispatch senior site surveyors and pipeline inspection planners directly to plants across West Java and Greater Indonesia to coordinate physical measurements.",
                      id: "Kami siap mengirimkan surveyor lapangan senior dan perencana inspeksi langsung ke lokasi pabrik di seluruh Jawa Barat dan Indonesia untuk koordinasi pengukuran fisik."
                    })}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Sourcing Overview Footer block */}
            <div className="flex gap-3 items-start p-5 bg-[#0a0a0a] border-l-2 border-[#E50012]/80 rounded-sm">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#E50012] pt-0.5 shrink-0">
                {t({ en: "TENDER & BIDDING:", id: "TENDER & PENAWARAN:" })}
              </span>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                {t({
                  en: "We actively participate in private corporate bidding events and formal vendor qualification setups. Please submit formal vendor registrations to admin@raidmt.com.",
                  id: "Kami aktif berpartisipasi dalam agenda lelang terbatas korporasi swasta dan kualifikasi vendor resmi. Silakan kirimkan dokumen registrasi vendor ke admin@raidmt.com."
                })}
              </p>
            </div>

          </div>

        </div>

        {/* Embedded map section */}
        <div id="contact-map-block" className="space-y-6 pt-4">
          <div className="border-l-4 border-[#E50012] pl-4">
            <h3 className="text-xl font-heading font-semibold uppercase tracking-wide">
              {t({ en: "PT RMT Headquarters Geospatial Location", id: "Lokasi Geospasial Kantor Pusat PT RMT" })}
            </h3>
            <p className="text-xs text-gray-500 font-mono mt-1 uppercase">
              Lat: -6.784236, Lng: 108.627370 ● CIREBON REGENCY
            </p>
          </div>
          <div className="bg-[#111] border border-white/10 p-2 rounded-sm overflow-hidden h-[400px] relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d990.4704511236929!2d108.62737026947505!3d-6.784235667860887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDcnMDMuMyJTIDEwOMKwMzcnNDAuOSJF!5e0!3m2!1sid!2sid!4v1784019819212!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title={t({ en: "PT Raid Multi Teknik Map Location", id: "Peta Lokasi PT. Raid Multi Teknik" })}
              ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
