"use client";
import React, { useState } from "react";
import Image from "next/image";

const HomeNavigation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images by default
  const [loadedImages, setLoadedImages] = useState(new Set()); // Track loaded images

  // Images array
  const images = [
    "/image/New folder/1.jpeg",
    "/image/New folder/2.jpeg",
    "/image/New folder/3.jpeg",
    "/image/New folder/4.jpeg",
    "/image/New folder/5.jpeg",
    "/image/New folder/6.jpeg",
    "/image/New folder/7.jpeg",
    "/image/New folder/8.jpeg",
    "/image/New folder/9.jpeg",
    "/image/New folder/10.jpeg",
    "/image/New folder/11.jpeg",
    "/image/New folder/12.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.54 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM.jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.53 AM (1).jpeg",
    "/image/New folder/WhatsApp Image 2024-09-12 at 10.38.52 AM (1).jpeg",
  ];

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, images.length));
  };

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our collection of memorable moments and achievements
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Modern Grid Gallery - 3 columns layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(0, visibleImages).map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square overflow-hidden relative">
              {/* Loading Skeleton with Shimmer Effect */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  {/* Loading Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                </div>
              )}
              
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={400}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages.has(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onLoad={() => handleImageLoad(index)}
                priority={index < 6} // Prioritize first 6 images
              />
            </div>
            
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Image {index + 1}</span>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleImages < images.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMoreImages}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Load More</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      )}

      {/* Image Counter */}
      <div className="text-center mt-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-blue-600">{visibleImages}</span> of{" "}
          <span className="font-semibold text-blue-600">{images.length}</span> images
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Selected image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-6">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavigation;
