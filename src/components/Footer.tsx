import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="TatheerPro LTD" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Bringing Your Business to the Digital World
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CLLsw5KAT/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/tatheer_pro_ltd/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">GBP Setup</li>
              <li className="text-muted-foreground text-sm">Map Ranking</li>
              <li className="text-muted-foreground text-sm">Website Development</li>
              <li className="text-muted-foreground text-sm">Reputation Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+92 328 6091594</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="mailto:tatheerproltd@gmail.com" className="hover:text-primary transition-colors">
                  tatheerproltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TatheerPro LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
