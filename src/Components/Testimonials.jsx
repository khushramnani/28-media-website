import React, { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // GSAP animations
  useGSAP(() => {
    // Header animation
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

    // Testimonial cards animation
    const validCards = cardsRef.current.filter(card => card !== null);
    if (validCards.length > 0) {
      // Set initial state
      gsap.set(validCards, { 
        x: 100, 
        opacity: 0,
        scale: 0.9
      });
      
      // Staggered entrance animation
      gsap.to(validCards, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Sunrise Developers",
      position: "Managing Director",
      testimonial: "28 Media transformed our project marketing completely. We saw a 300% increase in inquiries within the first month. Their creative approach and strategic planning are unmatched in the real estate industry.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      
      bgColor: "from-amber-700 to-amber-900",
      textColor: "text-white"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Elite Properties",
      position: "Sales Head",
      testimonial: "Working with Saumya and his team was a game-changer. They delivered exceptional branding and digital campaigns that helped us sell out our entire project 6 months ahead of schedule.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      
      bgColor: "from-purple-700 to-purple-900",
      textColor: "text-white"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Green Valley Constructions",
      position: "CEO",
      testimonial: "The ROI on our marketing spend increased by 250% after partnering with 28 Media. Their data-driven approach and creative execution are phenomenal. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      
      bgColor: "from-slate-700 to-slate-900",
      textColor: "text-white"
    },
    {
      id: 4,
      name: "Neha Agarwal",
      company: "Luxury Homes Ltd",
      position: "Marketing Manager",
      testimonial: "28 Media's video marketing campaigns were absolutely stunning. They captured the essence of our luxury projects perfectly, resulting in premium clients and faster sales.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      
      bgColor: "from-pink-700 to-pink-950",
      textColor: "text-white"
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Metro Realty",
      position: "Director",
      testimonial: "From brochure design to digital ads, everything was top-notch. Our project visibility increased tremendously, and we achieved our sales targets 3 months early.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      
      bgColor: "from-orange-700 to-orange-950",
      textColor: "text-white"
    },
    {
      id: 6,
      name: "Kavya Reddy",
      company: "Skyline Developers",
      position: "Founder",
      testimonial: "The team's creativity and attention to detail is remarkable. They understood our vision perfectly and created marketing materials that exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      
      bgColor: "from-teal-700 to-teal-900",
      textColor: "text-white"
    }
  ];

  return (
    <section ref={sectionRef} id='testimonials' className="testimonials-section bg-gray-50">
      <div className="spacer">
        {/* Section Header */}
        <div ref={headerRef} className="text-start px-4 sm:px-8 flex flex-col justify-start">
          <span className="text-orange-500 text-lg sm:text-xl font-bold oswald-regular">*SPOILER: THEY LOVE IT!</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl max-w-2xl font-bold teritiary-color patua-one-regular mt-2 leading-tight">
            Here's Is What <span className="text-orange-500">Clients</span> Say's About Our Work
          </h2>
          {/* <p className="text-gray-600 text-lg mt-4 max-w-2xl ">
            Don't just take our word for it. Here's what real estate developers say about our marketing services.
          </p> */}
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative h-full">
          <div className="flex overflow-x-auto scrollbar-hide px-4 sm:px-8 gap-4 sm:gap-6 py-6 sm:py-8 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={el => {
                  if (el) {
                    cardsRef.current[index] = el;
                  }
                }}
                className={`flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <span>
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-3 sm:mb-4" />
                </span>
               
                {/* Testimonial Text */}
                <blockquote className={`${testimonial.textColor} text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic`}>
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <h4 className={`${testimonial.textColor} font-semibold oswald-regular text-sm sm:text-base`}>
                      {testimonial.name}
                    </h4>
                    <p className={`${testimonial.textColor} opacity-90 text-xs sm:text-sm`}>
                      {testimonial.position}
                    </p>
                    <p className={`${testimonial.textColor} opacity-75 text-xs sm:text-sm font-medium`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
              <span>←</span> Scroll to see more testimonials <span>→</span>
            </p>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Testimonials
