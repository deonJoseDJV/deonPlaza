import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email is too long'),
  phone: z.string().trim().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number is too long'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject is too long'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['Deon Plaza, Main Road,', 'City Name, State 123456'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=Deon+Plaza',
    },
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['+91 12345 67890', '+91 98765 43210'],
    action: {
      label: 'Call Now',
      href: 'tel:+911234567890',
    },
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@deonplaza.com', 'support@deonplaza.com'],
    action: {
      label: 'Send Email',
      href: 'mailto:info@deonplaza.com',
    },
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday: 9:00 AM - 9:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
    action: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-3">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border text-center card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                ))}
                {item.action && (
                  <a 
                    href={item.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-primary font-medium text-sm hover:underline"
                  >
                    {item.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-heading text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you soon.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary-gradient w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                {/* Google Maps Embed Placeholder */}
                <iframe
  src="https://www.google.com/maps?q=9.366083,76.476583&hl=en&z=17&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: '400px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Deon Plaza Location"
/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
