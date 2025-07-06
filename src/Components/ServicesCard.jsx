import React from "react";
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
      className={`group relative w-full h-[220px] ${bgColor} text-white rounded-2xl overflow-hidden 
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
      <div className="relative z-10 p-7 h-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 tracking-wide leading-tight">
            {service.title}
          </h2>
          <p className="text-sm leading-relaxed text-white/90 font-light">
            {service.description}
          </p>
        </div>

        {/* Subtle accent line */}
        <div className="mt-4 w-12 h-0.5 bg-white/30 rounded-full"></div>
      </div>

      {/* Icon with improved styling */}
      <div className="absolute top-6 right-6 z-20">
        <div
          className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 
                        group-hover:bg-white/20 group-hover:scale-110 
                        transition-all duration-300 ease-in-out"
        >
          <IconComponent className="w-5 h-5" />
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
  return (
    <main className="bg-white spacer w-full min-h-screen">
      <div className="flex  justify-between w-full  flex-col md:flex-row-reverse px-8 md:px-16 py-8">
        <div className="teritiary-color md:w-[60%]  font-bold patua-one-regular flex flex-col">
          <span className="text-orange-500 text-xl font-semibold">
            *YOU KNOW WHAT?!
          </span>
          <span className="text-6xl  ">
            WE TURN PROPERTIES INTO PERSONALITIES.
          </span>
        </div>
        <div className="teritiary-color md:w-[40%] text-start md:pr-32  flex  flex-col justify-end">
          <span className="teritary-color text-lg ">
            Every square foot deserves a story that sells. 
          </span>
          <span className=" font-bold text-lg hover:underline">
             See how we help <MoveRight className="inline-block ml-1 h-8 w-8" /> 
          </span>
        </div>
      </div>
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesCards;
