import { 
  Stethoscope, 
  Sparkles, 
  ShoppingBag, 
  Camera, 
  Shield, 
  FileText,
  Building2,
  Phone,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';

const services = [
  {
    id: 'dental',
    icon: Stethoscope,
    title: 'Dental Clinic',
    subtitle: 'Complete Dental Care',
    description: 'Our modern dental clinic provides comprehensive oral healthcare services with experienced dentists and state-of-the-art equipment.',
    features: [
      'General Dentistry & Check-ups',
      'Teeth Cleaning & Whitening',
      'Root Canal Treatment',
      'Dental Implants',
      'Braces & Orthodontics',
      'Cosmetic Dentistry',
      'Pediatric Dental Care',
      'Emergency Dental Services',
    ],
    timing: 'Mon - Sat: 10:00 AM - 8:00 PM',
    bookable: true,
  },
  {
    id: 'beauty',
    icon: Sparkles,
    title: 'Beauty Parlour',
    subtitle: 'Transform Your Look',
    description: 'Experience premium beauty services with our skilled professionals. From haircare to bridal makeup, we offer a complete range of beauty treatments.',
    features: [
      'Haircut & Styling',
      'Hair Coloring & Highlights',
      'Facial & Skincare',
      'Manicure & Pedicure',
      'Bridal Makeup',
      'Mehendi Services',
      'Waxing & Threading',
      'Spa & Relaxation',
    ],
    timing: 'Mon - Sun: 10:00 AM - 9:00 PM',
    bookable: true,
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail Stores',
    subtitle: 'Shop Quality Products',
    description: 'Browse through our collection of retail stores offering quality products at competitive prices. From fashion to daily essentials, find everything you need.',
    features: [
      'Fashion & Clothing',
      'Accessories & Jewelry',
      'Electronics & Gadgets',
      'Home & Kitchen Items',
      'Cosmetics & Beauty Products',
      'Stationery & Gifts',
      'Daily Essentials',
      'Mobile Accessories',
    ],
    timing: 'Mon - Sun: 10:00 AM - 9:00 PM',
    bookable: false,
  },
  {
    id: 'security',
    icon: Shield,
    title: 'CCTV & Security Systems',
    subtitle: 'Protect What Matters',
    description: 'Professional security solutions for homes and businesses. We offer sales, installation, and maintenance of CCTV cameras and security systems.',
    features: [
      'CCTV Camera Installation',
      'DVR/NVR Systems',
      'IP Camera Solutions',
      'Video Door Phones',
      'Biometric Access Control',
      'Alarm Systems',
      'Remote Monitoring Setup',
      'Annual Maintenance Contracts',
    ],
    timing: 'Mon - Sat: 10:00 AM - 7:00 PM',
    bookable: false,
  },
  {
    id: 'photo',
    icon: Camera,
    title: 'Photo Studio',
    subtitle: 'Capture Your Moments',
    description: 'Professional photography and printing services. From passport photos to event coverage, we deliver quality at affordable prices.',
    features: [
      'Passport & ID Photos',
      'Portrait Photography',
      'Event Photography',
      'Photo Printing (All Sizes)',
      'Photo Editing & Retouching',
      'Lamination Services',
      'Photo Frames',
      'Digital Photo Services',
    ],
    timing: 'Mon - Sat: 9:00 AM - 8:00 PM',
    bookable: false,
  },
  {
    id: 'janseva',
    icon: FileText,
    title: 'Jan Seva Kendra',
    subtitle: 'Government Services Made Easy',
    description: 'Authorized center for various government services. Get your documentation work done quickly and hassle-free.',
    features: [
      'Aadhar Card Services',
      'PAN Card Application',
      'Driving License',
      'Passport Application',
      'Birth/Death Certificates',
      'Income Certificate',
      'Domicile Certificate',
      'Online Form Filling',
    ],
    timing: 'Mon - Sat: 9:00 AM - 6:00 PM',
    bookable: false,
  },
  {
    id: 'rental',
    icon: Building2,
    title: 'Outhouse / Rental Space',
    subtitle: 'Commercial Space Available',
    description: 'Premium commercial spaces available for rent. Ideal for offices, shops, and business ventures in a prime location.',
    features: [
      'Multiple Size Options',
      'Prime Location',
      'Ample Parking',
      'Power Backup',
      '24/7 Security',
      'Maintenance Support',
      'Flexible Lease Terms',
      'Ready-to-Move Spaces',
    ],
    timing: 'Contact for Details',
    bookable: false,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
   
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-3">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Everything You Need, <span className="text-primary">Under One Roof</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deon Plaza offers a comprehensive range of services to meet all your daily needs. From healthcare to beauty, retail to documentation — we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold">{service.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{service.timing}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    {service.bookable && (
                      <Link to="/book-appointment">
                        <Button className="btn-primary-gradient">Book Appointment</Button>
                      </Link>
                    )}
                    <a href="tel:+911234567890">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                        <Phone className="h-4 w-4" /> Call Now
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className={`bg-muted rounded-2xl p-6 md:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-heading font-semibold text-lg mb-4">Services Offered</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to guide you. Contact us or visit Deon Plaza to explore our services in person.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+911234567890">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
