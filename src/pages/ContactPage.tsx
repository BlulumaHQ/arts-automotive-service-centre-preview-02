import { motion } from "framer-motion";
import { Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-16 lg:py-20">
        <div className="container text-center">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Get In Touch</p>
          <h1 className="text-hero text-background mb-4">Contact Us</h1>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Give us a call for an estimate or to get additional information about our services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 space-y-5"
            >
              <div className="bg-card rounded-card p-6 shadow-subtle border border-border/50">
                <h3 className="font-bold text-lg mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:6048798555" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-button bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-bold">(604) 879-8555</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-button bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div className="font-bold">675 Clark Drive<br />Vancouver, BC V5L 3H9</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-card p-6 text-primary-foreground">
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Call us directly and let Art and his crew get you back on the road fast.
                </p>
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold" size="lg" asChild>
                  <a href="tel:6048798555">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form
                action="https://formspree.io/f/mbdabbql"
                method="POST"
                className="bg-card rounded-card p-6 lg:p-8 shadow-subtle border border-border/50 space-y-5"
              >
                <h3 className="font-bold text-lg mb-2">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full h-11 px-4 rounded-button border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full h-11 px-4 rounded-button border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-foreground mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full h-11 px-4 rounded-button border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-foreground mb-1.5 block">Service Needed</label>
                    <select
                      name="service"
                      className="w-full h-11 px-4 rounded-button border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option>Engine Repair</option>
                      <option>Brake Service</option>
                      <option>Oil Changes</option>
                      <option>Transmission Service</option>
                      <option>Electrical Diagnostics</option>
                      <option>Cooling System Service</option>
                      <option>Suspension Repair</option>
                      <option>Exhaust System Repair</option>
                      <option>Air Conditioning Service</option>
                      <option>Preventive Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-button border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Google Map */}
          <div className="mt-16 rounded-card overflow-hidden shadow-subtle border border-border/50">
            <iframe
              title="Art's Automotive Service Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.815!2d-123.078!3d49.268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717d8b8b0001%3A0x0!2s675+Clark+Dr%2C+Vancouver%2C+BC+V5L+3H9!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
