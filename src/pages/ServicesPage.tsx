import { motion } from "framer-motion";
import { Wrench, Settings, Droplets, Cog, Zap, Thermometer, Car, Wind, Snowflake, CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: Settings, name: "Engine Repair", desc: "Complete engine diagnostics and repair to keep your vehicle running at peak performance." },
  { icon: Car, name: "Brake Service", desc: "Brake inspection, repair and replacement for your safety on the road." },
  { icon: Droplets, name: "Oil Changes", desc: "Regular oil changes and filter replacement to extend your engine's life." },
  { icon: Cog, name: "Transmission Service", desc: "Transmission diagnostics and service to ensure smooth shifting and performance." },
  { icon: Zap, name: "Electrical Diagnostics", desc: "Electrical system troubleshooting to identify and resolve complex issues." },
  { icon: Thermometer, name: "Cooling System Service", desc: "Radiator and cooling system maintenance to prevent overheating." },
  { icon: Wrench, name: "Suspension Repair", desc: "Shock and strut replacement for a smooth, comfortable ride." },
  { icon: Wind, name: "Exhaust System Repair", desc: "Muffler and exhaust system repair for reduced noise and emissions." },
  { icon: Snowflake, name: "Air Conditioning Service", desc: "A/C service and repair to keep you comfortable in every season." },
  { icon: CalendarCheck, name: "Preventive Maintenance", desc: "Scheduled maintenance services to keep your vehicle reliable and safe." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-16 lg:py-20">
        <div className="container text-center">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Complete Automotive Care</p>
          <h1 className="text-hero text-background mb-4">Our Services</h1>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            From routine maintenance to complex repairs, our automotive repair technicians will get your vehicle back on the road fast.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
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

          {/* CTA */}
          <div className="mt-16 bg-secondary rounded-card p-10 text-center">
            <h2 className="text-section text-secondary-foreground mb-4">Need a Specific Service?</h2>
            <p className="text-secondary-foreground/80 mb-6 max-w-lg mx-auto">
              Give us a call for an estimate or to get additional information about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:6048798555">
                  <Phone className="h-5 w-5" />
                  Call (604) 879-8555
                </a>
              </Button>
              <Button variant="cta" size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link to="/contact">Get an Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
