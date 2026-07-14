import React from 'react';
import { Eye, Target, Award, Lightbulb, Users, Leaf, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const ClientCard = ({ title, desc, icon: Icon, dark = false, red = false, delay = 0 }: { title: string, desc: string, icon: any, dark?: boolean, red?: boolean, delay?: number }) => {
  const isImageUrl = typeof Icon === 'string';
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay }}
      className={`p-8 md:p-10 group ${dark ? 'bg-[#191919] text-white border-b-2 border-transparent hover:border-[#FFB800]' : red ? 'bg-[#FFB800] text-black border-b-2 border-transparent hover:border-[#111]' : 'bg-[#f4f4f4] text-black border-b-2 border-transparent hover:border-[#E50012]'} transition-transform hover:-translate-y-1`}
    >
      {isImageUrl ? (
        <img 
          src={Icon} 
          alt={title} 
          className={`w-36 h-10 object-contain mb-6 opacity-70 group-hover:opacity-100 transition-all duration-300 ${dark ? 'filter brightness-0 invert' : 'filter brightness-0'}`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <>
          <Icon className={`mb-6 ${dark ? 'text-[#FFB800]' : red ? 'text-black' : 'text-[#E50012]'}`} size={40} />
          <h4 className="text-2xl font-heading mb-4 font-semibold capitalize">{title}</h4>
        </>
      )}
      <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : red ? 'text-black/80 font-medium' : 'text-gray-600'}`}>{desc}</p>
    </motion.div>
  );
};

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white text-black py-20 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto space-y-24">
        
        {/* About Header & CEO Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4 font-semibold capitalize border-l-4 border-l-[#E50012] pl-4">
              {t({
                en: <>About <span className="font-serif italic text-4xl md:text-5xl text-gradient">Us</span></>,
                id: <>Tentang <span className="font-serif italic text-4xl md:text-5xl">Kami</span></>
              })}
            </h2>
            <p className="text-xl md:text-2xl font-heading font-medium text-gray-800 leading-relaxed">
              {t({
                en: "PT Raid Multi Teknik was founded with the objective to deliver professional, competent, and reliable industrial construction and maintenance services.",
                id: "PT Raid Multi Teknik didirikan dengan tujuan menghadirkan layanan konstruksi dan maintenance industri yang profesional, kompeten, dan dapat diandalkan."
              })}
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-4 font-sans">
              {t({
                en: "We believe that work quality, integrity, and precision in every single process are key foundations for building long-term client relationships. Supported by an experienced workforce and structured operations, we continuously innovate to deliver exceptional results in every project, regardless of scale.",
                id: "Kami percaya bahwa kualitas pekerjaan, integritas, dan ketepatan dalam setiap proses adalah fondasi utama dalam membangun hubungan jangka panjang dengan klien. Didukung tenaga kerja berpengalaman dan sistem kerja yang terstruktur, kami terus berinovasi untuk memberikan hasil terbaik di setiap proyek, baik dalam skala kecil maupun besar."
              })}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 bg-[#151515] flex flex-col md:flex-row-reverse items-stretch overflow-hidden shadow-2xl border border-white/10 rounded-2xl relative"
          >
            {/* Right side: CEO image running full height (full atas bawah) without frame */}
            <div className="w-full md:w-5/12 min-h-[320px] md:min-h-[480px] relative bg-[#111] shrink-0">
              <img 
                src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ceo.png" 
                alt="Heru Setianto, ST - CEO PT. Raid Multi Teknik" 
                className="w-full h-full object-cover object-top block brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Left side: Message */}
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-between relative bg-[#151515]">
              <div>
                <h3 className="text-2xl font-heading mb-6 font-semibold capitalize text-white">
                  {t({
                    en: <>CEO's <span className="font-serif italic text-3xl text-[#E50012]">Message</span></>,
                    id: <>Pesan <span className="font-serif italic text-3xl text-[#E50012]">CEO</span></>
                  })}
                </h3>
                
                {/* Elegant quote on the left of the message content without frame */}
                <div className="relative pl-6 border-l-4 border-[#FFB800] italic text-base md:text-lg text-gray-300 font-serif mb-6 leading-relaxed">
                  {t({
                    en: '"We stand uncompromising in keeping quality, management, and work ethic. For us, specifications and standards are not limits, but pathways to reach higher heights."',
                    id: '"Kami tak kenal kompromi dalam menjaga kualitas, manajemen, dan etos kerja. Bagi kami, regulasi dan standar bukanlah batas, melainkan pijakan untuk melangkah lebih tinggi."'
                  })}
                </div>

                <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
                  <p>
                    {t({
                      en: <>With <strong className="text-white font-semibold">15 years of industrial experience</strong> in construction manufacturing, oil and gas, power generation plants, and petrochemical complexes, I returned to contribute actively to my home region.</>,
                      id: <>Dengan <strong className="text-white font-semibold">15 tahun pengalaman</strong> di industri konstruksi manufaktur, migas, pembangkit listrik, dan petrokimia, saya kembali ke kampung halaman untuk memberikan kontribusi nyata.</>
                    })}
                  </p>
                  <p>
                    {t({
                      en: <><strong className="text-white font-semibold">PT. Raid Multi Teknik</strong> serves as more than just a contractor. We are your reliable industrial solutions partner in Construction Manufacturing, General Supply, and Trading, delivering continuous innovation to enhance construction efficiency.</>,
                      id: <><strong className="text-white font-semibold">PT. Raid Multi Teknik</strong> hadir lebih dari sekadar kontraktor. Kami adalah mitra andal dalam Construction Manufacturing, General Supply, dan Trading, yang terus menyuntikkan inovasi demi efisiensi proses konstruksi.</>
                    })}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 shrink-0">
                <p className="text-white font-extrabold text-lg leading-tight font-heading">
                  Heru Setianto, ST.
                </p>
                <p className="text-xs uppercase tracking-widest text-[#E50012] font-mono font-bold mt-1">
                  CEO, PT. Raid Multi Teknik
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading mb-10 text-center font-semibold capitalize"
          >
            {t({
              en: <>Vision & <span className="font-serif italic text-4xl text-gradient">Mission</span></>,
              id: <>Visi & <span className="font-serif italic text-4xl">Misi</span></>
            })}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#111] text-white p-10 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Eye size={120} />
              </div>
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <Eye className="text-[#FFB800]" size={28} />
                <h4 className="text-[#FFB800] font-semibold capitalize text-sm">
                  {t({
                    en: <>Our <span className="font-serif italic text-base">Vision</span></>,
                    id: <>Visi <span className="font-serif italic text-base">Kami</span></>
                  })}
                </h4>
              </div>
              <p className="text-lg md:text-xl leading-relaxed relative z-10 text-gray-200">
                {t({
                  en: "To be a professional and highly competent company in industrial construction and plant maintenance services by providing innovative, trusted, and sustainable solution models for clients and society.",
                  id: "Menjadi perusahaan profesional dan kompeten di bidang jasa konstruksi dan plant maintenance dengan menyediakan produk dan layanan yang inovatif, terpercaya, serta berkelanjutan bagi pelanggan dan masyarakat."
                })}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 text-black p-10 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Target size={120} />
              </div>
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <Target className="text-[#FFB800]" size={28} />
                <h4 className="text-[#FFB800] font-semibold capitalize text-sm">
                  {t({
                    en: <>Our <span className="font-serif italic text-base">Mission</span></>,
                    id: <>Misi <span className="font-serif italic text-base">Kami</span></>
                  })}
                </h4>
              </div>
              <ul className="space-y-4 text-base leading-relaxed relative z-10 text-gray-700">
                {t({
                  en: [
                    'Deliver elite quality services modeled with top international standard compliance.',
                    'Prioritize tech-driven innovations to maximize industrial workflow speed and efficiency.',
                    'Keep parent-level client satisfaction metrics at our utmost functional core.',
                    'Run highly responsible corporate practices that safeguard social and environment metrics.',
                    'Ensure absolute precision, certified work-safety (Zero Harm), and professional code across all sites.'
                  ],
                  id: [
                    'Memberikan layanan berkualitas dengan standar internasional.',
                    'Mengedepankan inovasi teknologi dan efisiensi kerja.',
                    'Mengutamakan kepuasan pelanggan.',
                    'Menjalankan bisnis yang bertanggung jawab terhadap sosial dan lingkungan.',
                    'Menjaga kualitas, keselamatan kerja, dan profesionalisme dalam setiap proyek.'
                  ]
                }).map((missionText, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E50012] mt-2 shrink-0" />
                    <span className="text-gray-700">{missionText}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Core Commitments */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-heading mb-10 text-center font-semibold capitalize"
          >
            {t({
              en: <>Our <span className="font-serif italic text-4xl">Core Values</span></>,
              id: <>Core Values <span className="font-serif italic text-4xl">Kami</span></>
            })}
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Award, 
                title: 'Quality First', 
                desc: t({
                  en: 'We guarantee that all project executions strictly adhere to world-class precision parameters.',
                  id: 'Kami memastikan setiap pekerjaan dilakukan sesuai standar kualitas terbaik.'
                })
              },
              { 
                icon: Lightbulb, 
                title: 'Innovation', 
                desc: t({
                  en: 'Employing modern, state-of-the-art engineering frameworks to optimize workspace productivity.',
                  id: 'Menggunakan pendekatan modern dan efisien untuk meningkatkan produktivitas kerja.'
                })
              },
              { 
                icon: Users, 
                title: 'Customer Focus', 
                desc: t({
                  en: 'Fully oriented around the clients custom requirements with responsive and swift troubleshooting.',
                  id: 'Berorientasi pada kebutuhan dan kepuasan pelanggan dengan solusi yang responsif dan tepat waktu.'
                })
              },
              { 
                icon: Leaf, 
                title: 'Sustainability', 
                desc: t({
                  en: 'Running localized activities in an environment-friendly, responsible and highly ethical configuration.',
                  id: 'Menjalankan bisnis secara etis dan bertanggung jawab terhadap lingkungan.'
                })
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#151515] border border-white/10 p-8 pl-9 hover:border-[#FFB800]/40 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Left-edge brand gradient accent line */}
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#FFB800]/70 to-[#E50012]/70 group-hover:from-[#FFB800] group-hover:to-[#E50012] transition-all duration-300" />
                  <Icon className="text-[#FFB800] mb-6 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-[#FFB800] transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Valued Clients */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 border-l-4 border-[#FFB800] pl-6"
          >
            <h3 className="text-3xl md:text-4xl font-heading mb-4 font-semibold capitalize text-black">
              {t({
                en: <>Our Valued <span className="font-serif italic text-4xl text-[#E50012]">Clients</span></>,
                id: <>Klien Berharga <span className="font-serif italic text-4xl text-[#E50012]">Kami</span></>
              })}
            </h3>
            <p className="text-gray-600 text-lg">
              {t({
                en: "Trusted by top-tier heavy manufacturers and EPC giants across Indonesia.",
                id: "Dipercaya oleh perusahaan industri terkemuka di seluruh Indonesia."
              })}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ClientCard 
              title="Cirebon Power (CEPR)"
              desc={t({
                en: "Key power generation operator. Our primary client partner for critical piping, mechanical, civil, electrical, and facility maintenance works.",
                id: "Operator pembangkit listrik utama. Klien utama kami untuk proyek perpipaan, mekanik, sipil, listrik, dan pemeliharaan."
              })}
              icon="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/7.png"
              dark={true}
              delay={0}
            />
            <ClientCard 
              title="Hyundai E&C"
              desc={t({
                en: "Global engineering and construction superpower. Projects include full CCTV supplies, split AC setups, and specialized mechanical repair works.",
                id: "Perusahaan konstruksi dan rekayasa global. Proyek mencakup pasokan CCTV, pemasangan instalasi AC, dan perbaikan mekanis."
              })}
              icon="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/8.png"
              delay={0.1}
            />
            <ClientCard 
              title="Atlas Copco"
              desc={t({
                en: "Worldwide leader in industrial tools and air compressors. Core outsourcing of certified skilled mechanical craft and helper personnel.",
                id: "Pemimpin peralatan industri. Layanan penyediaan tenaga kerja terlatih dan pembantu (helper)."
              })}
              icon="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/Atlas-Copco-Logo.svg_-1024x498.webp?updatedAt=1779692290422"
              dark={true}
              delay={0.2}
            />
            <ClientCard 
              title="Toshiba"
              desc={t({
                en: "Pioneering technology systems provider. Direct contract sourcing of specialized machinery and tools for industrial valve repairs.",
                id: "Solusi teknologi industri. Penyediaan alat khusus untuk perbaikan dan perawatan valve."
              })}
              icon="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/11.png"
              delay={0}
            />
            <ClientCard 
              title="Gecko"
              desc={t({
                en: "Advanced industrial support partner. Precision installation of chemical-grade HDPE pipelines for acid transferring system loops.",
                id: "Mitra layanan industri. Pemasangan pipa HDPE untuk sistem saluran transfer asam."
              })}
              icon="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/10.png"
              delay={0.1}
            />
             <ClientCard 
              title={t({ en: "Why Choose Us?", id: "Mengapa Memilih Kami?" })}
              desc={t({
                en: "Our diversified client portfolio demonstrates our true capability to adapt, perform, and satisfy heavy industrial standards.",
                id: "Portofolio klien kami yang beragam membuktikan kapabilitas kami dalam memenuhi standar ketat kelas dunia."
              })}
              icon={Star}
              red={true}
              delay={0.2}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

