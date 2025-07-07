
import { InlineWidget } from "react-calendly";
// You'll need to add your founder image to src/assets/ folder
import founderImage from '../assets/founder.jpg'; // Update this path to your actual image

const CalendySection = () => {



    
  return (
    <>
    {/* Founder/About Section */}
    <section id="contact" className="founder-section bg-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="text-orange-500 text-xl font-semibold oswald-regular">*Meet The Founder</span>
              <h2 className="text-4xl md:text-5xl font-bold teritiary-color patua-one-regular leading-tight">
                Ready to <span className="text-orange-500">Transform</span> Your Real Estate Marketing?
              </h2>
            </div>
            
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start py-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 p-1">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <img 
                      src={founderImage} 
                      alt="Saumya - Founder of 28 Media" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  CEO
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-gray-900">Saumya</span> - the founder of 28 Media. With over 5 years of experience in real estate marketing, 
              I've helped developers generate millions in sales through strategic marketing campaigns.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 oswald-regular">500+ Successful Real Estate Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 oswald-regular">₹50+ Crores in Sales Generated</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 oswald-regular">Award-Winning Marketing Strategies</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-orange-500 text-lg font-semibold italic patua-one-regular">
                "Let's discuss how we can skyrocket your project's sales in just 30 minutes."
              </p>
            </div>
          </div>
          
          {/* Right Side - Calendly Widget */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-4 h-[600px]">
              <div className="h-full">
                <InlineWidget 
                  url="https://calendly.com/saumya-28-media/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                  styles={{
                    height: '100%',
                    width: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </>
  )
}

export default CalendySection
