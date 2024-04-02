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
    <div className="flex justify-between">
      <div className="flex justify-between">
        <button
          onClick={handleNext}
          className="flex-row text-slate-600 text-lg w-12 rounded-md text-right">
          <p className="text-4xl">˱</p>
        </button>
        <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="rounded object-cover h-60 w-60 ml-10"
      />
        <button
          onClick={handleNext}
          className="flex-row text-slate-600 text-lg w-12 rounded-md text-right">
          <p className="text-4xl">˲</p>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;