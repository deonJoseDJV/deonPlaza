import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/dp4.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4 ml-2 md:-translate-x-10">
 <img
  src={logo}
  alt="Deon Plaza"
  className="h-29 w-auto object-contain bg-card rounded-xl p-1 shadow-sm"
/>


  <p className="text-secondary-foreground/80 text-sm leading-relaxed ">
    Your one-stop destination for dental care, beauty services, retail shopping, security solutions, photography, and government services.
  </p>

  <div className="flex gap-3 ">
    <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
      <Facebook className="h-5 w-5" />
    </a>
    <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
      <Instagram className="h-5 w-5" />
    </a>
    <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
      <Youtube className="h-5 w-5" />
    </a>
  </div>
</div>


          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact', 'Book Appointment'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Dental Clinic',
                'Beauty Parlour',
                'Retail Stores',
                'CCTV & Security',
                'Photo Studio',
                'Jan Seva Kendra',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Deon Plaza, Church Rd,<br />
                  P.O, Edathua, Kuttanad Taluk, Edathua, Kerala 689573
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-secondary-foreground/70 hover:text-primary text-sm">
                  +91 9947713976
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@deonplaza.com" className="text-secondary-foreground/70 hover:text-primary text-sm">
                  deonplaza2014@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Mon - Sat: 9:00 AM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} Deon Plaza. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
