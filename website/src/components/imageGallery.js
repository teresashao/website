import React, {useState} from 'react';

const ImageGallery = () => {
  // Sample image URLs
  const images = [
    'pasta.jpg',
    'sushi.png',
    'table.png'
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
      <div className="relative justify-middle group">
        <div className="absolute justify-between opacity-0 group-hover:opacity-100">
          <div className="flex justify-between">
            <button
              onClick={handleNext}
              className="flex-row text-white text-lg mt-24 ml-48 w-12 rounded text-right">
              <p className="text-4xl">➠</p>
            </button>
          </div>
      
        </div>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="rounded object-cover h-60 w-60"
        />
      </div>
    </div>
  );
};

export default ImageGallery;