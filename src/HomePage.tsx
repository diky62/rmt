import React from 'react';
import { HeroSection } from './components/HeroSection';
import { Award, Drill, Target, CheckCircle2, ChevronRight, ShieldCheck, HelpCircle, Zap, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from './context/LanguageContext';

// Import premium generated graphics
import existensiKamiImg from './assets/images/existensi_kami_img_1779322163954.png';
import portofolioPipingImg from './assets/images/portofolio_piping_img_1779322183389.png';

export function HomePage() {
  const [activeTab, setActiveTab] = React.useState('construction');
  const { t } = useLanguage();

  const layananData = [
    {
      id: 'construction',
      num: '01',
      title: t({ en: 'Construction Manufacturing', id: 'Construction Manufacturing' }),
      desc: t({
        en: 'Providing industrial construction services with international standards and professional manpower across civil, piping, mechanical, fabrication and installation works.',
        id: 'Menyediakan layanan konstruksi industri dengan standar internasional dan tenaga kerja profesional di berbagai bidang sipil, perpipaan, mekanikal, fabrikasi dan instalasi.'
      }),
      image: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%206.jpg?updatedAt=1779693565916",
      badge: t({ en: 'High Precision Tier', id: 'Tingkat Presisi Tinggi' }),
      features: t({
        en: [
          'Civil Work (concrete structures, foundations, bundwalls, flooring, manholes)',
          'Steel Structure (platform structures, bridge modifications, steel fabrication)',
          'Piping System (process piping, HDPE pipes, FRP pipes, valve fittings, CPVC)',
          'Mechanical & Rotating (gearbox, pump systems, turbine, rigging installations)'
        ],
        id: [
          'Civil Work (struktur beton, pondasi, bundwall, flooring, manhole)',
          'Steel Structure (platform structure, bridge modification, steel fabrication)',
          'Piping System (process piping, HDPE pipe, FRP pipe, valve fitting, CPVC)',
          'Mechanical & Rotating (gearbox, pump system, turbine, rigging installation)'
        ]
      }),
      quality: 'ISO 9001:2015 & AWS Standard Certification',
      metric: '99.8% Dimension Accuracy',
      bgBadge: 'bg-[#E50012]/10 text-[#E50012]',
      bulletColor: 'bg-[#E50012]'
    },
    {
      id: 'maintenance',
      num: '02',
      title: t({ en: 'Plant Maintenance & Manpower', id: 'Plant Maintenance & Manpower' }),
      desc: t({
         en: 'Periodic maintenance and plant servicing to keep industrial operation highly optimized, alongside experienced skilled and helper manpower supply.',
         id: 'Layanan maintenance dan perawatan fasilitas industri secara berkala demi menjaga operasional tetap optimal, serta didukung oleh penyediaan tenaga kerja (manpower supply) terampil.'
      }),
      image: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Manpower%20Supply.jpeg",
      badge: t({ en: 'Sustainable Longevity', id: 'Durabilitas Berkelanjutan' }),
      features: t({
        en: [
          'Periodic Plant Maintenance for peak operational output and efficiency',
          'Pipeline cleaning and comprehensive WTP & CRO pond sludge cleaning',
          'Professional Manpower Supply solutions (skilled technicians & heavy-industry helpers)',
          'Emergency mechanical repairs and custom modifications for rotating components'
        ],
        id: [
          'Plant Maintenance berkala untuk performa operasional maksimal',
          'Pembersihan jalur pipa serta pembersihan sludge (WTP & CRO pond)',
          'Penyediaan Manpower Supply (tenaga skilled & helper berpengalaman)',
          'Perbaikan darurat serta modifikasi komponen mekanikal & rotating'
        ]
      }),
      quality: 'ISO 45001:2018 Certification (Zero Harm)',
      metric: '24/7 Field Response',
      bgBadge: 'bg-[#FFB800]/10 text-[#FFB800]',
      bulletColor: 'bg-[#FFB800]'
    },
    {
      id: 'supply',
      num: '03',
      title: t({ en: 'General Supply & Trading', id: 'General Supply & Trading' }),
      desc: t({
        en: 'Serving your industrial procurement needs with maximum quality sourcing networks, heavy equipment rentals, and integrated logistics infrastructure.',
        id: 'Menyediakan segala kebutuhan industri Anda dengan standar kualitas terbaik, jaringan sourcing global/lokal tepercaya, persewaan utilitas alat, dan logistik terintegrasi.'
      }),
      image: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Material%20supply.jpeg?updatedAt=1779693565523",
      badge: t({ en: 'Integrated Supply Chain Management', id: 'Manajemen Supply Chain Terpadu' }),
      features: t({
        en: [
          'Global & local sourcing of Carbon Pipes, Valves & Fittings, and Scaffolding',
          'Comprehensive heavy machinery rentals including Crane and Forklift configurations',
          'Wind Breaker Net distribution, heavy duty Safety Nets, and Industrial Tools',
          'Mountain fresh water supply dispatch alongside precision mechanical machining'
        ],
        id: [
          'Sourcing & Trading Carbon Pipe, Valves & Fittings, Scaffolding Material',
          'Jasa Persewaan Alat Berat (Crane Rental & Forklift Rental)',
          'Pengadaan Wind Breaker Net, Safety Net, dan Industrial Tools',
          'Pemasokan Mountain Fresh Water Supply & Custom Machining Presisi'
        ]
      }),
      quality: 'Verified Global & Local Supply Network',
      metric: '100% Calibrated Sourcing',
      bgBadge: 'bg-[#E50012]/10 text-[#E50012]',
      bulletColor: 'bg-[#E50012]'
    }
  ];

  return (
    <div>
      <div className="-mt-20 md:-mt-24">
        <HeroSection />
      </div>

      {/* Kelebihan Perusahaan Dalam Angka */}
      <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 md:divide-x md:divide-gray-150">
            {[
              {
                number: '15+',
                label: t({ en: 'Years Experience', id: 'Tahun Jam Terbang' }),
                desc: t({
                  en: 'Comprehensive track record managing heavy fabrication, piping configuration, and skilled crew dispatch.',
                  id: 'Pengalaman komprehensif mengelola proyek fabrikasi, mekanis, dan manpower.'
                })
              },
              {
                number: '3',
                label: t({ en: 'ISO Certifications', id: 'Sertifikasi ISO' }),
                desc: t({
                  en: 'ISO 9001, ISO 45001, and ISO 14001 internationally certified quality management models.',
                  id: 'ISO 9001, ISO 45001, dan standard mutu internasional yang diakui global.'
                })
              },
              {
                number: '100%',
                label: t({ en: 'Zero Accident', id: 'Zero Accident' }),
                desc: t({
                  en: 'Exemplary workplace safety protocols designed to support clean operational continuity with zero downtime losses.',
                  id: 'Mitigasi keselamatan kerja maksimal untuk menjamin kelancaran operasional kru.'
                })
              },
              {
                number: '99.8%',
                label: t({ en: 'Precision Accuracy', id: 'Akurasi Presisi' }),
                desc: t({
                  en: 'Highly detailed structural dimension compliance designed for high-pressure plant piping pipelines.',
                  id: 'Tingkat kesesuaian fabrikasi struktur baja serta sistem perpipaan high-pressure.'
                })
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col text-left md:px-6 first:pl-0"
              >
                <span className="text-4xl md:text-6xl font-semibold text-[#E50012] font-sans tracking-tight mb-2">
                  {stat.number}
                </span>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-800 mb-3 block">
                  {stat.label}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed font-sans hidden md:block">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selayang Pandang (About Snippet) with Premium Image Feature */}
      <section className="bg-gray-50 text-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column Left: Premium Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            id="about-premium-image"
          >
            {/* Background design frames representing engineering focus bounds */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#FFB800] opacity-40 rounded-tl-sm" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#E50012] opacity-40 rounded-br-sm" />
            
            {/* The main picture with fine details (strictly only image) */}
            <div className="relative overflow-hidden group shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-gray-200 rounded-sm">
              <img 
                src={existensiKamiImg} 
                alt="Konstruksi Industrial PT. Raid Multi Teknik" 
                className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating absolute tag overlapping the edge with solid red background and Montserrat (font-sans) */}
            <div className="absolute -bottom-6 -left-6 bg-[#E50012] text-white p-5 shadow-2xl hidden md:block">
              <div className="font-sans text-3xl font-normal leading-none">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest mt-1 text-white/95 font-sans">
                {t({ en: 'Years Experience', id: 'Tahun Pengalaman Kerja' })}
              </div>
            </div>
          </motion.div>

          {/* Column Right: Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
            id="about-profile-details"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading mb-6 font-semibold capitalize leading-tight">
                {t({
                  en: <>Our<br/><span className="italic text-[#E50012] font-serif text-5xl md:text-6xl text-gradient">Presence</span></>,
                  id: <>Eksistensi<br/><span className="italic text-[#E50012] font-serif text-5xl md:text-6xl">Kami</span></>
                })}
              </h2>
              <div className="h-0.5 w-16 bg-[#FFB800] mb-6"></div>
              <p className="text-gray-800 text-lg leading-relaxed mb-4 font-sans">
                {t({
                  en: "With over 15 years history in industrial fabrication, mechanical plant maintenance, and manpower mobilization, PT. Raid Multi Teknik executes every industrial project under absolute quality milestones.",
                  id: "Dengan jam terbang melampaui 15 tahun di kancah pabrikasi, pemeliharaan mekanis, dan penyediaan manpower, PT. Raid Multi Teknik menyempurnakan setiap proses pengerjaan dengan standard mutu absolut."
                })}
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-sans">
                {t({
                  en: "We operate under three stringent international ISO standards, highlighting our organizational discipline to respect project schedules (minimal downtime) and absolute workplace safety mitigation.",
                  id: "Kami beroperasi di bawah payung tiga standar sertifikasi ISO internasional, merefleksikan kedisiplinan kami dalam menghormati jadwal (downtime minim) dan mitigasi risiko keselamatan kerja (Zero Accident)."
                })}
              </p>
            </div>

            {/* Kelebihan Perusahaan (Presisi Tinggi, Kecepatan Relatif, Keunggulan Standar) */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {[
                {
                  icon: Target,
                  color: '#E50012',
                  title: t({ en: 'High Precision', id: 'Presisi Tinggi' }),
                  desc: t({
                    en: 'Uncompromised execution standards. Every industrial configuration is carefully calibrated for premium results.',
                    id: 'Standar eksekusi tanpa celah. Setiap sambungan, setiap struktur, kami kalibrasi untuk hasil terbaik.'
                  })
                },
                {
                  icon: Zap,
                  color: '#FFB800',
                  title: t({ en: 'Swift Delivery', id: 'Kecepatan Relatif' }),
                  desc: t({
                    en: 'We fully respect strict timeline targets without sacrificing structural integrity, durability or plant specifications.',
                    id: 'Menghormati tenggat waktu secara absolut tanpa mengorbankan durabilitas operasional sedikit pun.'
                  })
                },
                {
                  icon: Award,
                  color: '#E50012',
                  title: t({ en: 'Certified Standards', id: 'Keunggulan Standar' }),
                  desc: t({
                    en: 'Integrating internationally-benchmarked quality, health, and construction safety models directly into our work ethic.',
                    id: 'Integrasi standar manajemen mutu, kesehatan, dan keselamatan bertaraf internasional ke dalam etos kerja.'
                  })
                }
              ].map((adv, index) => {
                const Icon = adv.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-5 border border-gray-200/60 border-l-4 hover:shadow-md transition-all duration-300 rounded-r-lg flex flex-col sm:flex-row gap-4 items-start relative group overflow-hidden"
                    style={{ borderLeftColor: adv.color }}
                  >
                    <div 
                      className="p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        color: adv.color, 
                        backgroundColor: adv.color === '#E50012' ? 'rgba(229,0,18,0.05)' : 'rgba(255,184,0,0.05)' 
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-black font-heading group-hover:text-[#E50012] transition-colors duration-300">
                        {adv.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link to="/about" className="inline-flex items-center gap-2 text-[#E50012] hover:text-[#FFB800] transition-all font-bold capitalize text-sm border-b-2 border-[#E50012] hover:border-[#FFB800] pb-1">
                {t({ en: 'View Full Company Profile', id: 'Baca Profil Lengkap Perusahaan' })}
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Redesigned Layanan Section: Tab On Side Layout with Accents and Premium List */}
      <section className="bg-[#111] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden" id="layanan-home-section">
        <div className="max-w-[1300px] mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-6 font-semibold capitalize text-white"
          >
            {t({
              en: <>Core <span className="font-serif italic text-5xl md:text-6xl text-[#FFB800]">Services</span></>,
              id: <>Fokus <span className="font-serif italic text-5xl md:text-6xl text-[#FFB800]">Layanan</span></>
            })}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-16 bg-[#E50012] mx-auto mb-8 origin-center"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {t({
              en: "Three foundational pillars formulated to satisfy medium to large-scale industrial projects.",
              id: "Tiga fondasi layanan utama untuk memfasilitasi kebutuhan proyek industrial skala menengah hingga besar."
            })}
          </motion.p>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Layanans Sidebar (Side Tabs with custom list accent line) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative pl-6 border-l border-white/10">
              {layananData.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="w-full text-left relative focus:outline-none p-5 transition-all duration-300 block group mb-4 last:mb-0 rounded-lg cursor-pointer"
                    id={`btn-tab-${tab.id}`}
                  >
                    {/* Active accent vertical line list accent */}
                    {isActive ? (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute left-[-26px] top-0 bottom-0 w-[4px] bg-[#E50012]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    ) : (
                      <div className="absolute left-[-26px] top-0 bottom-0 w-[4px] bg-transparent group-hover:bg-[#FFB800]/50 transition-colors" />
                    )}
                    
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-sm font-bold tracking-wider ${isActive ? 'text-[#E50012]' : 'text-gray-500 group-hover:text-white transition-colors'}`}>
                        {tab.num}
                      </span>
                      <div className={`h-px w-6 ${isActive ? 'bg-[#E50012]' : 'bg-white/20'} transition-colors`} />
                      <span className={`text-[10px] uppercase font-bold tracking-widest ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                        {tab.id.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-heading mt-2 ${isActive ? 'text-white font-semibold scale-102 origin-left' : 'text-gray-400 font-medium group-hover:text-white'} transition-all duration-300`}>
                      {tab.title}
                    </h3>
                    <p className={`text-xs mt-1 transition-all duration-300 ${isActive ? 'text-gray-300 opacity-100 block' : 'text-transparent line-clamp-1 opacity-0 h-0 group-hover:text-gray-400 group-hover:opacity-100 group-hover:h-auto'}`}>
                      {tab.desc.substring(0, 90)}...
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Content Container */}
          <div className="lg:col-span-7 bg-[#1a1a1a] border border-white/10 shadow-2xl relative overflow-hidden group min-h-[440px] rounded-lg p-6 md:p-10 flex items-end" id="layanan-premium-details">
            {/* Absolute backgrounds for continuous smooth crossfade */}
            {layananData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div 
                  key={tab.id}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'}`}
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.90) 100%), url('${tab.image}')`,
                  }}
                />
              );
            })}

            {/* Content overlay */}
            <div className="relative z-10 w-full">
              {layananData.map((tab) => {
                if (activeTab !== tab.id) return null;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-white tracking-tight border-b border-[#E50012]/80 pb-2 max-w-lg">
                      {tab.title}
                    </h3>

                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans max-w-2xl line-clamp-2">
                      {tab.desc}
                    </p>

                    <div className="pt-2">
                      <Link 
                        to="/services" 
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-white bg-white/10 hover:bg-[#E50012] hover:text-white border border-white/20 hover:border-[#E50012] px-4 py-2.5 transition-all duration-300 shadow-sm uppercase tracking-wider font-mono rounded"
                      >
                        {t({ en: 'Learn More', id: 'Selengkapnya' })} <ChevronRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="inline-block bg-white hover:bg-[#E50012] text-black hover:text-white transition-all duration-300 font-bold text-sm px-8 py-4 capitalize hover:shadow-lg">
            {t({ en: 'Explore All Services', id: 'Jelajahi Semua Layanan Lengkap' })}
          </Link>
        </motion.div>
      </section>

      {/* Featured Projects Snippet with Premium Image Feature */}
      <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden" id="portofolio-home-section">
        <div className="max-w-[1300px] mx-auto border-t border-gray-200 pt-20">
          
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-4xl md:text-5xl font-heading mb-4 font-semibold capitalize">
                {t({
                  en: <>Featured <span className="font-serif italic text-5xl md:text-6xl text-[#E50012]">Portfolio</span></>,
                  id: <>Portofolio <span className="font-serif italic text-5xl md:text-6xl text-[#E50012]">Pilihan</span></>
                })}
              </h2>
              <div className="h-0.5 w-16 bg-[#FFB800] mb-4" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/projects" className="text-[#E50012] hover:text-black transition-colors font-bold capitalize text-sm border-b-2 border-transparent hover:border-black pb-1">
                {t({ en: 'View All Projects', id: 'Lihat Seluruh Proyek' })}
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Premium Image Feature Showcase (Formatted like Our Presence) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
              id="portfolio-premium-image"
            >
              {/* Background design frames representing engineering focus bounds */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#FFB800] opacity-40 rounded-tl-sm" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#E50012] opacity-40 rounded-br-sm" />
              
              {/* The main picture with fine details (strictly only image) */}
              <div className="w-full h-[450px] relative overflow-hidden group border border-gray-200 shadow-xl rounded-sm">
                <img 
                  src={portofolioPipingImg} 
                  alt="Premium Piping & Instrumentation" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating absolute tag overlapping the edge with solid red background */}
              <div className="absolute -bottom-6 -left-6 bg-[#E50012] text-white p-5 shadow-2xl hidden md:block z-10">
                <div className="font-sans text-3xl font-normal leading-none">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1 text-white/95 font-sans">
                  {t({ en: 'Quality Verified', id: 'Kualitas Terverifikasi' })}
                </div>
              </div>
            </motion.div>

            {/* Right Col: 5 Projects with Premium Scrolling Feature */}
            <div className="lg:col-span-7 flex flex-col justify-between" id="portfolio-client-cards">
              <div className="mb-2 text-xs font-mono text-gray-400 flex items-center justify-between gap-2 uppercase tracking-wide">
                <span>{t({ en: "Featured Case Studies (Scroll to Explore)", id: "Studi Kasus Pilihan (Scroll untuk Menjelajah)" })}</span>
                <span className="animate-bounce">↓</span>
              </div>
              
              <div 
                className="max-h-[450px] overflow-y-auto pr-3 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#e50012 rgba(0,0,0,0.05)'
                }}
              >
                
                {/* Project 1: Cirebon Power */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#111] text-white p-8 md:p-10 flex flex-col justify-between hover:border-l-4 hover:border-[#FFB800] border-l-4 border-transparent transition-all shadow-md group/card duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4 gap-4">
                      <h4 className="text-[#FFB800] font-sans font-medium text-sm tracking-wider uppercase">
                        {t({ en: 'Strategic Client Project', id: 'Proyek Strategis Klien' })}
                      </h4>
                      <img 
                        src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/7.png" 
                        alt="Cirebon Power" 
                        className="w-32 h-8 object-contain filter brightness-0 invert opacity-60 group-hover/card:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-4 capitalize group-hover/card:text-[#FFB800] transition-colors">
                      Piping & <span className="font-serif italic text-xl">Mechanical Installation</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {t({
                        en: 'Service air cooling tower piping, demineralized water flow lines, and heavy duty industrial gearboxes overhaul. Completed smoothly within zero-harm safety margins.',
                        id: 'Instalasi pipa service air cooling tower, demin water line WTP, hingga penggantian gearbox alat berat. Seluruh tingkat kerumitan dilaporkan selesai dalam jadwal downtime terkontrol secara absolut.'
                      })}
                    </p>
                  </div>
                  
                  {/* Specific project list accents */}
                  <div className="border-t border-white/10 pt-4 flex flex-wrap gap-x-6 gap-y-2 mt-4 text-[12px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#E50012]" />
                      <span>Manpower: Pipe Fitters & Welders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#FFB800]" />
                      <span>Location: Coal Yard Cirebon</span>
                    </div>
                  </div>
                </motion.div>

                {/* Project 2: Hyundai E&C */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#f4f4f4] text-black p-8 md:p-10 flex flex-col justify-between hover:border-l-4 hover:border-[#E50012] border-l-4 border-transparent transition-all shadow-md group/card duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4 gap-4">
                      <h4 className="text-[#E50012] font-sans font-medium text-sm tracking-wider uppercase">
                        {t({ en: 'Infrastructure Supply', id: 'Penyediaan Infrastruktur' })}
                      </h4>
                      <img 
                        src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/8.png" 
                        alt="Hyundai E&C" 
                        className="w-32 h-8 object-contain filter brightness-0 opacity-60 group-hover/card:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-4 capitalize group-hover/card:text-[#E50012] transition-colors">
                      General Supply & <span className="font-serif italic text-xl">Installation Support</span>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {t({
                        en: 'Large scale deployment and setups of 100+ high-durability surveillance cameras and industrial structures under intense extreme site parameters, emphasizing our supply-chain speed.',
                        id: 'Penyediaan dan pemasangan berskala besar untuk 100+ unit kamera CCTV outdoor tangguh cuaca ekstrim di area industri raksasa. Menunjukkan elastisitas logistik logis dan kesiapan tim instalasi lapang kami.'
                      })}
                    </p>
                  </div>

                  {/* Specific project list accents */}
                  <div className="border-t border-gray-200 pt-4 flex flex-wrap gap-x-6 gap-y-2 mt-4 text-[12px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#E50012]" />
                      <span>100+ Outdoor CCTV Units</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-black" />
                      <span>Full Security Configuration</span>
                    </div>
                  </div>
                </motion.div>

                {/* Project 3: Atlas Copco */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#111] text-white p-8 md:p-10 flex flex-col justify-between hover:border-l-4 hover:border-[#FFB800] border-l-4 border-transparent transition-all shadow-md group/card duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4 gap-4">
                      <h4 className="text-[#FFB800] font-sans font-medium text-sm tracking-wider uppercase">
                        {t({ en: 'Manpower Supply', id: 'Penyediaan Tenaga Kerja' })}
                      </h4>
                      <img 
                        src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Atlas-Copco-Logo.svg_-1024x498.webp?updatedAt=1779692290422" 
                        alt="Atlas Copco" 
                        className="w-32 h-8 object-contain filter brightness-0 invert opacity-60 group-hover/card:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-4 capitalize group-hover/card:text-[#FFB800] transition-colors">
                      Skilled Manpower & <span className="font-serif italic text-xl">Mechanical Support</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {t({
                        en: 'Sourcing and mobilization of certified highly skilled mechanical craft resources, operators, and helpers to support core compressor asset overhauls and piping expansion layouts.',
                        id: 'Penyediaan dan mobilisasi tenaga mekanik ahli bersertifikat, operator, serta helper lapang untuk mendukung overhaul kompresor utama dan perluasan sistem jalur perpipaan pabrik.'
                      })}
                    </p>
                  </div>

                  {/* Specific project list accents */}
                  <div className="border-t border-white/10 pt-4 flex flex-wrap gap-x-6 gap-y-2 mt-4 text-[12px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#E50012]" />
                      <span>Certified Technicians</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#FFB800]" />
                      <span>Compressor Overhaul</span>
                    </div>
                  </div>
                </motion.div>

                {/* Project 4: Toshiba */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#f4f4f4] text-black p-8 md:p-10 flex flex-col justify-between hover:border-l-4 hover:border-[#E50012] border-l-4 border-transparent transition-all shadow-md group/card duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4 gap-4">
                      <h4 className="text-[#E50012] font-sans font-medium text-sm tracking-wider uppercase">
                        {t({ en: 'Valve Engineering', id: 'Rekayasa Katup' })}
                      </h4>
                      <img 
                        src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/11.png" 
                        alt="Toshiba" 
                        className="w-32 h-8 object-contain filter brightness-0 opacity-60 group-hover/card:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-4 capitalize group-hover/card:text-[#E50012] transition-colors">
                      Valve Repair & <span className="font-serif italic text-xl">Machining Supply</span>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {t({
                        en: 'Supplying specialized high-precision machinery, custom calibration tools, and technical manpower for complex industrial steam valve seating repairs and testing procedures.',
                        id: 'Penyediaan unit permesinan presisi khusus, kalibrator katup uap industri, serta bantuan teknis pengerjaan bubut lapangan guna meminimalkan durasi shutdown pembangkit.'
                      })}
                    </p>
                  </div>

                  {/* Specific project list accents */}
                  <div className="border-t border-gray-200 pt-4 flex flex-wrap gap-x-6 gap-y-2 mt-4 text-[12px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#E50012]" />
                      <span>Precision Machining</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-black" />
                      <span>Calibrator Equipment</span>
                    </div>
                  </div>
                </motion.div>

                {/* Project 5: Gecko */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#111] text-white p-8 md:p-10 flex flex-col justify-between hover:border-l-4 hover:border-[#FFB800] border-l-4 border-transparent transition-all shadow-md group/card duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4 gap-4">
                      <h4 className="text-[#FFB800] font-sans font-medium text-sm tracking-wider uppercase">
                        {t({ en: 'Chemical Piping', id: 'Perpipaan Kimia' })}
                      </h4>
                      <img 
                        src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/10.png" 
                        alt="Gecko" 
                        className="w-24 h-8 object-contain filter brightness-0 invert opacity-60 group-hover/card:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-4 capitalize group-hover/card:text-[#FFB800] transition-colors">
                      HDPE Acid Line <span className="font-serif italic text-xl">Pipeline Installation</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {t({
                        en: 'Complex installation of chemical-grade HDPE pipelines for high-corrosive acid transfer loop systems, guaranteeing zero-leakage joints using advanced butt-fusion welding methods.',
                        id: 'Pemasangan pipa HDPE tahan korosi tinggi untuk transfer sirkulasi cairan asam kimia berbahaya, menjamin penyambungan tanpa kebocoran dengan teknik penyambungan butt-fusion termal modern.'
                      })}
                    </p>
                  </div>

                  {/* Specific project list accents */}
                  <div className="border-t border-white/10 pt-4 flex flex-wrap gap-x-6 gap-y-2 mt-4 text-[12px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#E50012]" />
                      <span>Butt-Fusion Joinery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-[#FFB800]" />
                      <span>Zero-Leakage Acid Lines</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
