import React from 'react';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center text-white md:h-28 h-20 bg-custom-gradient-2 md:text-5xl text-3xl font-semibold font-poppins">
      { title }
    </div>
  )
}

export default Heading
