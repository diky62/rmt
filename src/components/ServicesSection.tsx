import React from 'react';
import { Building2, Settings2, RefreshCcw, Pipette, Wrench, Hammer, Users, ShieldAlert, ShoppingCart, Truck, Cog } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ title, desc, icon: Icon, image, dark = false, delay = 0, imagePosition = "object-center" }: { title: string, desc: string, icon: any, image?: string, dark?: boolean, delay?: number, imagePosition?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay }}
    className={`group flex flex-col h-full transition-all duration-500 hover:-translate-y-2 border border-transparent overflow-hidden shadow-sm hover:shadow-lg ${dark ? 'bg-[#191919] text-white hover:border-[#FFB800]' : 'bg-gray-100 text-black hover:bg-white hover:border-gray-200'}`}
  >
    {image && (
      <div className="h-56 w-full overflow-hidden relative shrink-0">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover ${imagePosition} transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
      </div>
    )}
    <div className="p-8 flex-grow flex flex-col justify-between">
      <div>
        <Icon className={`${dark ? 'text-[#FFB800]' : 'text-[#E50012]'} mb-6 transition-transform duration-300 group-hover:scale-110`} size={40} />
        <h4 className="text-xl font-semibold mb-4 font-heading capitalize group-hover:text-[#E50012] dark:group-hover:text-[#FFB800] transition-colors">{title}</h4>
        <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-650'}`}>{desc}</p>
      </div>
    </div>
  </motion.div>
);

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white text-black overflow-hidden">
      {/* Services Header */}
      <div 
        className="py-32 px-6 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Hero%204.jpg')" }}
      >
        <div className="max-w-[1300px] mx-auto relative z-10 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl font-heading mb-6 text-white font-semibold capitalize border-l-4 border-l-[#E50012] pl-4"
          >
            {t({
              en: <>Our <span className="font-serif italic text-4xl md:text-5xl text-gradient">Services</span></>,
              id: <>Layanan <span className="font-serif italic text-4xl md:text-5xl">Kami</span></>
            })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-sans text-gray-300 max-w-2xl leading-relaxed"
          >
            {t({
              en: "Comprehensive Industrial Solutions — From design-build construction to plant maintenance, delivered with elite speed and precision.",
              id: "Solusi Industri Komprehensif — Dari konstruksi hingga pemeliharaan, kami berikan dengan presisi dan keahlian tertinggi."
            })}
          </motion.p>
        </div>
      </div>

      <div className="py-20 lg:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1300px] mx-auto space-y-24">
          
          {/* Why choose our services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gray-200 pb-20">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
             >
               <h3 className="text-3xl font-heading mb-6 font-semibold border-l-4 border-[#E50012] pl-6 text-black capitalize">
                 {t({
                   en: <>Industrial Resilience is Our <span className="font-serif italic text-4xl text-gradient">Utmost Priority</span></>,
                   id: <>Ketahanan Industri Prioritas <span className="font-serif italic text-4xl">Utama</span></>
                 })}
               </h3>
               <p className="text-gray-600 leading-relaxed mb-6 lg:pl-6 text-lg">
                 {t({
                   en: "We understand that heavy industrial operations tolerate zero downtime. Every solution from Raid Multi Teknik centers around three core pillars of organizational strength.",
                   id: "Kami memahami bahwa operasional pabrik tidak mengenal toleransi terhadap downtime. Setiap solusi dari Raid Multi Teknik berpusat pada tiga pilar kekuatan."
                 })}
               </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="space-y-8"
             >
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-[#111] text-[#FFB800] rounded flex items-center justify-center font-bold font-heading text-xl shrink-0">1</div>
                 <div>
                   <h4 className="font-semibold text-lg mb-2">
                     {t({ en: 'Critical Line Experts', id: 'Ahli di Lini Kritis' })}
                   </h4>
                   <p className="text-sm text-gray-600">
                     {t({
                       en: "Certified technicians for essential overhauls such as rotating turbines, acid pumps, and structural nodes.",
                       id: "Teknisi tersertifikasi untuk perbaikan esensial seperti turbin, pompa asam, dan struktur krusial."
                     })}
                   </p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-[#111] text-[#E50012] rounded flex items-center justify-center font-bold font-heading text-xl shrink-0">2</div>
                 <div>
                   <h4 className="font-semibold text-lg mb-2">
                     {t({ en: 'Scalable Flexibility', id: 'Fleksibilitas Skala' })}
                   </h4>
                   <p className="text-sm text-gray-600">
                     {t({
                       en: "Sufficient capacity to execute entirely new greenfield manufacturing setups down to light logistical sourcing.",
                       id: "Sanggup menangani proyek pembuatan instalasi baru (manufaktur) hingga suplai logistik ringan."
                     })}
                   </p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-[#111] text-[#FFB800] rounded flex items-center justify-center font-bold font-heading text-xl shrink-0">3</div>
                 <div>
                   <h4 className="font-semibold text-lg mb-2">
                     {t({ en: 'Precision Response', id: 'Respon Presisi' })}
                   </h4>
                   <p className="text-sm text-gray-600">
                     {t({
                       en: "Maintenance procedures formulated ahead of time to minimize the risk of sudden operational downtime.",
                       id: "Prosedur maintenance dirancang antisipatif untuk menekan risiko kerugian waktu henti mendadak."
                     })}
                   </p>
                 </div>
               </div>
             </motion.div>
          </div>

          {/* Construction Manufacturing */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-heading mb-4 font-semibold border-l-4 border-[#FFB800] pl-6 capitalize">
                Construction <span className="font-serif italic text-4xl md:text-5xl">Manufacturing</span>
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl pl-6">
                {t({
                  en: "Providing premium mechanical structures and civil engineering assemblies under strict certified global standards.",
                  id: "Menyediakan layanan konstruksi kualitas unggul dengan standar internasional dan tenaga profesional lintas disiplin."
                })}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={Building2} 
                title="Civil Work" 
                desc={t({
                  en: "Industrial civil works including structural concrete, equipment foundations, bundwalls, structural flooring, manholes, and site civil infrastructure.",
                  id: "Pekerjaan sipil industri seperti struktur beton, pondasi, bundwall, flooring, manhole, dan infrastruktur area industri."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Civil%20Project.jpeg"
                dark={true}
                delay={0}
              />
              <ServiceCard 
                icon={Settings2} 
                title={t({ en: 'Mechanical & Rotating', id: 'Mechanical & Rotating' })} 
                desc={t({
                  en: "Installation and predictive maintenance of plant mechanical components such as gearboxes, pumping setups, turbine blocks, heavy rigging and rotating assets.",
                  id: "Instalasi dan maintenance peralatan mekanikal industri seperti gearbox, pump system, turbine, rigging system, dan heavy equipment installation."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%208.jpg?updatedAt=1779693566185"
                delay={0.1}
              />
              <ServiceCard 
                icon={Pipette} 
                title={t({ en: 'Piping System', id: 'Piping System' })} 
                desc={t({
                  en: "Industrial pipeline installation and piping management: process piping, high-pressure lines, gas HDPE, FRP, fiberglass systems, valve-fitting configurations and CPVC.",
                  id: "Layanan instalasi dan maintenance perpipaan industri: process piping, HDPE pipe, FRP pipe, valve fitting, pipeline maintenance, dan CPVC pipe system."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%207.jpg?updatedAt=1779693565528"
                delay={0.2}
              />
              <ServiceCard 
                icon={Hammer} 
                title={t({ en: 'Steel Structure', id: 'Steel Structure' })} 
                desc={t({
                  en: "Heavy load fabrication and structural steel assembly including modular platforms, overhead walkway bridges, custom mod layouts, structural piping frames.",
                  id: "Layanan fabrikasi dan pemasangan struktur baja seperti platform structure, bridge modification, structural installation, dan steel fabrication."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%206.jpg?updatedAt=1779693565916"
                delay={0}
              />
              <ServiceCard 
                icon={Wrench} 
                title={t({ en: 'Plant Maintenance', id: 'Plant Maintenance' })} 
                desc={t({
                  en: "Periodic plant maintenance, mechanical shutdowns, and facility servicing to keep your operations running continuously with peak output.",
                  id: "Layanan maintenance dan perawatan fasilitas industri secara berkala untuk menjaga performa operasional tetap optimal."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MAINTENANCE/CRO.HEIC?updatedAt=1781509780192"
                delay={0.1}
              />
              <ServiceCard 
                icon={RefreshCcw} 
                title={t({ en: 'Fabrication & Installation', id: 'Fabrication & Installation' })} 
                desc={t({
                  en: "Fully integrated off-site fabrication and on-site assembly of complex piping spools, machine components, and structural assets with high tolerance precision.",
                  id: "Layanan fabrikasi terintegrasi dan pemasangan berbagai komponen mekanis, piping, serta struktural dengan akurasi tinggi."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%202.jpeg?updatedAt=1779693566143"
                dark={true}
                delay={0.2}
              />
            </div>
          </div>

          {/* Integrated Service Portfolio */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 border-t border-gray-200 pt-20"
            >
              <h3 className="text-3xl md:text-4xl font-heading mb-4 font-semibold border-l-4 border-[#E50012] pl-6 capitalize">
                {t({
                  en: <>Integrated Services <span className="font-serif italic text-4xl md:text-5xl text-gradient">Portfolio</span></>,
                  id: <>Portofolio Layanan <span className="font-serif italic text-4xl md:text-5xl">Terpadu</span></>
                })}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={Users} 
                title={t({ en: 'Manpower Supply', id: 'Manpower Supply' })} 
                desc={t({
                  en: "Mobilization of skilled, certified mechanical craft crew (fitters, welders, riggers) and industrial helpers for plant projects.",
                  id: "Penyediaan tenaga kerja skilled maupun helper untuk berbagai kebutuhan industri dan proyek konstruksi."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Manpower%20Supply.jpeg"
                dark={true}
                delay={0}
              />
              <ServiceCard 
                icon={Truck} 
                title={t({ en: 'General Supply & Trading', id: 'General Supply & Trading' })} 
                desc={t({
                  en: "Procuring diverse industrial products and technical goods with maximum sourcing reliability and delivery compliance across all manufacturing sectors.",
                  id: "Menyediakan berbagai kebutuhan industri dengan kualitas terbaik dan sourcing yang terpercaya ke seluruh sektor industrial."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Material%20supply.jpeg"
                delay={0.1}
              />
              <ServiceCard 
                icon={ShieldAlert} 
                title={t({ en: 'Heavy Equipment Rentals', id: 'Persewaan Alat Berat' })} 
                desc={t({
                  en: "Supplying certified heavy construction equipment rentals including crane fleets and high-capacity forklifts with fully compliant operators.",
                  id: "Penyediaan layanan rental alat berat pendukung proyek konstruksi seperti Crane rental dan Forklift rental berskala besar."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/CRANE.jpg?updatedAt=1781509726862"
                delay={0.2}
              />
              <ServiceCard 
                icon={ShoppingCart} 
                title={t({ en: 'Sourced Goods', id: 'Produk Perdagangan' })} 
                desc={t({
                  en: "Sourcing premium industrial supplies including structural carbon pipes, high-spec valves, fittings, scaffolding assemblies, and customized protective sheets.",
                  id: "Penyediaan berbagai jenis material industri seperti carbon pipe, valve & fittings, scaffolding material, hingga wind breaker net berkualitas tinggi."
                })}
                image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Project/MATERIAL%20SUPPLY/WIND%20BREAKER.HEIC?updatedAt=1781509735108"
                dark={true}
                delay={0}
              />
              <div className="lg:col-span-2">
                 <ServiceCard 
                  icon={Cog} 
                  title={t({ en: 'Tools Procurement & Custom Machining', id: 'Pasokan Alat & Machining' })} 
                  desc={t({
                    en: "Delivering industrial fresh water supplies, specialized field tools, backed by expert-level precision machining capabilities for custom parts modification.",
                    id: "Menyediakan fresh water supply, industrial tools, serta didukung oleh layanan custom machining presisi untuk pembuatan atau modifikasi suku cadang pabrik."
                  })}
                  image="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/COMPRO%20PT%20RMT%202026/Portofolio%201.jpeg?updatedAt=1779693565497"
                  imagePosition="object-center"
                  delay={0.15}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


