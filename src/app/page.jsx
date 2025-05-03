'use client'
import { useState, useEffect } from "react";


// import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);


  // Features data
  const features = [
    {
      title: "Book Time",
      description: "Schedule a convenient appointment with our expert team",
      icon: "📅"
    },
    {
      title: "We Arrive",
      description: "Our professionals will come to your location on time",
      icon: "🚗"
    },
    {
      title: "Solve Problem",
      description: "We diagnose and resolve your issues efficiently",
      icon: "🔧"
    }
  ];

  // Contoh data gambar (dalam implementasi nyata, data ini bisa berasal dari API/database)
  const initialPhotos = [
    {
      id: 1,
      src: "https://placehold.co/800x1200.png?text=Photo+1",
      width: 800,
      height: 1200,
      alt: "Photo 1",
    },
    {
      id: 2,
      src: "https://placehold.co/600x800.png?text=Photo+2",
      width: 600,
      height: 800,
      alt: "Photo 2",
    },
    {
      id: 3,
      src: "https://placehold.co/800x600.png?text=Photo+3",
      width: 800,
      height: 600,
      alt: "Photo 3",
    },
    {
      id: 4,
      src: "https://placehold.co/1200x800.png?text=Photo+4",
      width: 1200,
      height: 800,
      alt: "Photo 4",
    },
    {
      id: 5,
      src: "https://placehold.co/900x1100.png?text=Photo+5",
      width: 900,
      height: 1100,
      alt: "Photo 5",
    },
    {
      id: 6,
      src: "https://placehold.co/1000x800.png?text=Photo+6",
      width: 1000,
      height: 800,
      alt: "Photo 6",
    },
    {
      id: 7,
      src: "https://placehold.co/800x900.png?text=Photo+7",
      width: 800,
      height: 900,
      alt: "Photo 7",
    },
    {
      id: 8,
      src: "https://placehold.co/700x1000.png?text=Photo+8",
      width: 700,
      height: 1000,
      alt: "Photo 8",
    },
    {
      id: 9,
      src: "https://placehold.co/1100x800.png?text=Photo+9",
      width: 1100,
      height: 800,
      alt: "Photo 9",
    },
    {
      id: 10,
      src: "https://placehold.co/800x1100.png?text=Photo+10",
      width: 800,
      height: 1100,
      alt: "Photo 10",
    },
  ];


  useEffect(() => {
    // Simulasi pengambilan data dari API
    setTimeout(() => {
      setPhotos(initialPhotos);
      setLoading(false);
    }, 500);
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // Cycle through features on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change active feature based on scroll position
      if (scrollPosition < 200) {
        setActiveFeature(0);
      } else if (scrollPosition < 400) {
        setActiveFeature(1);
      } else {
        setActiveFeature(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="bg-white">
      {/* hero page */}
      <div className="bg-[#F5F8FE] p-5 -full">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="max-w-lg text-gray-700 flex flex-col gap-3">
            <h1 className="text-7xl font-bold ">Lorem ipsum <p className="text-[#0052DA]">dolor sit</p>amet.</h1>
            <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates.</p>
          </div>
          <div className="max-w-2xl">
            <img src="/images/home 1.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mx-auto px-52 bg-[#F5F8FE] w-full rounded-b-full pb-10 mb-10">
        <div className="relative h-64 w-full">
          {features.map((feature, index) => {
            let positionClass = "";
            if (index === 0) {
              positionClass = "absolute left-0 bottom-0";
            } else if (index === 1) {
              positionClass = "absolute left-1/2 transform -translate-x-1/2 top-0";
            } else {
              positionClass = "absolute right-0 bottom-0";
            }
            return (
              <div
                key={index}
                className={`
                    w-44 h-44 rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 shadow-lg
                    ${activeFeature === index ? 'bg-[#0052DA] text-white transform scale-110' : 'bg-white text-gray-800'}
                    ${positionClass}
                  `}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto mb-10">
        <div className="text-gray-700 flex flex-col items-center justify-center gap-3 mb-5">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ServiceCard
            title="Maintenance"
            description="Regular maintenance to keep your systems running smoothly and prevent future issues."
            image={"https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?uid=R138606102&ga=GA1.1.51738470.1741326986&semt=ais_hybrid&w=740"}
          />
          <ServiceCard
            title="Repairs"
            description="Quick and reliable repairs when something goes wrong, getting you back on track."
            image={"https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?uid=R138606102&ga=GA1.1.51738470.1741326986&semt=ais_hybrid&w=740"}
          />
          <ServiceCard
            title="Installation"
            description="Professional installation of new equipment with warranty and support."
            image={"https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?uid=R138606102&ga=GA1.1.51738470.1741326986&semt=ais_hybrid&w=740"}
          />
          <ServiceCard
            title="break"
            description="Professional installation of new equipment with warranty and support."
            image={"https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?uid=R138606102&ga=GA1.1.51738470.1741326986&semt=ais_hybrid&w=740"}
          />
        </div>
      </div>
      <div className="container mx-auto px-20 mb-10">
        <div className="flex flex-col gap-3 items-center mb-5">
          <h1 className="text-3xl font-bold">Our Latest Project</h1>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, neque?</p>

        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4">
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={handlePhotoClick}
              />
            ))}
          </div>
        )}
      </div>

      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="group p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full mb-4 rounded-2xl transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-[#0052DA] font-semibold hover:underline">
        Learn more →
      </button>
    </div>
  );
}


// Komponen PhotoCard untuk kartu foto
const PhotoCard = ({ photo }) => {
  return (
    <div
      className="break-inside-avoid mb-4 cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"

    >
      <div className="relative">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="w-full h-auto"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="p-2 bg-white">
        <h3 className="text-sm font-medium truncate">{photo.alt}</h3>
      </div>
    </div>
  );
};