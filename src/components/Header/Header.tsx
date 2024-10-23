
import image from "next/image";
import Link from "next/link";
import React from 'react';




const Header: React.FC = () => {
  return (
    <header className="bg-purple-400 bg-opacity-75 p-6 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
         "" My Creative Studio ""
        </div>
      </div>
      <div className="mt-4 text-lg text-center text-white">
        At My Creative Studio, we bring your visions to life with our expert video editing and graphic designing services. Whether you’re looking to create stunning visuals for your brand, captivating videos for your audience, or unique designs for your personal projects, we’ve got you covered. We are a passionate team of creative professionals dedicated to bringing your visions to life through our expert services in graphic designing, video editing, and photography.
      </div>
      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="text-white text-2xl font-bold">
         "" Graphic Designing ""
        </div>
      </div>
      <div className="mt-4 text-lg text-center text-white">
        We believe that great design is the cornerstone of effective communication. Our talented graphic designers work closely with you to create stunning visuals that capture the essence of your brand. Whether you need eye-catching logos, engaging social media graphics, or professional marketing materials, we have the skills and creativity to make your ideas stand out.
      </div>
      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="text-white text-2xl font-bold">
         "" Video Editing ""
        </div>
      </div>
      <div className="mt-4 text-lg text-center text-white">
        Our video editing team is here to transform your raw footage into captivating stories. We specialize in creating high-quality videos that resonate with your audience. From promotional videos and commercials to event highlights and personal projects, we ensure that every frame is polished to perfection.
      </div>
    </header>
  );
};

export default Header;
