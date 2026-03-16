import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteFooter = () => {
  return (
    <>
      {/* Global CTA */}
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h2 className="text-section text-secondary-foreground mb-4">
            Get Your Vehicle Back on the Road
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            Give us a call for an estimate or to get additional information about our services.
          </p>
          <a
            href="tel:6048798555"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-button hover:bg-primary/90 transition-all shadow-hero"
          >
            <Phone className="h-5 w-5" />
            Call (604) 879-8555
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left: Logo */}
            <div className="md:max-w-xs">
              <h3 className="text-xl font-bold text-background mb-4 uppercase tracking-wide">Art's Automotive Service Centre</h3>
              <p className="text-sm text-background/60">
                Good & honest auto repair in Vancouver for over 28 years.
              </p>
            </div>

            {/* Right: Links + Contact */}
            <div className="flex flex-col sm:flex-row gap-12">
              <div>
                <h4 className="text-sm font-bold text-background mb-4 uppercase tracking-wider">Quick Links</h4>
                <nav className="flex flex-col gap-2">
                  <Link to="/" className="text-sm text-background/60 hover:text-primary transition-colors">Home</Link>
                  <Link to="/services" className="text-sm text-background/60 hover:text-primary transition-colors">Services</Link>
                  <Link to="/contact" className="text-sm text-background/60 hover:text-primary transition-colors">Contact</Link>
                </nav>
              </div>
              <div>
                <h4 className="text-sm font-bold text-background mb-4 uppercase tracking-wider">Contact</h4>
                <div className="flex flex-col gap-3">
                  <a href="tel:6048798555" className="text-sm text-background/60 hover:text-primary transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> (604) 879-8555
                  </a>
                  <span className="text-sm text-background/60 flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> 675 Clark Drive, Vancouver, BC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="border-t border-background/10 mt-8 pt-6 text-center">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} Art's Automotive Service Centre | Web Design by{" "}
              <a href="https://sonykundesign.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Sonykun Design
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;
