import React, {useState} from 'react';

const ImageGallery = () => {
  // Sample image URLs
  const images = [
    'email.webp',
    'github.svg',
    'linkedin.png'
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle clicking next
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle clicking previous
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center">
      <h1 className="text-3xl font-semibold">Image Gallery</h1>
      <div className="flex">
        <button
            onClick={handlePrevious}
            className="text-white text-lg p-2 w-12 rounded">
            <p className="text-4xl text-slate-700"> ☜ </p>
          </button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="rounded h-40 w-40"
        />
        <button
        onClick={handleNext}
        className="text-white text-lg p-2 w-12 rounded"
        >
        <p className="text-4xl text-slate-700">☞</p>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;