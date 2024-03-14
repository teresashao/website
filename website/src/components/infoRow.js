import React from 'react'

export default function infoRow({image_src}) {
  return (

    <div className="sticky top-0">
      <img className="w-10 mx-12 sticky top-0" src={image_src} alt="tetris-1"></img>
    </div>
  );
}