import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link = '/services', delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group bg-card rounded-2xl p-6 border border-border card-hover opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      
      {/* Content */}
      <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      
      {/* Link */}
      <Link to={link}>
        <Button variant="ghost" className="p-0 h-auto text-primary hover:text-coral-dark font-medium">
          Learn More →
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
