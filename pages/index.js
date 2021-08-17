import Head from "next/head";
import { useContext, useEffect } from "react";

import AboutSection from "../components/sections/about.section";
import BlogSection from "../components/sections/blog.section";
import ContactSection from "../components/sections/contact.section";
import HeroSection from "../components/sections/hero.section";
import PortfolioSection from "../components/sections/portfolio.section";
import ServicesSection from "../components/sections/services.section";
import Footer from "../components/layout/footer.layout";
import Nav from "../components/layout/nav.layout";
import Drawer from "../components/layout/drawer.layout";

import { drawerContext } from "../context/drawer.context";

export default function Home() {
  const { open } = useContext(drawerContext);

  useEffect(() => {
    const body = document.querySelector("body");

    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div>
      <Head>
        <title>ProTech | Your way to modern technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Drawer />
      <main>
        <HeroSection />
        <ServicesSection />
        <BlogSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
