interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  light = false 
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
          light ? 'text-primary-foreground/70' : 'text-primary'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-primary-foreground' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${
          light ? 'text-primary-foreground/80' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
