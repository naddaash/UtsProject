import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import phone  from '../assets/hp.jpeg';
import shop from '../assets/shop.jpeg';
import music from '../assets/singging.jpeg';
import cook from '../assets/cook.jpeg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Main Hp", image: phone },
    { name: "Belanja", image: shop },
    { name: "Bernyanyi", image: music },
    { name: "Memasak", image: cook },
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;