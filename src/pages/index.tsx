import React from 'react';
import Features from '@/components/Organisms/Features';
import Nav from '@/components/Organisms/Nav';
const Index = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center  h-screen'>
      <Nav />
      <section>
        <Features />
      </section>
    </div>
  );
};

export default Index;
