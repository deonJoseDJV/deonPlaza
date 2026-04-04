import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import heroImage from '@/assets/dp3.png';
import heroImage2 from '@/assets/dp2.jpeg';

// Gallery images - using hero image as placeholder, can be replaced with actual images
const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'building', name: 'Building' },
  { id: 'dental', name: 'Dental Clinic' },
  { id: 'beauty', name: 'Beauty Parlour' },
  { id: 'retail', name: 'Retail' },
  { id: 'studio', name: 'Photo Studio' },
];

const galleryImages = [
  { id: 1, category: 'building', title: 'Deon Plaza Exterior', image: heroImage },
  { id: 2, category: 'building', title: 'Main Entrance', image: heroImage },
  { id: 3, category: 'dental', title: 'Dental Clinic', image: heroImage },
  { id: 4, category: 'dental', title: 'Treatment Room', image: heroImage },
  { id: 5, category: 'beauty', title: 'Beauty Parlour', image: heroImage2 },
  { id: 6, category: 'beauty', title: 'Salon Interior', image: heroImage2 },
  { id: 7, category: 'retail', title: 'Retail Store', image: heroImage2 },
  { id: 8, category: 'retail', title: 'Shopping Area', image: heroImage2 },
  { id: 9, category: 'studio', title: 'Photo Studio', image: heroImage },
  { id: 10, category: 'building', title: 'Parking Area', image: heroImage },
  { id: 11, category: 'building', title: 'Reception', image: heroImage },
  { id: 12, category: 'studio', title: 'Printing Services', image: heroImage },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-3">
              Gallery
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Explore <span className="text-primary">Deon Plaza</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Take a virtual tour of our commercial complex. Browse through images of our building, facilities, and various service areas.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="section-container">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-secondary-foreground font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-secondary-foreground hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center text-secondary-foreground mt-4 font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
