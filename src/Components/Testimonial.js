import React, { useState } from 'react'
import Card from './Card';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex]= useState(0);

    function leftShiftHandler () {
        if(index - 1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler () {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }


  return (
    <div className='w-[75vw] h-[75vh] md:w-[650px] bg-white flex flex-col justify-center items-center mt-8 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card reviews = {reviews[index]} />

        <div className='flex text-3xl mt-4 gap-3 text-violet-400 font-bold text-center'>
            <button
            onClick={leftShiftHandler} 
            className='cursor-pointer hover:text-violet-500'>
                <MdOutlineKeyboardArrowLeft/>
            </button>
            <button 
             onClick={rightShiftHandler} 
            className='cursor-pointer hover:text-violet-500'>
                <MdOutlineKeyboardArrowRight/>
            </button>
        </div>

        <div className='mt-5'>
            <button 
            onClick={surpriseHandler} 
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonial
