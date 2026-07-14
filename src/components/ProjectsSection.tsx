import React from 'react';
import { Briefcase, Building, Wrench, Package, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const ProjectList = ({ title, items }: { title: string, items: string[] }) => (
  <div className="mb-12">
    <h4 className="text-[#FFB800] font-sans text-sm mb-6 border-b border-[#FFB800]/20 pb-2 inline-block font-semibold capitalize">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm md:text-base leading-relaxed text-gray-300">
          <div className="w-1.5 h-1.5 bg-[#FFB800] mt-2 shrink-0"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedImage, setSelectedImage] = React.useState<any | null>(null);

  const [activeProjectTab, setActiveProjectTab] = React.useState<number>(0);
  const projectTabsRef = React.useRef<HTMLDivElement>(null);
  const categoryTabsRef = React.useRef<HTMLDivElement>(null);

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projectCategories = [
    {
      id: "piping",
      title: t({ en: "Piping Projects", id: "Proyek Perpipaan" }),
      items: [
        {
          title: "Install/Supply Additional service air cooling tower",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/SERVICE%20AIR%20COOLING%20TOWER%20INSTALLATION.jpg?updatedAt=1781510238871"
        },
        {
          title: "Install/Supply Additional demin water line WTP",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/DEMIN%20WATER%20INSTALLATION%20WORK.jpg?updatedAt=1781510233924"
        },
        {
          title: "Install/Supply Fuel oil Filling station garage",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/FUEL%20OIL.jpg?updatedAt=1781510238658"
        },
        {
          title: "Install/Supply Additional FRP pipe for cooling HE turbine",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/FRP%20COOLING%20HE.HEIC?updatedAt=1781510228141"
        },
        {
          title: "Install/replace HDPE pipe for acid transfer pump line",
          client: "Gecko",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/HDPE%20ACID.jpg?updatedAt=1781510238838"
        },
        {
          title: "Install/Supply Additional drain line CPVC pipe 4 inch",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/DRAIN%20LINE.jpeg?updatedAt=1781510220483"
        },
        {
          title: "Install/Supply Additional pipe drain water SWRO WTP",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/SWRO%20WTP%20VENTING%202.jpg?updatedAt=1781510124541"
        }
      ]
    },
    {
      id: "mechanical",
      title: t({ en: "Mechanical & Structures", id: "Mekanikal & Struktur" }),
      items: [
        {
          title: "Replace and install gearbox cooling tower",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MECHANICAL/COOLING%20TOWER%20GEARBOX.jpeg?updatedAt=1781509926532"
        },
        {
          title: "Install/Supply Sump pump for cooling tower",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MECHANICAL/SUMP%20PUMP%20INSTALL.jpg?updatedAt=1781509939972"
        },
        {
          title: "Install/Supply Platform structure for oil filling station",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MECHANICAL/FILLING%20OIL%20PLATFORM.jpg?updatedAt=1781509940151"
        },
        {
          title: "Install/Supply Electric hoist 2 ton for WTP",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MECHANICAL/HOIST%20INSTALLATION.jpeg?updatedAt=1781509937474"
        },
        {
          title: "Repair and modification Coal yard bridge",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MECHANICAL/COAL%20YARD%20BRIDGE.jpeg?updatedAt=1781509927515"
        }
      ]
    },
    {
      id: "civil",
      title: t({ en: "Civil Projects", id: "Proyek Sipil" }),
      items: [
        {
          title: "Concrete Parking DT K350",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/CIVIL/DT%20PARKING%20AREA.jpeg?updatedAt=1781510008919"
        },
        {
          title: "Install Manhole duct bank electrical and boring underground",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/CIVIL/MANHOLE.jpeg?updatedAt=1781509985988"
        },
        {
          title: "Install/Supply sign board and foundation",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/CIVIL/SIGN%20BOARD.jpg?updatedAt=1781510008900"
        },
        {
          title: "Concrete Bundwall K300 and Epoxy floor 500mic",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/CIVIL/EPOXY.jpg?updatedAt=1781510009273"
        }
      ]
    },
    {
      id: "electrical",
      title: t({ en: "Electrical & HVAC", id: "Kelistrikan & HVAC" }),
      items: [
        {
          title: "Additional main panel and distribution panel for turbine workshop",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/ELECTRIC/MAIN%20PANEL%20INSTALLATION.jpg?updatedAt=1781509607251"
        },
        {
          title: "Relocation and install electric pole PLN",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/ELECTRIC/PLN%20POLE%20RELOCATION.jpg?updatedAt=1781509572415"
        },
        {
          title: "Install AC Split 2 & 5 PK for Hyundai building",
          client: "Hyundai E&C",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/ELECTRIC/HVAC%20INSTALLATION.jpg?updatedAt=1781509608797"
        },
        {
          title: "Cooling Tower Motor Replacement",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/ELECTRIC/COOLING%20MOTOR%20REPLACEMENT.jpg?updatedAt=1781509608149"
        }
      ]
    },
    {
      id: "supply",
      title: t({ en: "General Supply", id: "Pasokan Umum" }),
      items: [
        {
          title: "Supply Wind breaker net",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/WIND%20BREAKER.HEIC?updatedAt=1781509735108"
        },
        {
          title: "Supply Carbon pipe 2, 3, 4 inch, valve and fittings",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/CARBON%20PIPE.jpg?updatedAt=1781509734290"
        },
        {
          title: "Supply Rental Crane 25, 50, 120 ton",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/CRANE.jpg?updatedAt=1781509726862"
        },
        {
          title: "Supply Rental forklift 25 ton",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/FORKLIFT%2025T.jpg?updatedAt=1781509727401"
        },
        {
          title: "Supply Mountain fresh water 5500m3",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/Mountain%20Water.JPG?updatedAt=1781509712355"
        },
        {
          title: "Supply Scaffolding materials",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/SCAFFOLDING.jpg?updatedAt=1781509734041"
        }
      ]
    },
    {
      id: "cni",
      title: t({ en: "CNI & Special Supply", id: "CNI & Pasokan Khusus" }),
      items: [
        {
          title: "Install/Supply Receptacle panel for CNI workshop",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/CNI/PANEL%20INSTALLATION.jpeg?updatedAt=1781509835868"
        },
        {
          title: "Ph Meter Relocation",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/CNI/PH%20METER%20RELOCATION.jpeg?updatedAt=1781509849625"
        }
      ]
    },
    {
      id: "maintenance",
      title: t({ en: "Plant Maintenance & Manpower", id: "Pemeliharaan & Tenaga Kerja" }),
      items: [
        {
          title: "Cleaning Sludge CRO pond A, B, D",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MAINTENANCE/CRO.HEIC?updatedAt=1781509780192"
        },
        {
          title: "Cleaning Sludge WTP Pond",
          client: "CEPR",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MAINTENANCE/WTP.jpeg?updatedAt=1781509776673"
        },
        {
          title: "Manpower supply skill and helper",
          client: "Atlas Copco",
          img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Manpower%20Supply.jpeg"
        }
      ]
    }
  ];

  return (
    <section className="bg-[#111] text-white overflow-hidden">
      {/* Projects Header */}
      <div 
        className="py-32 px-6 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Hero%203.jpg')" }}
      >
        <div className="max-w-[1300px] mx-auto relative z-10 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl font-heading mb-6 text-white font-semibold capitalize border-l-4 border-l-[#E50012] pl-4"
          >
            {t({
              en: <>Projects & <span className="font-serif italic text-4xl md:text-5xl text-[#FFB800]">Experience</span></>,
              id: <>Proyek & <span className="font-serif italic text-4xl md:text-5xl text-[#FFB800]">Pengalaman</span></>
            })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-sans text-gray-300 max-w-3xl leading-relaxed"
          >
            {t({
              en: "PT Raid Multi Teknik has successfully managed multiple industrial projects across piping, mechanical structures, civil works, electrical grids, routine maintenance, and industrial supply fields.",
              id: "PT Raid Multi Teknik telah menangani berbagai proyek industrial di bidang piping, mechanical, civil, electrical, maintenance, hingga supply material."
            })}
          </motion.p>
        </div>
      </div>

      <div className="py-20 lg:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1300px] mx-auto space-y-24">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/10 pb-12">
             <motion.div 
               initial={{ opacity: 0, x: -35 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className="p-8 border border-white/10 bg-[#151515]"
             >
                <h3 className="text-[#FFB800] font-semibold mb-3 text-sm capitalize">
                  {t({
                    en: <>On-Time <span className="font-serif italic text-base">Delivery</span></>,
                    id: <>Ketepatan Waktu <span className="font-serif italic text-base">(On-Time Delivery)</span></>
                  })}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t({
                    en: "Measured execution and strict scheduling protocols ensure peak client satisfaction even amid highly challenging and compressed industrial timetables.",
                    id: "Eksekusi terukur and disiplin jadwal menjadikan kepuasan klien tetap optimal di tengah tuntutan jadwal industri yang padat."
                  })}
                </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 35 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className="p-8 border border-white/10 bg-[#151515]"
             >
                <h3 className="text-[#E50012] font-semibold mb-3 text-sm capitalize">
                  {t({
                    en: <>Zero-Tolerance <span className="font-serif italic text-base">Safety</span></>,
                    id: <>Keselamatan Tanpa <span className="font-serif italic text-base">Toleransi</span></>
                  })}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t({
                    en: "Our outstanding safety track record (Zero Harm) is sustained through the comprehensive implementation and continuous policing of ISO 45001 protocols.",
                    id: "Rekor keselamatan gemilang (Zero Harm) tercapai berkat implementasi dan pengawasan berkesinambungan ISO 45001."
                  })}
                </p>
             </motion.div>
          </div>

        {/* Projects Breakdown: Premium Top Tab with Interactive Photo Grid */}
        <div className="space-y-12">
          {/* Top Tab Selectors */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-widest text-[#FFB800] font-mono font-semibold border-l-2 border-[#E50012] pl-3 shrink-0">
                {t({ en: "Project Categories", id: "Kategori Proyek" })}
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollContainer(projectTabsRef, 'left')}
                  className="w-8 h-8 rounded-sm bg-[#1a1a1a] hover:bg-[#E50012] hover:text-white text-gray-400 border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollContainer(projectTabsRef, 'right')}
                  className="w-8 h-8 rounded-sm bg-[#1a1a1a] hover:bg-[#E50012] hover:text-white text-gray-400 border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            
            <div 
              ref={projectTabsRef}
              className="w-full flex overflow-x-auto pb-4 gap-2 border-b border-white/10 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {projectCategories.map((category, index) => {
                const isActive = activeProjectTab === index;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveProjectTab(index);
                    }}
                    className={`relative snap-center shrink-0 px-5 py-3.5 text-xs font-heading font-extrabold uppercase tracking-wider transition-all duration-300 rounded-sm ${
                      isActive 
                        ? 'text-white bg-white/5 border border-white/15' 
                        : 'text-gray-400 bg-transparent hover:text-white hover:bg-white/[0.02] border border-transparent'
                    }`}
                  >
                    <span className={`mr-2 font-mono text-[9px] ${isActive ? 'text-[#FFB800]' : 'text-gray-600'}`}>0{index + 1}</span>
                    {category.title}
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicatorUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E50012] to-[#FFB800]"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Under-tab Interactive Works Photo Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {projectCategories[activeProjectTab].items.map((job, i) => (
                <motion.div
                  key={`${activeProjectTab}-${i}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  onClick={() => setSelectedImage({
                    title: job.title,
                    tag: job.client,
                    desc: t({
                      en: `PT Raid Multi Teknik executed this high-demand ${projectCategories[activeProjectTab].title.toLowerCase()} task matching strict engineering parameters and global heavy safety procedures.`,
                      id: `PT Raid Multi Teknik mengimplementasikan pengerjaan ${projectCategories[activeProjectTab].title.toLowerCase()} presisi ini sesuai standar sertifikasi teknis dan K3 internasional.`
                    }),
                    img: job.img
                  })}
                  className="group relative cursor-pointer overflow-hidden border border-white/5 bg-[#161616] flex flex-col h-[340px] shadow-lg rounded-sm transition-transform"
                >
                  {/* Visual Cover area */}
                  <div className="h-56 w-full overflow-hidden relative">
                    <img 
                      src={job.img} 
                      alt={job.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                    
                    {/* Client / Owner Badge */}
                    <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm border border-[#E50012]/30 text-white text-[10px] font-mono font-semibold px-3 py-1 uppercase tracking-wider">
                      {job.client}
                    </div>

                    {/* Pop out hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-[#E50012] text-white flex items-center justify-center shadow-xl transition-transform duration-300 scale-90 group-hover:scale-100">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Information Details block */}
                  <div className="p-6 flex-grow flex flex-col justify-between bg-[#141414]">
                    <div className="space-y-2">
                      <p className="text-[#FFB800] text-[10px] font-mono uppercase tracking-widest font-semibold">
                        {projectCategories[activeProjectTab].title}
                      </p>
                      <h4 className="font-heading text-[14px] sm:text-[15px] font-semibold text-white group-hover:text-[#E50012] transition-colors leading-snug line-clamp-2">
                        {job.title}
                      </h4>
                    </div>
                    
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#E50012] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      <span>{t({ en: "View Portfolio Shot", id: "Lihat Foto Lapangan" })}</span>
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Operational Activity Gallery - Premium Feature */}
        <div id="operational-activity-gallery" className="pt-8 border-t border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 border-l-4 border-[#E50012] pl-6"
          >
            <h3 className="text-3xl md:text-4xl font-heading mb-4 font-semibold capitalize">
              {t({
                en: <>On-Site Operational <span className="font-serif italic text-4xl text-[#FFB800]">Gallery</span></>,
                id: <>Galeri Operasional <span className="font-serif italic text-4xl text-[#FFB800]">Lapangan</span></>
              })}
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl">
              {t({
                en: "Explore actual company operations and verified skilled craft labor in live industrial environments.",
                id: "Telusuri rekam jejak visual aktivitas lapangan, perawatan teknis pabrik, dan suplai material kami di lokasi proyek."
              })}
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#FFB800] font-mono font-semibold border-l-2 border-[#E50012] pl-3 shrink-0">
                {t({ en: "Gallery Categories", id: "Kategori Galeri" })}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollContainer(categoryTabsRef, 'left')}
                  className="w-8 h-8 rounded-sm bg-[#1a1a1a] hover:bg-[#E50012] hover:text-white text-gray-400 border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollContainer(categoryTabsRef, 'right')}
                  className="w-8 h-8 rounded-sm bg-[#1a1a1a] hover:bg-[#E50012] hover:text-white text-gray-400 border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div 
              ref={categoryTabsRef}
              className="w-full flex overflow-x-auto pb-4 gap-2 border-b border-white/10 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
            {[
              { id: 'all', label: t({ en: 'All Activities', id: 'Semua Aktivitas' }) },
              { id: 'construction', label: t({ en: 'Construction & Civil', id: 'Konstruksi & Sipil' }) },
              { id: 'maintenance', label: t({ en: 'Plant Maintenance', id: 'Pemeliharaan Pabrik' }) },
              { id: 'supply', label: t({ en: 'Supply & Logistics', id: 'Suplai & Logistik' }) }
            ].map((tab, index) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative snap-center shrink-0 px-5 py-3.5 text-xs font-heading font-extrabold uppercase tracking-wider transition-all duration-300 rounded-sm ${
                    isActive 
                      ? 'text-white bg-white/5 border border-white/15' 
                      : 'text-gray-400 bg-transparent hover:text-white hover:bg-white/[0.02] border border-transparent'
                  }`}
                >
                  <span className={`mr-2 font-mono text-[9px] ${isActive ? 'text-[#FFB800]' : 'text-gray-600'}`}>0{index + 1}</span>
                  {tab.label}
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicatorUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E50012] to-[#FFB800]"
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    />
                  )}
                </button>
              );
            })}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                id: 1,
                title: t({ en: "Process Pipeline Fitting & Jointing", id: "Pemasangan & Penyambungan Pipa Proses" }),
                category: "construction",
                tag: t({ en: "Piping Works", id: "Pekerjaan Piping" }),
                desc: t({
                  en: "Elite-speed alignment and carbon joint welding of high-pressure utility routes at industrial power plants.",
                  id: "Penyelarasan cepat dan pengelasan sambungan pipa utilitas bertekanan tinggi di kompleks pembangkit listrik."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%204.jpg?updatedAt=1779693565526"
              },
              {
                id: 2,
                title: t({ en: "Industrial Electrical Subgrid Assembly", id: "Perakitan Sub-Panel Gardu Listrik" }),
                category: "construction",
                tag: t({ en: "Electrical", id: "Kelistrikan" }),
                desc: t({
                  en: "Technical termination and main breaker control wiring for high-capacity industrial power systems.",
                  id: "Terminasi teknis dan perakitan panel kontrol pembagi utama untuk sistem kelistrikan industri beban besar."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/ELECTRIC/MAIN%20PANEL%20INSTALLATION.jpg?updatedAt=1781509607251"
              },
              {
                id: 3,
                title: t({ en: "Industrial Sludge & Pond Recovery", id: "Pembersihan Sludge Kolam CRO & WTP" }),
                category: "maintenance",
                tag: t({ en: "Cleaning Services", id: "Pembersihan Kolam Sludge" }),
                desc: t({
                  en: "Environmental clearance and sediment pumping of chemical sludge ponds under rigid hazard mitigations.",
                  id: "Pembersihan lumpur industri dan penyedotan endapan sedimentasi kolam limpahan kimia dengan protokol K3 ketat."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Cleaning%20Project.jpeg"
              },
              {
                id: 4,
                title: t({ en: "Heavy Footing Foundations & Concrete Base", id: "Pondasi Tapak Beton Mesin Berat" }),
                category: "construction",
                tag: t({ en: "Civil Engineering", id: "Pekerjaan Sipil" }),
                desc: t({
                   en: "Fabrication of reinforced high-mass concrete bundwalls and epoxy structural flooring blocks.",
                   id: "Pengecoran pondasi beton bertulang berkekuatan tinggi serta lantai struktur berlapisan cat epoxy tebal."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/PIPING/FUEL%20OIL.jpg?updatedAt=1781510238658"
              },
              {
                id: 5,
                title: t({ en: "Skilled Craft Manpower Deployment", id: "Mobilisasi Tenaga Ahli Mekanikal" }),
                category: "maintenance",
                tag: t({ en: "Manpower Supply", id: "Manpower Supply" }),
                desc: t({
                  en: "Quick mobilization of certified mechanical fitters, ASME welders, and auxiliary helper teams.",
                  id: "Penyediaan cepat tim fitters bersertifikasi, welder standar ASME, konstruktor baja, serta kru pembantu terlatih."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Manpower%20Supply.jpeg"
              },
              {
                id: 6,
                title: t({ en: "Heavy-Duty Crane Sourcing & Rigging", id: "Persewaan Unit Mobile Crane Lapangan" }),
                category: "supply",
                tag: t({ en: "Equipment Rental", id: "Sewa Alat Berat" }),
                desc: t({
                  en: "Safe engineering rigging plans and mobilization of certified high-tonnage telescopic cranes.",
                  id: "Penyusunan rencana pengangkatan aman (rigging plan) dan ketersediaan armada mobile crane berkapasitas besar."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/CRANE.jpg?updatedAt=1781509726862"
              },
              {
                id: 7,
                title: t({ en: "Steel Framework and Platform Fabrication", id: "Pekerjaan Fabrikasi Baja & Platform Struktur" }),
                category: "construction",
                tag: t({ en: "Steel Works", id: "Fabrikasi Baja" }),
                desc: t({
                   en: "Precision welding and erection of support frames and industrial walkways platforms.",
                   id: "Pengelasan presisi dan perakitan jembatan penyeberangan serta platform baja di area operasional pabrik."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%206.jpg?updatedAt=1779693565916"
              },
              {
                id: 8,
                title: t({ en: "Process Machinery Turbine Overhaul", id: "Overhaul Mekanikal Mesin Turbin" }),
                category: "maintenance",
                tag: t({ en: "Plant Maintenance", id: "Pemeliharaan Pabrik" }),
                desc: t({
                  en: "Calibrated restoration of rotating turbine internals, seals, and bearing block adjustments during planned shutdown cycles.",
                  id: "Kalibrasi mekanikal rotor turbin, penggantian sistem seal, dan penyelarasan bearing dalam masa shutdown berkala."
                }),
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MECHANICAL/COOLING%20TOWER%20GEARBOX.jpeg?updatedAt=1781509926532"
              }
            ].filter(item => activeCategory === 'all' || item.category === activeCategory)
            .map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden border border-white/5 bg-[#161616] flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Category badging */}
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm border border-[#FFB800]/30 text-[#FFB800] text-[9px] font-sans font-semibold uppercase tracking-widest px-3 py-1">
                    {item.tag}
                  </div>

                  {/* Hover visual cue */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="w-10 h-10 rounded-full bg-[#E50012] text-white flex items-center justify-center shadow-lg transition-transform duration-300 scale-90 group-hover:scale-100">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#FFB800] text-sm font-semibold uppercase tracking-widest mb-1 pointer-events-none">
                      {item.category}
                    </h4>
                    <h3 className="font-heading text-base font-semibold text-white group-hover:text-[#E50012] transition-colors leading-tight line-clamp-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[#E50012] font-semibold group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>{t({ en: "View Operational Shot", id: "Lihat Foto Lapangan" })}</span>
                    <span className="text-sm">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Full-Screen Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="max-w-4xl w-full bg-[#161616] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Visual Area */}
                <div className="md:w-3/5 h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={selectedImage.img} 
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFB800] text-black text-[10px] font-sans font-extrabold uppercase tracking-widest px-4 py-1.5 shadow-lg">
                    {selectedImage.tag}
                  </div>
                </div>

                {/* Modal Info Area */}
                <div className="md:w-2/5 p-8 flex flex-col justify-between bg-[#191919]">
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FFB800] block">
                        Category: {selectedImage.tag}
                      </span>
                      <h3 className="text-2xl font-heading font-semibold text-white mt-1 leading-tight tracking-tight capitalize">
                        {selectedImage.title}
                      </h3>
                      <div className="h-0.5 w-16 bg-[#E50012] mt-4"></div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {selectedImage.desc}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/5 flex flex-col gap-3">
                    <div className="flex gap-2 items-center text-xs text-gray-500 uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse"></div>
                      <span>PT. Raid Multi Teknik Operational Unit</span>
                    </div>
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="w-full border border-[#E50012] bg-[#E50012]/10 hover:bg-[#E50012] text-white text-xs uppercase tracking-wider font-bold py-3.5 px-6 transition-all duration-300"
                    >
                      {t({ en: "Dismiss View", id: "Tutup Tampilan" })}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

