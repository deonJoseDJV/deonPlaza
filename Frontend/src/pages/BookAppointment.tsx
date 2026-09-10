import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { z } from 'zod';

const bookingSchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  phone: z.string().trim().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number is too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email is too long'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().max(500, 'Notes are too long').optional(),
});

const dentalServices = [
  'General Check-up',
  'Teeth Cleaning',
  'Teeth Whitening',
  'Root Canal',
  'Dental Implant',
  'Braces Consultation',
  'Tooth Extraction',
  'Cavity Filling',
];

const beautyServices = [
  'Haircut & Styling',
  'Hair Color',
  'Facial Treatment',
  'Bridal Makeup',
  'Manicure & Pedicure',
  'Spa Package',
  'Threading & Waxing',
  'Hair Spa',
];

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM',
];

const BookAppointment = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<'dental' | 'beauty' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = bookingSchema.safeParse(formData);
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
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSuccess(true);
    toast({
      title: "Appointment Booked!",
      description: "We'll send you a confirmation SMS shortly.",
    });
    
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setSelectedCategory(null);
    setIsSuccess(false);
    setFormData({
      service: '',
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      notes: '',
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen">
     
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-3">
              Book Appointment
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Schedule Your <span className="text-primary">Visit</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Book an appointment for our dental clinic or beauty parlour. Choose your preferred date and time, and we'll have everything ready for you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {isSuccess ? (
              /* Success State */
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-2">Appointment Confirmed!</h2>
                <p className="text-muted-foreground mb-2">
                  Your appointment has been successfully booked.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  We'll send you a confirmation SMS with all the details.
                </p>
                
                <div className="bg-muted rounded-xl p-6 max-w-sm mx-auto mb-8">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                  </div>
                </div>
                
                <Button onClick={resetForm} className="btn-primary-gradient">
                  Book Another Appointment
                </Button>
              </div>
            ) : !selectedCategory ? (
              /* Category Selection */
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-center mb-8">
                  Select Service Category
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <button
                    onClick={() => setSelectedCategory('dental')}
                    className="group bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 text-left card-hover"
                  >
                    <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Stethoscope className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Dental Clinic</h3>
                    <p className="text-muted-foreground text-sm">
                      Book for dental check-ups, cleaning, treatments, and more.
                    </p>
                  </button>
                  
                  <button
                    onClick={() => setSelectedCategory('beauty')}
                    className="group bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 text-left card-hover"
                  >
                    <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Sparkles className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Beauty Parlour</h3>
                    <p className="text-muted-foreground text-sm">
                      Book for haircare, skincare, makeup, and spa services.
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <div className="bg-card rounded-2xl p-8 border border-border">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-primary hover:underline text-sm mb-4 flex items-center gap-1"
                >
                  ← Change Category
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    {selectedCategory === 'dental' ? (
                      <Stethoscope className="h-6 w-6 text-primary" />
                    ) : (
                      <Sparkles className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold">
                      {selectedCategory === 'dental' ? 'Dental Clinic' : 'Beauty Parlour'}
                    </h2>
                    <p className="text-muted-foreground text-sm">Fill in your details below</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Service *</label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {(selectedCategory === 'dental' ? dentalServices : beautyServices).map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Personal Details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <User className="h-4 w-4 inline mr-1" /> Full Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Phone className="h-4 w-4 inline mr-1" /> Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="h-4 w-4 inline mr-1" /> Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Calendar className="h-4 w-4 inline mr-1" /> Preferred Date *
                      </label>
                      <Input
                        name="date"
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className={errors.date ? 'border-destructive' : ''}
                      />
                      {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Clock className="h-4 w-4 inline mr-1" /> Preferred Time *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('time', value)}>
                        <SelectTrigger className={errors.time ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && <p className="text-destructive text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
                    <Textarea
                      name="notes"
                      placeholder="Any specific requirements or concerns..."
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary-gradient w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    By booking, you agree to our terms and conditions.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default BookAppointment;
