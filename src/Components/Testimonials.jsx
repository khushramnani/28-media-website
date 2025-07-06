import React from 'react'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
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
    <section className="testimonials-section bg-gray-50 ">
      <div className="spacer  ">
        {/* Section Header */}
        <div className="text-start px-8 flex flex-col justify-start">
          <span className="text-orange-500 text-xl font-bold oswald-regular ">*SPOILER: THEY LOVE IT!</span>
          <h2 className="text-4xl md:text-5xl max-w-2xl font-bold teritiary-color patua-one-regular mt-2">
            Here's Is What <span className="text-orange-500">Clients</span> Say's About Our Work
          </h2>
          {/* <p className="text-gray-600 text-lg mt-4 max-w-2xl ">
            Don't just take our word for it. Here's what real estate developers say about our marketing services.
          </p> */}
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative h-full  ">
          <div className="flex overflow-x-auto scrollbar-hide px-8 gap-6  py-8 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 w-[30vw] bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <span>
                    <Quote className="w-6 h-6 text-white mb-4" />
                </span>
               
                {/* Testimonial Text */}
                <blockquote className={`${testimonial.textColor} text-lg leading-relaxed mb-6 italic`}>
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <h4 className={`${testimonial.textColor} font-semibold oswald-regular`}>
                      {testimonial.name}
                    </h4>
                    <p className={`${testimonial.textColor} opacity-90 text-sm`}>
                      {testimonial.position}
                    </p>
                    <p className={`${testimonial.textColor} opacity-75 text-sm font-medium`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span>←</span> Scroll to see more testimonials <span>→</span>
            </p>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Testimonials
