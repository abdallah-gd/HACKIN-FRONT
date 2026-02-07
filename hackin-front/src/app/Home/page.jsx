
'use client'; 

import React, { useState , useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios'

const GazaReconstructionPlatform = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
        const response = await axios.get('http://127.0.0.1:8000');
        setProjects(response.data.projects); 
    };

    fetchProjects();
  }, []);


  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden ">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 z-50 w-full 
    
   
  
  px-6 md:px-20 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
              Home
            </a>
            <a   className="text-sm font-semibold hover:text-primary transition-colors" href="#mission">
              Our Mission
            </a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#trainer">
              Become a Trainer
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg border border-[#e7d7cf]  px-4 py-2 text-sm font-bold hover:bg-gray-50 hover:text-black  transition-all">
              Log in 
            </button>
            
            
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] w-full pt-24 flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0  z-10"></div>
            <Image 
              fill className=" object-cover" 
              alt="Group of gazanian people seeking for water " 
              src="/Frame 7.png"
            />
          </div>
          
          <div className="relative z-20 max-w-3xl flex flex-col items-center gap-6">
            <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
              <span className='bg-gradient-to-r from-[#00695C] to-white bg-clip-text text-transparent' >Don't</span> Just Rebuild a Building. 
         Rebuild a <span className='bg-gradient-to-r from-white to-[#00695C] bg-clip-text text-transparent' > Generation </span>
            </h1>
            
            
            
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="#projects"><button className="bg-[#00695C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center ">
                View Active Projects 
                
              </button>
              </a>
              <a href="#contact">
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                contact us
              </button>
              </a>
            </div>
          </div>
        </section>

        {/* Our mission */}

        <section id='mission' className='flex flex-col mx-35 my-12 gap-12  justify-center '>
            <div>
                <h1 className='text-black text-3xl md:text-5xl font-black leading-tight tracking-tight' > Our Mission </h1>
            </div>

            <div>
                <p  className='text-black text-lg md:text-lg font-black leading-tight tracking-tight'>We turn reconstruction sites into open-air classrooms. Join the platform that connects donors, 
            experts, and local volunteers to restore Gaza’s infrastructure while training its future workforce.</p>
            </div>

            <div className='flex flex-row gap-14 justify-center'>
                <Image width={770} height={445} src={'/image3.png'}  />
                <Image width={770} height={445} src={'/image4.png'}  />

            </div>
        </section>
        
        {/* Projects Grid */}
        <section id='projects' className="w-full mx-auto px-6 py-20 px-42 bg-gradient-to-b from-[#F9FAFB] to-green-100">
          <div className="flex justify-between items-end mb-10">
            
              <h2 className="text-black text-3xl md:text-5xl font-black leading-tight tracking-tight  ">
                Active Reconstruction Projects
              </h2>
              
            
            
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#f3ebe7] flex flex-col"
          >
            <div className="relative h-56">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1 text-black">
                  {project.name}
                </h3>
                <div className="text-sm text-gray-500">
                  Location: <span className="text-black">{project.location}</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <a href="/Form"></a>
                <button className="w-full bg-[#00695C] text-white py-3 rounded-xl font-bold border-2 border-[#00695C] hover:bg-white hover:text-[#00695C] transition-all">
                  Volunteer
                </button>

                <button className="w-full bg-white text-[#00695C] py-3 rounded-xl font-bold border-2 border-[#00695C] hover:bg-[#00695C] hover:text-white transition-all">
                  Donate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>

        {/* Skill Training Section */}
        <section id='trainer' className="bg-gradient-to-b from-green-100 to-[#F9FAFB] py-20 px-6">
          <div className="w-full px-46 grid  grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className='flex flex-col gap-12'>
              <h2 className="text-black text-2xl md:text-4xl font-black leading-tight   tracking-tight">
                Empowering Professionals,<br/>Building Futures.
              </h2>
              
              <p className="md:text-lg text-[12px] mb-8 text-black ">
                Our platform doesn't just fund buildings; we train the hands that build them. 
                By joining our vocational programs, local residents gain certifications in 
                sustainable engineering, masonry, and modern construction management.
              </p>
              
              
              <a href="/TrainerApplication">
              <button className="w-full bg-[#00695C] text-white py-3 rounded-xl font-bold border-2 border-[#00695C] hover:bg-white hover:text-[#00695C] transition-all">
                Become a Trainer
              </button>
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              <img 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto" 
                alt="A teacher showing a student how to use engineering tools on a blueprint" 
                src="/image9.Png"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white  border-t border-[#f3ebe7]  py-12 px-6">
        <div className="w-full px-26 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            
            <p className="text-sm text-gray-500 text-center md:text-left">
              Humanitarian infrastructure and skill-sharing for Gaza.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-semibold">

            <a className="hover:text-primary text-green-700 transition-colors" id='contact' href="">
              Contact Us
            </a>
            
          </div>
          
          
        </div>
        
        
      </footer>
    </div>
  );
};

export default GazaReconstructionPlatform;