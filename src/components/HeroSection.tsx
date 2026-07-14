import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div 
      className="min-h-screen text-white flex items-center justify-center font-sans p-6 md:p-12 selection:bg-[#FFB800] selection:text-black bg-cover bg-center bg-no-repeat relative pt-28 md:pt-48 overflow-hidden"
      style={{ backgroundImage: "url('https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Hero%202.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
      
      <div className="w-full max-w-[1300px] flex flex-col relative z-10 pt-4 md:pt-24">
        
        {/* Main Content Area: Divided into Headline & ISO Badge list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Left Column: Headline and Description */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Headline & Description */}
            <div className="flex flex-col pt-20 md:pt-14">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-heading text-4xl md:text-5xl lg:text-[54px] xl:text-[68px] font-semibold leading-[1.1] tracking-tight capitalize mb-10"
              >
                {t({
                  en: (
                    <>
                      Building<br />
                      The Future <span className="font-serif italic font-medium text-[#FFB800] normal-case">Energy</span><br />
                      Infrastructure With<br />
                      <span className="relative inline-block">
                        <span className="font-serif italic font-bold text-[#E50012] normal-case tracking-tight">Speed & Precition</span>
                        <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-4 text-[#E50012]" viewBox="0 0 300 20" preserveAspectRatio="none">
                          <path d="M5 15 Q 150 3 295 15" stroke="currentColor" strokeWidth="5" fill="transparent" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  ),
                  id: (
                    <>
                      Membangun<br />
                      Infrastruktur <span className="font-serif italic font-medium text-[#FFB800] normal-case">Energi</span><br />
                      Masa Depan Dengan<br />
                      <span className="relative inline-block">
                        <span className="font-serif italic font-bold text-[#E50012] normal-case tracking-tight">Kecepatan & Presisi</span>
                        <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-4 text-[#E50012]" viewBox="0 0 300 20" preserveAspectRatio="none">
                          <path d="M5 15 Q 150 3 295 15" stroke="currentColor" strokeWidth="5" fill="transparent" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  )
                })}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1.0 }}
                className="text-gray-300 text-sm md:text-base lg:text-lg max-w-[660px] leading-relaxed pt-4"
              >
                {t({
                  en: "PT Raid Multi Teknik is a trusted partner for various industrial project needs, offering integrated construction, manufacturing, maintenance, trading, and general supply solutions that prioritize speed, precision, quality, and high safety standards.",
                  id: "PT Raid Multi Teknik adalah partner terpercaya untuk berbagai kebutuhan proyek industrial dengan menghadirkan solusi konstruksi, manufaktur, maintenance, trading, dan general supply yang mengutamakan kecepatan kerja, presisi, kualitas, dan standar keselamatan kerja tinggi."
                })}
              </motion.p>
            </div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto"
            >
              <Link 
                to="/contact" 
                className="bg-[#E50012] hover:bg-[#FFB800] hover:border-[#FFB800] border border-[#E50012] hover:text-black transition-all duration-300 text-white font-bold text-xs md:text-sm px-8 py-4 capitalize flex items-center justify-center gap-4 group w-full md:w-auto shadow-lg shadow-black/40 hover:-translate-y-0.5"
              >
                {t({ en: 'Get Quotation', id: 'Minta Penawaran' })}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link 
                to="/projects" 
                className="bg-transparent hover:bg-white/10 border border-white/20 hover:border-white transition-all duration-300 text-white font-bold text-xs md:text-sm px-8 py-4 capitalize flex items-center justify-center gap-4 w-full md:w-auto hover:-translate-y-0.5"
              >
                {t({ en: 'Our Portfolio', id: 'Portofolio Kami' })}
              </Link>
            </motion.div>
            
          </div>

          {/* Right Column: ISO Certificates */}
          <div className="lg:col-span-5 flex flex-row flex-nowrap gap-2 md:gap-4 w-full justify-center lg:justify-end items-center z-20 overflow-x-visible">
            {[
              {
                id: "iso-1",
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ISO%202",
                alt: "ISO 9001:2015"
              },
              {
                id: "iso-2",
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ISO%201",
                alt: "ISO 45001:2018"
              },
              {
                id: "iso-3",
                img: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ISO%203",
                alt: "ISO 14001:2015"
              }
            ].map((iso, index) => (
              <motion.div
                key={iso.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                id={iso.id}
                className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-default"
              >
                <img 
                  src={iso.img} 
                  alt={iso.alt} 
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain filter drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

        </div>
        
        {/* Trusted Clients Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-16 border-t border-white/10 pt-8 w-full max-w-full overflow-hidden"
        >
          <p className="text-xs md:text-sm uppercase text-gray-400 mb-6 font-bold tracking-widest">
            {t({ en: 'TRUSTED BY', id: 'TELAH DIPERCAYA OLEH' })}
          </p>
          <div className="flex w-[200%] gap-12 md:gap-24 animate-marquee shrink-0">
            {/* Double the list for infinite scroll effect */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 md:gap-24 lg:gap-32 items-center shrink-0">
                {[
                  { name: "Cirebon Power", url: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/7.png" },
                  { name: "Hyundai E&C", url: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/8.png" },
                  { name: "Atlas Copco", url: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Atlas-Copco-Logo.svg_-1024x498.webp" },
                  { name: "Toshiba", url: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/10.png" },
                  { name: "Gecko", url: "https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/11.png" }
                ].map((logo, idx) => (
                  <img 
                    key={idx}
                    src={logo.url} 
                    alt={logo.name} 
                    className={`${
                      logo.url.includes('Atlas-Copco-Logo')
                        ? 'w-[168px] sm:w-[216px] md:w-[240px] lg:w-[264px] h-[42px] sm:h-[54px] md:h-[66px] lg:h-[72px]'
                        : 'w-28 sm:w-36 md:w-40 lg:w-44 h-7 sm:h-9 md:h-11 lg:h-12'
                    } object-contain opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 filter brightness-0 invert`}
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

