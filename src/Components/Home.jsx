import React, { useEffect } from 'react'
import image from '../assets/Asset 3.svg'
import WhyUsBox from './WhyUsBox'
import { ArrowUpRight} from 'lucide-react'
import SocialStrategyCard from './ServicesCard'
import CalendySection from './CalendySection'
import Testimonials from './Testimonials'
const Home = () => {
  

  return (
    <main className='  w-full   min-h-screen'>
      <section className='flex primary-bg  px-8 pt-4 md:pt-12  items-center justify-center'>
      <div className='hero-headlines  md:pl-16 text-white w-full md:w-[50%] oswald-regular text-4xl md:text-[12vw] leading-[1] font-bold mb-8 flex flex-col items-start  text-start'>
        <span>We <span className='secondary-color'>Build</span></span>
        <span>Brands</span>
        <span>That <span className='secondary-color'>Sells</span></span>
      </div>
      <div className='image w-full hidden md:flex md:w-[50%]  items-center justify-center'>
        <img src={image} alt="Hero" className='w-full h-full' />
      </div>

      
      </section>

      <div className='content primary-bg  flex-col md:flex-row w-full  py-4  px-8 md:px-16 flex items-center justify-between'>
        <div className='md:w-[30%] w-full md:pl-16'>
          <button className='group bg-white rounded-full px-8 py-4 flex items-center gap-4 hover:primary-bg hover:text-white text-2xl primary-color'>
            Get Started
            <span className='inline-block ml-2 primary-bg secondary-color p-4 rounded-full group-hover:secondary-bg group-hover:primary-color'>
              <ArrowUpRight className='h-5 w-5' />
            </span>
          </button>
        </div>
        <div className=' md:pr-32 md:max-w-4xl w-full text-white'>
          <span className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates distinctio laudantium officia magnam velit rerum quas illum delectus nihil enim unde veniam, placeat totam iste repellat impedit vel perspiciatis.
          </span>
        </div>
      </div>

      <section className="whyus primary-bg  spacer">
        <div className='flex  justify-between w-full  flex-col md:flex-row px-8 md:px-16 py-8'>
          <div className=' md:w-[50%] flex-col '>
            <span className="text-orange-500 text-xl font-semibold">
            *We Do..
          </span>
          <span className='text-6xl font-bold w-full flex flex-col text-white patua-one-regular'>
            <span ><span className='secondary-color'>Marketing</span> That Moves</span>
            <span className=''>Real Estate <span className='secondary-color'> Forward </span></span>
               
            </span>
            </div>
          <div className='text-white md:w-[50%] text-start md:pl-32  flex  flex-col justify-end'>
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

      <section className='tertiary-bg spacer w-full  flex items-center justify-center'>
        
          <div className=' spacer  flex flex-col items-center justify-center text-white text-4xl md:text-9xl font-bold patua-one-regular '>
            <span>Be Bold.</span>
            <span className='custom-violet'>Be Visible.</span>
            <span>Be Sold.</span>
            <span>With <span className='secondary-color oswald-regular'>28-Media</span></span>
            <button className=' bg-white mt-8 rounded-full px-8 py-4 flex items-center gap-4 teritiary-color  text-2xl'>
            Start Now
            <span className='inline-block ml-2 tertiary-bg text-white  p-4 rounded-full '>
              <ArrowUpRight className='h-5 w-5' />
            </span>
          </button>
          </div>
        

      </section>

      <section className='testimonials'>
<Testimonials/>
      </section>


      <section className='tertiary-bg  rounded-t-3xl rounded-b-3xl w-full  flex items-center justify-center '>
        
        <div className="text-center spacer flex w-full  items-center justify-center ">
          
            <div className='flex flex-col items-center md:w-[70%] justify-center '>
              <span className='text-white text-4xl md:text-7xl max-w-4xl text-start font-bold patua-one-regular mb-4'>
              READY TO TURN YOUR LAUNCH
INTO A SOLD-OUT SUCCESS STORY?
</span>
            </div>
            <div className='md:w-[30%] bg-orange-500  hover:bg-orange-600 flex items-center justify-center p-16 py-16 rounded-4xl transition-colors'>
           
             <ArrowUpRight className='h-32 w-32 teritiary-color' />
            
            </div>
          
        </div>
      </section>


    </main>
  )
}

export default Home
