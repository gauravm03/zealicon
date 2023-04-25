import React from 'react'

const Home = () => {
  return (
    <div className=''>
        <div className='w-10/12 mb-12 flex flex-col gap-6 mx-auto pt-10 md:my-2'>
          <div class="text-yellow-400 text-3xl font-bold">Entry Pass</div>
          <div className='text-white flex flex-col justify-center gap-5 items-center mx-auto'>
              <h3 className='text-3xl'>Naincy Tiwari</h3>
              <div class="text-white text-2xl  ">Zeal-ID-3482</div>
          </div>
        </div>
        <div className='w-10/12 mb-12 flex flex-col gap-[4.5rem] mx-auto  pt-10 md:my-2'>
          <div class="text-yellow-400 text-3xl font-bold">ID Card</div>
          <div className='text-white flex flex-col justify-center gap-5 items-center mx-auto'>
             
              <img className='border-2' src='Testimonial/src/components/photo.jpg' alt='hwy'/>
          </div>
        </div>
    </div>
  )
}

export default Home


// <div class="flex w-full justify-center mt-4 mb-12 md:justify-end md:my-2"><button class="text-white bg-landingPink rounded-md px-[2.5rem] py-2.5">Logout</button></div>