import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import image from '../assets/Asset 3.svg'
import WhyUsBox from './WhyUsBox'
import { ArrowUpRight} from 'lucide-react'
import SocialStrategyCard from './ServicesCard'
import CalendySection from './CalendySection'
import Testimonials from './Testimonials'
import { openCalendlyPopup } from '../utils/calendly'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP)

function Home() {
  // Refs for GSAP animations
  const heroRef = useRef(null)
  const heroTextRef = useRef(null)
  const heroImageRef = useRef(null)
  const contentRef = useRef(null)
  const aboutRef = useRef(null)
  const cta1Ref = useRef(null)
  const cta2Ref = useRef(null)
  
  const handleCTAClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  // GSAP Animations
  useGSAP(() => {
    // Hero section animations
    const heroTl = gsap.timeline()
    
    // Hero text animation - animate each span
    heroTl.fromTo(heroTextRef.current.children, 
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    )
    
    // Hero image animation
    heroTl.fromTo(heroImageRef.current, 
      { 
        x: 100, 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        x: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power3.out" 
      }, 
      "-=0.5"
    )

    // Content section animation
    gsap.fromTo(contentRef.current.children, 
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
          trigger: contentRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // About section animation
    gsap.fromTo(aboutRef.current.children, 
      { 
        y: 60, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // CTA Section 1 animation
    gsap.fromTo(cta1Ref.current.children, 
      { 
        scale: 0.8, 
        opacity: 0, 
        y: 50 
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cta1Ref.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // CTA Section 2 animation
    gsap.fromTo(cta2Ref.current.children, 
      { 
        x: -50, 
        opacity: 0 
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cta2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, []);
  

  return (
    <main className='w-full min-h-screen'>
      <section ref={heroRef} className='flex primary-bg flex-col md:flex-row px-4 sm:px-8 pt-8 md:pt-12 items-center justify-center min-h-[70vh] md:min-h-auto'>
      <div ref={heroTextRef} className='hero-headlines md:pl-16 text-white w-full md:w-[50%] oswald-regular text-7xl sm:text-8xl md:text-[12vw] leading-[1] font-bold mb-8 flex flex-col md:items-start md:text-start items-center justify-center'>
        <span>We <span className='secondary-color'>Build</span></span>
        <span>Brands</span>
        <span>That <span className='secondary-color'>Sells</span></span>
      </div>
      <div ref={heroImageRef} className='image w-full md:flex md:w-[50%] items-center justify-center'>
        <img src={image} alt="Hero" className='w-full h-full' />
      </div>

      
      </section>

      <div ref={contentRef} className='content primary-bg flex-col md:flex-row w-full py-6 md:py-4 px-4 sm:px-8 md:px-16 flex items-center justify-between gap-6 md:gap-0'>
        <div className='md:w-[30%] w-full md:pl-16 flex justify-center md:justify-start'>
          <button 
            onClick={handleCTAClick}
            className='group bg-white rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 hover:primary-bg hover:text-white text-lg sm:text-2xl primary-color w-fit'
          >
            Get Started
            <span className='inline-block ml-2 primary-bg secondary-color p-3 sm:p-4 rounded-full group-hover:secondary-bg group-hover:primary-color'>
              <ArrowUpRight className='h-4 w-4 sm:h-5 sm:w-5' />
            </span>
          </button>
        </div>
        <div className='md:pr-32 md:max-w-4xl w-full text-white text-center md:text-left'>
          <span className='text-sm sm:text-base leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates distinctio laudantium officia magnam velit rerum quas illum delectus nihil enim unde veniam, placeat totam iste repellat impedit vel perspiciatis.
          </span>
        </div>
      </div>

      <section id='about' className="whyus primary-bg spacer">
        <div ref={aboutRef} className='flex justify-between w-full flex-col md:flex-row px-4 sm:px-8 md:px-16 py-8 gap-8 md:gap-0'>
          <div className='md:w-[50%] flex-col'>
            <span className="text-orange-500 text-lg sm:text-xl font-semibold">
            *We Do..
          </span>
          <span className='text-4xl sm:text-5xl md:text-6xl font-bold w-full flex flex-col text-white patua-one-regular leading-tight'>
            <span><span className='secondary-color'>Marketing</span> That Moves</span>
            <span className=''>Real Estate <span className='secondary-color'> Forward </span></span>
               
            </span>
            </div>
          <div className='text-white md:w-[50%] text-start md:pl-32 flex flex-col justify-end gap-4'>
            <span>We don’t just market real estate. We engineer demand, design desire, and deliver results.</span>
            <span className=''>From social media and video shoots to brochures, branding, and targeted paid ads — we craft a full-stack marketing experience tailored for developers who demand results.</span>
          </div>
        </div>

        <WhyUsBox/>
      </section>

      <section>
        <SocialStrategyCard />
      </section>

      <CalendySection/>

      <section id='CTA-section-1' className='tertiary-bg spacer w-full flex items-center justify-center px-4 sm:px-8'>

          <div ref={cta1Ref} className='spacer flex flex-col items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold patua-one-regular text-center leading-tight'>
            <span className=''>Be Bold.</span>
            <span className='custom-violet '>Be Visible.</span>
            <span className=''>Be Sold.</span>
            <span className=''>With <span className='secondary-color oswald-regular'>28-Media</span></span>
            <button 
              onClick={handleCTAClick}
              className='bg-white mt-6 sm:mt-8 rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 teritiary-color text-base sm:text-lg md:text-2xl w-fit hover:shadow-lg transition-all duration-300'
            >
            Start Now
            <span className='inline-block ml-2 tertiary-bg text-white p-3 sm:p-4 rounded-full'>
              <ArrowUpRight className='h-4 w-4 sm:h-5 sm:w-5' />
            </span>
          </button>
          </div>
        

      </section>

      <section className='testimonials'>
<Testimonials/>
      </section>


      <section id='CTA-section-2' className='tertiary-bg rounded-t-3xl rounded-b-3xl w-full flex items-center justify-center'>
        
        <div ref={cta2Ref} className="text-center spacer flex w-full items-center justify-center flex-col md:flex-row px-4 sm:px-8 gap-6 md:gap-0">
          
            <div className='flex flex-col items-center md:items-start md:w-[70%] justify-center text-center md:text-left'>
              <span className='text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl max-w-4xl font-bold patua-one-regular mb-4 leading-tight'>
              READY TO TURN YOUR LAUNCH
INTO A SOLD-OUT SUCCESS STORY?
</span>
            </div>
            <div className='w-full md:w-[30%] flex justify-center md:justify-end'>
              <div 
                onClick={handleCTAClick}
                className='bg-orange-500 hover:bg-orange-600 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 rounded-4xl transition-all duration-300 cursor-pointer hover:scale-105 w-fit'
              >
               
               <ArrowUpRight className='h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 teritiary-color' />
              
              </div>
            </div>
          
        </div>
      </section>


    </main>
  )
}

export default Home
