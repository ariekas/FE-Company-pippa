'use client'
import { useState, useEffect } from "react";


// import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [photos, setPhotos] = useState([]);
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
      src: "https://placehold.co/2000x1000.png?text=Photo+1",
      width: 2000,
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
      <div className="flex items-center justify-between container mx-auto mb-10">
        <div className="flex flex-col text-gray-700">
          <h1 className="text-3xl font-semibold">About Us</h1>
          <p className="text-justify max-w-4xl text-lg font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque est culpa animi corporis rerum nemo quis id repellat ut facilis natus ipsum voluptate ex, aliquam architecto saepe voluptatibus officia veniam, totam mollitia, reiciendis vitae placeat accusamus. Dignissimos, numquam tenetur consectetur voluptates ullam a! Id dicta praesentium reiciendis enim doloremque ipsam.</p>
          <button className="mt-4 text-white font-light hover:bg-[#0052DA] transition-colors duration-300 max-w-xs py-2.5 rounded-full bg-[#0052DA]/70 text-sm">More about us</button>
        </div>
        <div className="max-w-md">
          <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?uid=R138606102&ga=GA1.1.51738470.1741326986&semt=ais_hybrid&w=740" alt="" className="w-full" />
        </div>
      </div>
      <div className="bg-[#F5F8FE] mb-10 py-16">
        <div className="container mx-auto  ">
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
      </div>
      <div className=" px-20 container mx-auto">
        <div className="flex flex-col gap-3 items-center mb-5 ">
          <h1 className="text-3xl font-bold">Our Latest Project</h1>
          <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, neque?</p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4 ">
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
      <div className="bg-[#0052DA] mb-10 px-80">
        <div className="flex justify-between container mx-auto z-50 items-center text-white p-10">
          <div className="flex flex-col">
            <p className="max-w-sm text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime.</p>
            <div className="flex flex-col gap-3 mt-5 bg-[#0D5BDC] p-5 rounded-r-full">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01" /><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13" /><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97" /></svg>
                ))}
                <p className="text-sm font-semibold ml-2">4.5/5</p>
              </div>
              <p className="flex gap-2 text-md items-center"><p className="font-bold">2K+</p> Customer Reviews</p>
            </div>

          </div>
          <div className=" rounded-l-full rounded-r-full grid grid-cols-2 bg-[#0D5BDC] gap-12 p-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none" stroke="#f2f0f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" color="#f2f0f0"><path d="M11 11L6 6M5 7.5L7.5 5l-3-1.5l-1 1zm14.975 1.475a3.5 3.5 0 0 0 .79-3.74l-1.422 1.422h-2v-2l1.422-1.422a3.5 3.5 0 0 0-4.529 4.53l-6.47 6.471a3.5 3.5 0 0 0-4.53 4.529l1.421-1.422h2v2l-1.422 1.422a3.5 3.5 0 0 0 4.53-4.528l6.472-6.472a3.5 3.5 0 0 0 3.738-.79" /><path d="m11.797 14.5l5.604 5.604a1.35 1.35 0 0 0 1.911 0l.792-.792a1.35 1.35 0 0 0 0-1.911L14.5 11.797" /></g></svg>
                <div className="">
                  <p className="text-3xl font-bold">{i * 25}</p>
                  <p className="text-sm font-light">Projects Completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="group p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 bg-white">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full mb-4 rounded-2xl transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-[#0052DA] font-semibold hover:underline">
        Learn more →
      </button>
    </div>
  );
}

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