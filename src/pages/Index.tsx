import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Wrench, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-auto.jpg";

const trustSignals = [
  { icon: Shield, label: "35+ Years Experience" },
  { icon: Wrench, label: "Certified Technicians" },
  { icon: Clock, label: "Fair & Honest Pricing" },
];

const services = [
  { name: "Engine Repair", desc: "Complete engine diagnostics and repair" },
  { name: "Brake Service", desc: "Brake inspection, repair and replacement" },
  { name: "Oil Changes", desc: "Regular oil changes and filter replacement" },
  { name: "Transmission Service", desc: "Transmission diagnostics and service" },
  { name: "Electrical Diagnostics", desc: "Electrical system troubleshooting" },
  { name: "Cooling System Service", desc: "Radiator and cooling system maintenance" },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Over 35 Years of Experience",
    desc: "Serving Winnipeg with quality workmanship since 1985.",
  },
  {
    icon: Wrench,
    title: "Certified Technicians",
    desc: "Our experienced team has the expertise to handle all your automotive needs.",
  },
  {
    icon: Clock,
    title: "Fair & Honest Pricing",
    desc: "We provide honest, affordable solutions that get you back on the road quickly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Quality Service Since 1985
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="text-hero mb-6">
                Professional Auto Repair Services You Can Trust
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-8 max-w-lg">
                Serving Winnipeg with quality workmanship and honest pricing for over 35 years.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:2045868347">
                    <Phone className="h-5 w-5" />
                    Call (204) 586-8347
                  </a>
                </Button>
                <Button variant="cta" size="xl" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-6 mt-10">
                {trustSignals.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <s.icon className="h-5 w-5 text-secondary" />
                    {s.label}
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Professional mechanic working on a car engine at Art's Auto"
                className="rounded-card shadow-subtle w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Complete Automotive Care</p>
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
                className="bg-background rounded-card p-6 shadow-subtle hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-button bg-secondary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                View All Services <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-section">Why Choose Art's Auto?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
