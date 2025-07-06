import React, { useRef, useEffect } from 'react'
import {Boxes , ArrowUpRight, ArrowRight} from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const WhyUsBox = () => {
    const whyUsData = [
        {
            title: "Specialized in Real Estate",
            description: "Deep understanding of the property market, buyers, and developer needs."
        },
        {
            title: "Data-Driven Campaigns",
            description: "Every decision backed by insights — not guesswork."
        },
        {
            title: "High-Converting Creative Assets",
            description: "Creatives designed to generate leads and sales, not just likes."
        },
        {
            title: "Fast Turnaround, Always On-Time",
            description: "We respect launch timelines and help you hit sales goals quickly."
        },

        {
            title: "One-Stop Creative Partner",
            description: "From brochures and branding to social ads and site visits — we handle it all."
        }
    ]

    const boxRefs = useRef([])

    useGSAP(() => {
        // Filter out null/undefined refs and ensure we have valid elements
        const validBoxes = boxRefs.current.filter(box => box !== null && box !== undefined)
        
        validBoxes.forEach((box, index) => {
            if (box) {
                const arrowRight = box.querySelector('.arrow-right')
                const arrowUpRight = box.querySelector('.arrow-up-right')
                const boxElement = box.querySelector('.main-box-inner')
                const boxIcon = box.querySelector('.box-icon')
                const boxTitle = box.querySelector('.box-title')
                const boxDescription = box.querySelector('.box-description')
                const arrowBox = box.querySelector('.arrow-box')
                
                // Store timelines for proper cleanup
                let hoverTimeline = null
                let leaveTimeline = null
                
                // Initially hide ArrowUpRight and set initial styles
                gsap.set(arrowUpRight, { opacity: 0, scale: 0, rotation: 0 })
                gsap.set(arrowRight, { opacity: 1, scale: 1, rotation: 0 })
                
                const handleMouseEnter = () => {
                    // Kill any existing animations
                    if (leaveTimeline) leaveTimeline.kill()
                    if (hoverTimeline) hoverTimeline.kill()
                    
                    // Create new timeline for hover
                    hoverTimeline = gsap.timeline()
                    
                    // Change background and colors using actual hex values
                    hoverTimeline.to(boxElement, { backgroundColor: '#a10140', duration: 0.4 }, 0) // primary-bg
                    hoverTimeline.to(boxIcon, { color: '#ffc5c4', duration: 0.3 }, 0) // secondary-color
                    hoverTimeline.to(boxTitle, { color: '#ffc5c4', duration: 0.3 }, 0) // secondary-color
                    hoverTimeline.to(boxDescription, { color: '#ffc5c4', duration: 0.3 }, 0) // secondary-color
                    hoverTimeline.to(arrowBox, { backgroundColor: '#ffc5c4', duration: 0.3 }, 0) // secondary-color bg
                    hoverTimeline.to([arrowRight, arrowUpRight], { color: '#a10140', duration: 0.3 }, 0) // primary-color for arrows
                    
                    // Arrow transition - hide right first, then show up-right
                    hoverTimeline.to(arrowRight, { 
                        opacity: 0, 
                        scale: 0, 
                        rotation: -45, 
                        duration: 0.2,
                        ease: "power2.inOut"
                    }, 0)
                    hoverTimeline.to(arrowUpRight, { 
                        opacity: 1, 
                        scale: 1, 
                        rotation: 0, 
                        duration: 0.3, 
                        ease: "back.out(1.7)"
                    }, 0.1)
                }
                
                const handleMouseLeave = () => {
                    // Kill any existing animations
                    if (hoverTimeline) hoverTimeline.kill()
                    if (leaveTimeline) leaveTimeline.kill()
                    
                    // Create new timeline for leave
                    leaveTimeline = gsap.timeline()
                    
                    // Revert background and colors using actual hex values
                    leaveTimeline.to(boxElement, { backgroundColor: '#ffc5c4', duration: 0.3 }, 0) // secondary-bg
                    leaveTimeline.to(boxIcon, { color: '#a10140', duration: 0.3 }, 0) // primary-color
                    leaveTimeline.to(boxTitle, { color: '#a10140', duration: 0.3 }, 0) // primary-color
                    leaveTimeline.to(boxDescription, { color: '#a10140', duration: 0.3 }, 0) // primary-color
                    leaveTimeline.to(arrowBox, { backgroundColor: '#a10140', duration: 0.3 }, 0) // primary-bg
                    leaveTimeline.to([arrowRight, arrowUpRight], { color: '#ffc5c4', duration: 0.3 }, 0) // secondary-color for arrows
                    
                    // Arrow transition - hide up-right first, then show right
                    leaveTimeline.to(arrowUpRight, { 
                        opacity: 0, 
                        scale: 0, 
                        rotation: 45, 
                        duration: 0.2,
                        ease: "power2.inOut"
                    }, 0)
                    leaveTimeline.to(arrowRight, { 
                        opacity: 1, 
                        scale: 1, 
                        rotation: 0, 
                        duration: 0.3, 
                        ease: "back.out(1.7)"
                    }, 0.1)
                }
                
                box.addEventListener('mouseenter', handleMouseEnter)
                box.addEventListener('mouseleave', handleMouseLeave)
                
                // Cleanup function
                return () => {
                    if (box) {
                        box.removeEventListener('mouseenter', handleMouseEnter)
                        box.removeEventListener('mouseleave', handleMouseLeave)
                        // Kill any running timelines
                        if (hoverTimeline) hoverTimeline.kill()
                        if (leaveTimeline) leaveTimeline.kill()
                    }
                }
            }
        })
    }, [whyUsData.length]) // Add dependency to re-run when data length changes

  return (
    <div className='flex flex-col justify-between gap-4 pt-8 w-full'>
      {whyUsData.map((item, index) => (
        <div 
          key={index} 
          ref={el => {
            if (el) {
              boxRefs.current[index] = el
            }
          }}
          className='cursor-pointer'
        >
          <div className='main-box-inner w-full flex justify-between secondary-bg p-8 rounded-4xl'>
            <div className='flex w-[40%] items-center justify-start gap-6'>
              <Boxes className='box-icon text-2xl h-8 w-8 primary-color' />
              <h3 className='box-title text-white text-4xl font-bold patua-one-regular primary-color'>{item.title}</h3>
            </div>

            <div className='flex items-center w-[60%] justify-between'>
              <p className='box-description text-white primary-color'>{item.description}</p>
              <div className='arrow-box primary-bg p-8 rounded-full flex items-center justify-center relative'>
                <ArrowRight className='arrow-right h-8 w-8 absolute secondary-color' />
                <ArrowUpRight className='arrow-up-right h-8 w-8 absolute secondary-color' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WhyUsBox
