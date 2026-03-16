import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you! We'll get back to you as soon as possible.",
    });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Get In Touch</p>
          <h1 className="text-hero mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Schedule your appointment today or call us for immediate assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-card p-6 shadow-subtle">
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:2045868347" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-button bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">(204) 586-8347</div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-button bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Winnipeg, MB</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-card p-6 text-secondary-foreground">
              <h3 className="font-semibold text-lg mb-2">Need Immediate Help?</h3>
              <p className="text-secondary-foreground/80 text-base mb-4">
                Call us directly for urgent repairs and we'll get you back on the road.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:2045868347">
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
            <form onSubmit={handleSubmit} className="bg-card rounded-card p-6 lg:p-8 shadow-subtle space-y-5">
              <h3 className="font-semibold text-lg mb-2">Send Us a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-button border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-button border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-11 px-4 rounded-button border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full h-11 px-4 rounded-button border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring"
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
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-button border border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
