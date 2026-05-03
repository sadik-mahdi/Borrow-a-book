import React from 'react';
import Marquee from 'react-fast-marquee';

const NewBooks = () => {
  return (
    <div className='flex justify-between items-center w-full mx-auto '>
      <Marquee pauseOnHover={true} gradient={false} className='bg-black text-white py-2 >'>
         New Arrivals: [Book Name] | Special Discount on Memberships...
      </Marquee>
    </div>
  );
};

export default NewBooks;