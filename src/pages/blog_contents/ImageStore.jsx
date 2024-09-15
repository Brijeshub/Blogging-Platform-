import React from 'react'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from 'react'

function ImageStore() {
    const Images=[
        {url:"https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title:"name1"},
        {url:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",title:"name2"},
        {url:"https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title:"name3"}
    ]
    const[index,setIndex]=useState(0)
    const slideNext=()=>{
       const isLastSlide = index===Images.length-1
       const newIndex= isLastSlide ? 0 : index+1
       setIndex(newIndex)
    }
    const prevSlide=()=>{
        const isFirstSlide = index===0
        const newIndex = isFirstSlide ? Images.length-1 : index-1 
        setIndex(newIndex)
    }
    const goToSlide=(index)=>{
        setIndex(index)
    }

  return (
    <div>
        <FaChevronLeft 
        onClick={slideNext}
        className='h-16 w-8 absolute top-96 left-5  ' />
   <div 
   className='h-[39rem] bg-center bg-cover bg-no-repeat'
   style={{backgroundImage: `url(${Images[index].url})`}}
   >
   </div>
   <FaChevronRight 
        onClick={prevSlide}
        className='h-16 w-8 absolute top-96 right-5  ' />
     
    </div>
  )
}

export default ImageStore