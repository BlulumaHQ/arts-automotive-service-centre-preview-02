import { motion } from "framer-motion";
import { Shield, Wrench, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-mechanic.jpg";

const values = [
  "Over 35 years of experience serving Winnipeg",
  "Certified and experienced technicians",
  "Quality workmanship guarantee",
  "Honest and fair pricing on all services",
  "Complete automotive care under one roof",
  "Committed to customer satisfaction",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">About Us</p>
              <h1 className="text-hero mb-6">About Art's Auto</h1>
              <p className="text-muted-foreground text-lg mb-4">
                At Art's Auto, we've been providing Winnipeg with reliable automotive repair services for over 35 years. Our experienced team of certified technicians is committed to keeping your vehicle running safely and efficiently.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                We understand that car troubles can be stressful and inconvenient. That's why we work hard to provide honest, affordable solutions that get you back on the road quickly.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src={aboutImage}
                alt="Professional brake repair at Art's Auto"
                className="rounded-card shadow-subtle w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-section text-center mb-12">Why Choose Art's Auto?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 bg-background rounded-card shadow-subtle"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-base">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "35+", label: "Years Experience" },
              { value: "10+", label: "Core Services" },
              { value: "1985", label: "Established" },
              { value: "100%", label: "Satisfaction Focus" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="text-4xl font-bold text-secondary tabular-nums">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
