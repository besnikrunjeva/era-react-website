import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Package, Box } from "lucide-react";
import { InfiniteGrid } from "@/components/ui/infinite-grid";
import { StatsPanel } from "@/components/ui/stat-card";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { FeaturedProducts } from "@/pages/sections/FeaturedProducts"
import { ProductionClock } from "@/pages/sections/ProductionClock"
import { WhyERA } from "@/pages/sections/WhyERA"
import { ProcessSteps } from "@/pages/sections/ProcessSteps"
import { MockupCallout } from "@/pages/sections/MockupCallout"
import { PortfolioStrip } from "@/pages/sections/PortfolioStrip"
import { BottomCTA } from "@/pages/sections/BottomCTA"

import client01 from "@/assets/client-01.svg";
import client02 from "@/assets/client-02.svg";
import client03 from "@/assets/client-03.svg";
import client04 from "@/assets/client-04.svg";
import client05 from "@/assets/client-05.svg";
import client06 from "@/assets/client-06.svg";

const clientLogos = [
  { src: client01, alt: "Client 1" },
  { src: client02, alt: "Client 2" },
  { src: client03, alt: "Client 3" },
  { src: client04, alt: "Client 4" },
  { src: client05, alt: "Client 5" },
  { src: client06, alt: "Client 6" },
];

const stats = [
  { value: "15+",   label: { al: "Vite Eksperiencë",   en: "Years Experience" } },
  { value: "397+",  label: { al: "Klientë Aktivë",     en: "Active Clients" } },
  { value: "13",    label: { al: "Makina Prodhimi",     en: "Production Machines" } },
  { value: "3.9M+", label: { al: "Njësi të Prodhuara", en: "Units Produced" } },
];

export default function Home({ lang = "al" }) {
  useEffect(() => {
    document.title = lang === 'al'
      ? 'Ambalazhe Letre Kosovë | ERA Print Pack'
      : 'Paper Packaging Kosovo | ERA Print Pack'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', lang === 'al'
      ? 'ERA Print Pack prodhon ambalazhe letre me printim profesional në Kosovë. Gota, kuti dhe etiketa personalizuara — dërgim brenda 7–14 ditësh. 397+ klientë aktivë.'
      : 'ERA Print Pack manufactures custom-printed paper packaging in Kosovo. Cups, boxes and labels — delivery in 7–14 days. 397+ active clients.')
  }, [lang])

  return (
    <>
    <InfiniteGrid>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4ca706]/40 bg-[#4ca706]/10 px-4 py-1.5 text-xs font-medium text-[#4ca706] tracking-wide">
          <Box className="size-3.5" />
          {lang === "al" ? "Dizajni 3D falas me çdo porosi" : "Free 3D mockup with every order"}
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          {lang === "al" ? (
            <>Ambalazhja që e bën <span className="text-[#4ca706]">markën tënde të dallohet</span></>
          ) : (
            <>Packaging that makes your <span className="text-[#4ca706]">brand stand out</span></>
          )}
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl text-base text-gray-500 md:text-lg">
          {lang === "al"
            ? "Gota letre, kuti dhe etiketa me logon tënde — prodhuar në Kosovë, brenda 7–14 ditësh. 397+ biznese na besojnë."
            : "Paper cups, boxes and labels with your logo — made in Kosovo, ready in 7–14 days. Trusted by 397+ businesses."}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href="https://wa.me/38344113533"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#4ca706] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d8f05]"
          >
            <MessageCircle className="size-4" />
            {lang === "al" ? "Merr ofertën tënde falas" : "Get your free quote"}
          </a>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            <Package className="size-4" />
            {lang === "al" ? "Shiko Produktet" : "Browse Products"}
          </Link>
        </div>

        {/* Friction reducer */}
        <p className="text-xs text-gray-400">
          {lang === "al" ? "Pa detyrime · Përgjigje brenda 24 orësh" : "No commitment · Reply within 24 hours"}
        </p>

        {/* Stats */}
        <StatsPanel stats={stats.map(s => ({ value: s.value, label: s.label[lang] }))} />
      </motion.div>
    </InfiniteGrid>

    {/* Clients */}
    <section className="relative bg-white pt-4 pb-16 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="mb-5 text-center text-xl font-medium tracking-tight md:text-3xl">
          <span className="text-gray-400">
            {lang === "al" ? "Besuar nga bizneset." : "Trusted by businesses."}
          </span>
          {" "}
          <span className="font-semibold text-[#4ca706]">
            {lang === "al" ? "Zgjedhur nga liderët." : "Chosen by the leaders."}
          </span>
        </h2>
        <div className="mx-auto mb-5 h-0.5 max-w-sm bg-[#4ca706]/30 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        <LogoCloud logos={clientLogos} />
        <div className="mt-5 h-0.5 bg-[#4ca706]/30 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>

    <WhyERA lang={lang} />
    <ProcessSteps lang={lang} />
    <MockupCallout lang={lang} />
    <ProductionClock lang={lang} />
    <FeaturedProducts lang={lang} />
    <PortfolioStrip lang={lang} />
    <BottomCTA lang={lang} />
    </>
  );
}
