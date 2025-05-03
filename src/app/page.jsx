'use client'
import { useState, useEffect } from "react";
export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

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
         {/* icon progres */}
        
      </div>
      <div className="mx-auto px-52 bg-[#F5F8FE] w-full rounded-b-full pb-10">
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

      <div className=" py-10">
        <div className="container mx-auto">
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


