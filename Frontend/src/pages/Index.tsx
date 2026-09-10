import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Sparkles, 
  ShoppingBag, 
  Camera, 
  Shield, 
  FileText,
  Building2,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';
import heroImage from '@/assets/dp2.jpeg';

const services = [
  {
    icon: Stethoscope,
    title: 'Dental Clinic',
    description: 'Complete dental care with modern equipment. Teeth cleaning, root canal, braces, and more.',
  },
  {
    icon: Sparkles,
    title: 'Beauty Parlour',
    description: 'Transform your look with our expert stylists. Hair, makeup, skincare, and bridal services.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail Stores',
    description: 'Shop from a variety of quality products. Fashion, accessories, electronics, and daily essentials.',
  },
  {
    icon: Shield,
    title: 'CCTV & Security',
    description: 'Protect your home and business with professional security camera installation services.',
  },
  {
    icon: Camera,
    title: 'Photo Studio',
    description: 'Professional photography, passport photos, printing services, and photo editing.',
  },
  {
    icon: FileText,
    title: 'Jan Seva Kendra',
    description: 'Government services at your doorstep. Aadhar, PAN, driving license, and more.',
  },
];

const stats = [
  { value: '10+', label: 'Years of Trust' },
  { value: '15,000+', label: 'Happy Customers' },
  { value: '7', label: 'Services' },
  { value: '10+', label: 'Expert Staff' },
];

const Index = () => {
  return (
    <div className="min-h-screen">
     
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Deon Plaza Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        
        <div className="section-container relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <Building2 className="h-4 w-4" />
              Your Trusted Commercial Hub
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 animate-fade-up stagger-1">
              Welcome to{' '}
              <span className="text-primary">Deon Plaza</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed animate-fade-up stagger-2">
              Your one-stop destination for dental care, beauty services, retail shopping, 
              security solutions, photography, and government services — all under one roof.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
              <Link to="/services">
                <Button size="lg" className="btn-primary-gradient gap-2">
                  Explore Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-secondary-foreground/10 animate-fade-up stagger-4">
              <a href="tel:+91 9947713976" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9947713976</span>
              </a>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Deon Plaza, Church Rd, Edathua, Kerala 689573<br />
                 </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Triangle */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" className="text-primary" fill="none"/>
            <polygon points="50,20 80,80 20,80" stroke="currentColor" strokeWidth="2" className="text-secondary-foreground" fill="none"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Premium Services"
            description="Discover a wide range of professional services designed to meet all your needs under one roof."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Why Choose Us"
                title="Trusted by Thousands of Customers"
                description="Deon Plaza has been serving the local community with dedication and excellence for over a decade."
                centered={false}
              />
              
              <ul className="space-y-4 mt-8">
                {[
                  'Convenient location with ample parking',
                  'Professional and experienced staff',
                  'Modern facilities and equipment',
                  'Affordable pricing for all services',
                  'One-stop solution for multiple needs',
                  'Safe and clean environment',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4 mt-8">
                <Link to="/about">
                  <Button className="btn-primary-gradient">Learn More About Us</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Deon Plaza" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-primary rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Visit <span className="text-primary">Deon Plaza</span>?
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment for our dental clinic or beauty parlour, or simply walk in to explore our retail stores and services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment">
  <Button
    size="lg"
    className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg transition-all gap-2"
  >
    Book Appointment <ArrowRight className="h-4 w-4" />
  </Button>
</Link>

<a href="tel:+911234567890">
  <Button
    size="lg"
    className="bg-white/90 text-red-600 font-semibold border border-red-200 shadow-sm hover:bg-red-50 hover:text-red-700 transition-all gap-2"
  >
    <Phone className="h-4 w-4" /> Call Us Now
  </Button>
</a>

<Link to="/contact">
  <Button
    size="lg"
    className="bg-white/90 text-gray-700 font-semibold border border-gray-300 shadow-sm hover:bg-gray-100 hover:text-black transition-all gap-2"
  >
    <MapPin className="h-4 w-4" /> Get Directions
  </Button>
</Link>

          </div>
        </div>
      </section>

     
     
    </div>
  );
};

export default Index;
