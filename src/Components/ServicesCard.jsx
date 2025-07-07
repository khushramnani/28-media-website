import React, { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Users,
  Instagram,
  Newspaper,
  Camera,
  Mail,
  Globe,
  Building2,
  MoveRight,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Services data
const servicesData = [
  {
    id: 1,
    title: "​SOCIAL MEDIA MANAGEMENT",
    description:
      "Our Social Media Management service is all about developing customized plans that align seamlessly with your brand's goals and the behaviors of your target audience, we dive deep into the unique aspects.",
    icon: Users,
  },
  {
    id: 2,
    title: "​INSTAGRAM GROWTH",
    description:
      "Comprehensive Instagram growth strategies that drive engagement, increase brand visibility, and convert prospects into loyal customers through strategic campaigns.",
    icon: Instagram,
  },
  {
    id: 3,
    title: "PR SERVICE",
    description:
      "Data-driven insights and comprehensive analytics to measure performance, understand audience behavior, and optimize your marketing strategies for maximum ROI.",
    icon: Newspaper,
  },
  {
    id: 4,
    title: "CONTENT CREATION",
    description:
      "Creative and engaging content that tells your brand story, resonates with your audience, and drives meaningful interactions across all digital platforms.",
    icon: Camera,
  },
  {
    id: 5,
    title: "EMAIL MARKETING",
    description:
      "Innovative email marketing strategies that engage your audience, drive conversions, and build lasting customer relationships through targeted campaigns.",
    icon: Mail,
  },
  {
    id: 6,
    title: "WEB DEVELOPMENT",
    description:
      "Modern, responsive web development that creates seamless user experiences, drives conversions, and establishes a strong online presence for your business.",
    icon: Globe,
  },
];

// Single Service Card Component
const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;

  // Calculate row and column position for checkerboard pattern
  const row = Math.floor(index / 2);
  const col = index % 2;

  // Determine background color based on checkerboard pattern
  const isBlue = (row % 2 === 0 && col === 0) || (row % 2 === 1 && col === 1);
  const bgColor = isBlue
    ? "bg-gradient-to-br from-[#1E2A44] to-[#2A3B5C]"
    : "bg-gradient-to-br from-[#6B46C1] to-[#8B5CF6]";
  const borderColor = isBlue ? "border-l-[#1E2A44]" : "border-l-[#6B46C1]";
  const hoverShadow = isBlue
    ? "hover:shadow-[#1E2A44]/20"
    : "hover:shadow-[#6B46C1]/20";

  return (
    <div
      className={`group relative w-full h-[180px] sm:h-[200px] md:h-[220px] ${bgColor} text-white rounded-2xl overflow-hidden 
                     shadow-lg ${hoverShadow} hover:shadow-2xl 
                     transition-all duration-300 ease-in-out 
                     hover:-translate-y-1 hover:scale-[1.02]
                     border border-white/10`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
      </div>

      {/* Notched corner effect - more refined */}
      <div
        className={`absolute top-0 right-0 w-0 h-0 border-t-[35px] border-t-transparent border-l-[35px] ${borderColor.replace(
          "border-l-",
          "border-l-"
        )} 
                       transform translate-x-[-1px] translate-y-[-1px] opacity-80`}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-7 h-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wide leading-tight">
            {service.title}
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-white/90 font-light line-clamp-4">
            {service.description}
          </p>
        </div>

        {/* Subtle accent line */}
        <div className="mt-3 sm:mt-4 w-8 sm:w-12 h-0.5 bg-white/30 rounded-full"></div>
      </div>

      {/* Icon with improved styling */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
        <div
          className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 
                        group-hover:bg-white/20 group-hover:scale-110 
                        transition-all duration-300 ease-in-out"
        >
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-in-out rounded-2xl"
      ></div>
    </div>
  );
};

// Main Services Component
const ServicesCards = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Header section animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children, 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cards animation
    const validCards = cardsRef.current.filter(card => card !== null);
    if (validCards.length > 0) {
      // Set initial state
      gsap.set(validCards, { 
        y: 60, 
        opacity: 0,
        scale: 0.9
      });
      
      // Staggered entrance animation
      gsap.to(validCards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15, // Slight delay between each card
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="bg-white spacer w-full min-h-screen">
      <div ref={headerRef} className="flex justify-between w-full flex-col md:flex-row-reverse px-4 sm:px-8 md:px-16 py-8 gap-6 md:gap-0">
        <div className="teritiary-color md:w-[60%] font-bold patua-one-regular flex flex-col">
          <span className="text-orange-500 text-lg sm:text-xl font-semibold">
            *YOU KNOW WHAT?!
          </span>
          <span className="text-3xl sm:text-4xl md:text-6xl leading-tight">
            WE TURN PROPERTIES INTO PERSONALITIES.
          </span>
        </div>
        <div className="teritiary-color md:w-[40%] text-start md:pr-32 flex flex-col justify-end gap-2">
          <span className="teritary-color text-base sm:text-lg">
            Every square foot deserves a story that sells. 
          </span>
          <span className="font-bold text-base sm:text-lg hover:underline flex items-center">
             See how we help <MoveRight className="inline-block ml-1 h-6 w-6 sm:h-8 sm:w-8" /> 
          </span>
        </div>
      </div>
      <div className="w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                ref={el => {
                  if (el) {
                    cardsRef.current[index] = el;
                  }
                }}
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesCards;
