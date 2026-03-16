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
            Contact us today for reliable auto repair services.
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Our experienced team is ready to help with all your automotive needs.
          </p>
          <a
            href="tel:2045868347"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-button hover:bg-primary/90 transition-all shadow-subtle hover:shadow-card-hover"
          >
            <Phone className="h-5 w-5" />
            Call (204) 586-8347
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Art's Auto" className="h-10 w-auto mb-4 brightness-200" />
              <p className="text-sm text-background/60">
                Professional automotive repair services in Winnipeg since 1985.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-background/60 hover:text-primary transition-colors">Home</Link>
                <Link to="/services" className="text-sm text-background/60 hover:text-primary transition-colors">Services</Link>
                <Link to="/about" className="text-sm text-background/60 hover:text-primary transition-colors">About</Link>
                <Link to="/contact" className="text-sm text-background/60 hover:text-primary transition-colors">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:2045868347" className="text-sm text-background/60 hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (204) 586-8347
                </a>
                <span className="text-sm text-background/60 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Winnipeg, MB
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center">
            <p className="text-sm text-background/40">
              © {new Date().getFullYear()} Art's Auto. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;
