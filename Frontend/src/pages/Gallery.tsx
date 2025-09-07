import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Type definitions
interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

interface FadeInUpVariant {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { duration: number };
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const fadeInUp: FadeInUpVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Meditation Hall",
      category: "facilities",
      description: "Peaceful meditation hall with traditional Buddhist architecture"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Mountain Monastery",
      category: "location",
      description: "Traditional monastery overlooking the Kathmandu valley"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Guest Rooms",
      category: "accommodation",
      description: "Comfortable rooms with traditional décor and modern amenities"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Valley Views",
      category: "location",
      description: "Stunning panoramic views of Kathmandu valley from our retreat"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dihev9qxc/image/upload/v1757232462/a-photograph-of-a-tranquil-wellness-reso_TOcnlSzDRjOPveTWi3LTRg_wsKD-7gZRyqBHINAPQG6vA_bdrgt9.jpg",
      title: "Yoga Sessions",
      category: "activities",
      description: "Morning yoga sessions in our peaceful outdoor spaces"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Traditional Architecture",
      category: "facilities",
      description: "Beautiful traditional Nepalese architecture throughout the retreat"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Prayer Wheels",
      category: "culture",
      description: "Traditional prayer wheels creating a peaceful ambiance"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Garden Pathways",
      category: "location",
      description: "Serene garden paths perfect for walking meditation"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Dining Area",
      category: "facilities",
      description: "Traditional dining space serving organic, locally-sourced meals"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sunset Views",
      category: "location",
      description: "Spectacular sunset views over the Himalayan foothills"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cultural Events",
      category: "events",
      description: "Traditional wedding ceremonies in our beautiful outdoor venues"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dihev9qxc/image/upload/v1757232462/a-photograph-of-a-tranquil-wellness-reso_TOcnlSzDRjOPveTWi3LTRg_wsKD-7gZRyqBHINAPQG6vA_bdrgt9.jpg",
      title: "Spiritual Rituals",
      category: "activities",
      description: "Authentic spiritual ceremonies and traditional rituals"
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter((img: GalleryImage) => img.category === 'facilities').length },
    { id: 'accommodation', name: 'Accommodation', count: galleryImages.filter((img: GalleryImage) => img.category === 'accommodation').length },
    { id: 'location', name: 'Location', count: galleryImages.filter((img: GalleryImage) => img.category === 'location').length },
    { id: 'activities', name: 'Activities', count: galleryImages.filter((img: GalleryImage) => img.category === 'activities').length },
    { id: 'events', name: 'Events', count: galleryImages.filter((img: GalleryImage) => img.category === 'events').length },
    { id: 'culture', name: 'Culture', count: galleryImages.filter((img: GalleryImage) => img.category === 'culture').length }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredImages: GalleryImage[] = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter((img: GalleryImage) => img.category === activeCategory);

  const openLightbox = (image: GalleryImage, index: number): void => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev'): void => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore the beauty and tranquility of Pure Land Hospitality through our collection of images 
              showcasing our facilities, stunning location, and memorable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-maroon text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredImages.map((image: GalleryImage, index: number) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openLightbox(image, index)}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-navy group-hover:text-maroon transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-golden transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-golden transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-golden transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e: React.MouseEvent<HTMLImageElement>) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
              <p className="text-golden text-sm mt-2 capitalize">
                Category: {selectedImage.category}
              </p>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-maroon to-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Experience It Yourself</h2>
            <p className="text-xl text-gray-200 mb-8">
              These images only capture a glimpse of the peace and beauty waiting for you at Pure Land Hospitality. 
              Come experience the transformative power of our retreat in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="bg-golden hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Stay
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Plan a Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;