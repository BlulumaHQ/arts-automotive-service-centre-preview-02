import { motion } from "framer-motion";
import { Wrench, Settings, Droplets, Cog, Zap, Thermometer, Car, Wind, Snowflake, CalendarCheck } from "lucide-react";
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
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const ServicesPage = () => {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Complete Automotive Care</p>
            <h1 className="text-hero mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we have the expertise and equipment to handle all your automotive needs.
            </p>
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
                className="bg-card rounded-card p-6 shadow-subtle hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-button bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-4">Need a specific service not listed here?</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
