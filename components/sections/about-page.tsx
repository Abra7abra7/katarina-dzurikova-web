"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Heart, Shield, Sparkles, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKIO_URL = "https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk";

const values = [
  {
    icon: Heart,
    title: "Jemný prístup",
    description: "Pracujem s jemným dotykom, no profesionálne. Každé ošetrenie je individuálne navrhnuté.",
  },
  {
    icon: Shield,
    title: "Precíznosť",
    description: "Sledujem detaily, rozumiem signálom pleti a vnímam, čo potrebuje pre zdravý vzhľad.",
  },
  {
    icon: Sparkles,
    title: "Skutočný efekt",
    description: "Kvalita, čistota prevedenia a výsledok sú pre mňa základ – nie len krátkodobý pocit.",
  },
  {
    icon: Award,
    title: "Neustále vzdelávanie",
    description: "Rozširujem portfólio moderných techník, aby som prinášala funkčné a bezpečné postupy.",
  },
];

const professionalSkills = [
  {
    title: "Permanentný make-up (PMU)",
    description: "Tréning u medzinárodne uznávaných odborníčok LEA MATYI a Marina Bondar (Laskin). Precízne, prirodzené techniky rešpektujúce rysy tváre.",
  },
  {
    title: "Kobido masáž",
    description: "Pokročilá japonská liftingová masáž pracujúca so svalovými vrstvami a lymfatickým tokom. Neinvazívny spôsob viditeľného omladenia.",
  },
  {
    title: "Laminácia rias a obočia",
    description: "Estetická úprava s dôrazom na prirodzený tvar a elegantný výsledok. Kvalitné produkty a technika, ktorá vydrží.",
  },
  {
    title: "Architektúra obočia",
    description: "Tvarovanie podľa anatómie tváre, analýza symetrie a vytváranie harmonickej línie podporujúcej výraz.",
  },
  {
    title: "BioRePeel chemický peeling",
    description: "Certifikované ovládanie pokročilého revitalizačného peelingu zlepšujúceho textúru a rozjasňujúceho pleť.",
  },
  {
    title: "Komplexná kozmetická starostlivosť",
    description: "Profesionálne techniky manuálneho aj prístrojového ošetrenia pleti, od diagnostiky po cielené riešenia.",
  },
];

const education = [
  {
    years: "2000 – 2004",
    school: "Stredná odborná škola služieb, Rimavská Sobota",
    field: "Odbor: Kozmetička",
    description: "Základ profesionálnej praxe, techniky ošetrenia pleti, hygienické postupy, chemické a biologické základy starostlivosti o pokožku.",
  },
  {
    years: "2005",
    school: "Univerzita Mateja Bela, Banská Bystrica",
    field: "Odbor: Učiteľstvo chémie a biológie",
    description: "Prehĺbenie porozumenia biologickým procesom, štruktúre kože, regenerácii tkanív a účinkom aktívnych látok.",
  },
  {
    years: "2006 – 2011",
    school: "Prešovská univerzita v Prešove",
    field: "Ďalšie vzdelávanie",
    description: "Pokračovanie vo vzdelávaní a rozširovanie odborných znalostí.",
  },
];

const productKnowledge = [
  "Larens",
  "ILCSI", 
  "Hydropeptide",
];

export function AboutPageContent() {
  const handleReservation = () => {
    window.open(BOOKIO_URL, '_blank');
  };

  return (
    <article className="relative bg-canvas pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about/katarina-portrait.jpeg"
                alt="Katarína Dzuriková - profesionálna kozmetička Liptov"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="mt-6 h-px bg-gold origin-left"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
                O mne
              </span>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-editorial leading-tight text-ink">
                Katarína Dzuriková
              </h1>
              <p className="mt-2 text-lg text-ink/60 font-sans">
                Vaša kozmetička v Liptove
              </p>
            </div>

            <div className="space-y-6 text-ink/80 leading-relaxed">
              <p className="text-lg">
                <span className="float-left font-serif text-6xl leading-none mr-3 mt-2 text-gold">
                  K
                </span>
                ozmetika je pre mňa kombináciou estetiky, odbornosti a jemného ľudského prístupu. V SHINE sa zameriavam na pleť s maximálnou precíznosťou – sledujem detaily, rozumiem jej signálom a vnímam, čo potrebuje, aby pôsobila zdravo a prirodzene krásne.
              </p>
              <p>
                Pracujem s jemným dotykom, no profesionálne. Každé ošetrenie je individuálne navrhnuté tak, aby prinieslo skutočný efekt, nie len krátkodobý pocit príjemnej starostlivosti. Kvalita, čistota prevedenia a výsledok sú pre mňa základ.
              </p>
              <p>
                Mojou ambíciou je, aby žena odchádzala z SHINE nielen s krajšou pleťou, ale aj s pocitom, že sa o ňu niekto naozaj postaral.
              </p>
            </div>

            <Button variant="luxury" onClick={handleReservation} className="mt-8">
              Rezervovať konzultáciu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="py-16 border-t border-b border-gold/30 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-ink max-w-4xl mx-auto">
            &ldquo;Toto je priestor, kde krása nevzniká náhodou – ale vedome, citlivo a odborne.&rdquo;
          </p>
        </motion.blockquote>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Moje hodnoty
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-editorial text-ink">
            Na čom staviam svoju prácu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-stone-200 hover:border-gold/50 transition-colors duration-500"
            >
              <value.icon className="w-10 h-10 text-gold mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
            Odborné zručnosti
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-editorial text-ink">
            Certifikácie a špecializácie
          </h2>
          <p className="mt-4 text-ink/70 max-w-2xl mx-auto">
            Staviam svoju prax na odbornosti, jemnej technike a presnej práci s pleťou. Každé školenie posúva úroveň starostlivosti v SHINE na vyšší štandard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 border border-stone-200 hover:border-gold/50 transition-colors duration-500"
            >
              <Star className="w-6 h-6 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg font-semibold text-ink mb-3">
                {skill.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-stone-50 text-center"
        >
          <h3 className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold mb-4">
            Profesionálne kozmetické značky
          </h3>
          <p className="text-ink/70 mb-6">
            Vďaka hlbokej znalosti produktových línií dokážem presne zvoliť postupy a kombinácie, ktoré fungujú – nie univerzálne riešenia, ale starostlivosť šitú na mieru.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {productKnowledge.map((brand) => (
              <span key={brand} className="font-serif text-xl text-ink font-semibold">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-luxury font-sans font-semibold text-gold">
              Vzdelanie
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-editorial text-ink mb-8">
              Formálne vzdelanie
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.years}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-gold/30 pl-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    <span className="text-sm font-semibold text-gold">{edu.years}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-ink/60 mb-2">{edu.field}</p>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden lg:sticky lg:top-32"
          >
            <Image
              src="/images/gallery/priestory/certifikaty.jpeg"
              alt="Certifikáty Kataríny Dzurikovej - kozmetička Liptov"
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-ink text-canvas p-12 md:p-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-editorial mb-6">
            Pripravená pomôcť vám žiariť
          </h2>
          <p className="text-canvas/70 max-w-2xl mx-auto mb-4">
            Navštívte ma v SHINE Štúdiu Krásy v Pavlovej Vsi – v srdci Liptova, blízko Liptovského Mikuláša a Ružomberka.
          </p>
          <p className="text-canvas/50 text-sm mb-8">
            Obsluhujeme klientky z celého regiónu: Jasná, Nízke Tatry, Bešeňová, Demänovská Dolina
          </p>
          <Button 
            variant="luxury" 
            onClick={handleReservation}
            className="border-canvas text-canvas hover:bg-canvas hover:text-ink"
          >
            Rezervovať termín
          </Button>
        </motion.div>
      </section>
    </article>
  );
}
