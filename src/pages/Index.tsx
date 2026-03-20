import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Wrench, Star, ChevronRight, Award, Settings, Droplets, Cog, Zap, Thermometer, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import heroImage from "@/assets/hero-auto.jpg";
import shopPhoto from "@/assets/shop-photo.png";
import bccaaBadge from "@/assets/bccaa-badge.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const services = [
  { icon: Settings, name: "Engine Repair", desc: "Complete engine diagnostics and repair" },
  { icon: Wrench, name: "Brake Service", desc: "Brake inspection, repair and replacement" },
  { icon: Droplets, name: "Oil Changes", desc: "Regular oil changes and filter replacement" },
  { icon: Cog, name: "Transmission Service", desc: "Transmission diagnostics and service" },
  { icon: Zap, name: "Electrical Diagnostics", desc: "Electrical system troubleshooting" },
  { icon: Thermometer, name: "Cooling System", desc: "Radiator and cooling system maintenance" },
];

const HomePage = () => {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/60 z-10" />
        <img
          src={heroImage}
          alt="Auto repair shop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="container relative z-20 py-20 lg:py-28">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
                <img src={bccaaBadge} alt="BCCAA Approved Auto Repair" className="h-12 w-auto rounded-sm" />
                <span className="text-primary font-bold text-sm uppercase tracking-wider">BCCAA Approved</span>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-hero text-background mb-6">
                Good & Honest Auto Repair in Vancouver
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-background/70 text-lg mb-8 max-w-xl">
                For over 28 years Art's Automotive has been taking care of all their customer's vehicle repair needs. We fix it right the first time.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:6048798555">
                    <Phone className="h-5 w-5" />
                    Call (604) 879-8555
                  </a>
                </Button>
                <Button variant="cta" size="xl" asChild>
                  <Link to="/contact">Get an Estimate</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST BAR ═══════ */}
      <section className="bg-primary py-5">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-primary-foreground">
            {[
              { icon: Award, label: "28+ Years Experience" },
              { icon: Shield, label: "BCCAA Approved" },
              { icon: Clock, label: "Fast Turnaround" },
              { icon: Star, label: "Honest Pricing" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-bold">
                <item.icon className="h-5 w-5" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Complete Automotive Care</p>
            <h2 className="text-section">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-card p-6 shadow-subtle hover:shadow-card-hover transition-shadow duration-200 border border-border/50"
              >
                <div className="w-12 h-12 rounded-button bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                View All Services <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl italic text-foreground/80 mb-6 leading-relaxed">
              "Art's Automotive is the first automotive shop that I have gone to and received not only amazing service, but also honest service. Art and the staff are amazingly helpful and friendly. I can trust Art, and as a woman going to see a mechanic, that says a lot! I will never trust my vehicle with anyone else."
            </blockquote>
            <p className="font-bold text-foreground">— A Satisfied Customer</p>
          </div>
        </div>
      </section>

      {/* ═══════ MID-PAGE CTA ═══════ */}
      <section className="bg-secondary py-14">
        <div className="container text-center">
          <h2 className="text-section text-secondary-foreground mb-4">Need Auto Repair?</h2>
          <p className="text-secondary-foreground/80 text-lg mb-6 max-w-lg mx-auto">
            It's always a bad day when your car breaks down. Let Art and his crew get you back on the road fast.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="tel:6048798555">
              <Phone className="h-5 w-5" />
              Call (604) 879-8555
            </a>
          </Button>
        </div>
      </section>

      {/* ═══════ ABOUT / CREDIBILITY ═══════ */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={shopPhoto}
                alt="Art's Automotive Service Centre storefront"
                className="rounded-card shadow-subtle w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">About Us</p>
              <h2 className="text-section mb-6">Art's Automotive Service Centre</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Art's Automotive Service Centre in Vancouver, British Columbia is an Auto Repair Shop specializing in good & honest auto repair. Our automotive repair technicians will get your vehicle back on the road fast.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                We can proudly say that if you try us once you will never take your car anywhere else. It's always a bad day when your car breaks down, we can help by fixing it right the first time!
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { value: "28+", label: "Years" },
                  { value: "BCCAA", label: "Approved" },
                  { value: "100%", label: "Honest" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ PAYMENT & FINAL CTA ═══════ */}
      <section className="section-alt py-16">
        <div className="container text-center">
          <h2 className="text-section mb-4">We Accept</h2>
          <p className="text-muted-foreground mb-8">Visa, Mastercard, Cash, and Interac</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Visa", "Mastercard", "Cash", "Interac"].map((method) => (
              <span key={method} className="bg-card px-5 py-2 rounded-button shadow-subtle text-sm font-bold text-foreground border border-border/50">
                {method}
              </span>
            ))}
          </div>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Get an Estimate Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
