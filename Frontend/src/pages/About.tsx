import { CheckCircle2, Users, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import heroImage from '@/assets/deonplaza.jpeg';

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'We prioritize customer satisfaction in everything we do, ensuring a pleasant experience for every visitor.',
  },
  {
    icon: Target,
    title: 'Quality Service',
    description: 'Our expert professionals deliver top-notch services with attention to detail and commitment to excellence.',
  },
  {
    icon: Award,
    title: 'Trust & Integrity',
    description: 'We maintain transparent pricing and honest dealings, building long-lasting relationships with our customers.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-3">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="text-primary">Deon Plaza</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A premier multi-service commercial complex dedicated to serving the community with excellence, trust, and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Deon Plaza Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl -z-10" />
            </div>
            
            <div>
              <SectionHeading
                subtitle="Our Story"
                title="Building Trust Since 2014"
                centered={false}
              />
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Deon Plaza was established with a vision to create a one-stop destination for all essential services that every family needs. Located in the heart of the city, our commercial complex brings together trusted professionals and quality businesses under one roof.
                </p>
                <p>
                  Over the years, we have grown from a small commercial space to a bustling hub serving thousands of customers every month. Our commitment to quality, affordability, and customer satisfaction has made us a trusted name in the community.
                </p>
                <p>
                  From dental care to beauty services, from retail shopping to government documentation, Deon Plaza offers convenience and reliability that our customers have come to depend on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and high-quality services to every family in our community. We strive to be the go-to destination for all essential needs, making life easier and more convenient for our customers.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted commercial complex in the region, known for excellence in service delivery, community engagement, and creating value for all stakeholders — customers, business partners, and employees alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            description="Our core values guide every interaction and decision we make."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <SectionHeading
            subtitle="Why Deon Plaza"
            title="What Makes Us Different"
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Prime location with easy accessibility',
              'Ample parking space for customers',
              'Clean and well-maintained facilities',
              'Professional and trained staff',
              'Affordable pricing across all services',
              'Modern equipment and technology',
              'Safe and secure environment',
              'Extended operating hours',
              'Customer-friendly policies',
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-secondary-foreground/5 rounded-lg p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
