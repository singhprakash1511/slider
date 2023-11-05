import React from 'react';
import { BiSolidQuoteAltLeft , BiSolidQuoteAltRight } from 'react-icons/bi';


function Card(props) {
    let review =props.reviews; 
  return (
    <div className='flex flex-col md:relative '>
        <div className='absolute top-[-4rem] z-[10] mx-auto'>
            <img 
            className='aspect-square rounded-full w-[120px] h-[120px] z-[35]'
            src={review.image} />
            <div className='w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-[-5px] z-[-20] left-[8px]'></div>
        </div>

        <div className='text-center mt-6'>
            <p className='font-bold tracking-wider text-2xl capitalize'>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>


        <div className='text-violet-400 mx-auto mt-5'>
            <BiSolidQuoteAltLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <BiSolidQuoteAltRight />
        </div>

    </div>
  )
}

export default Card
