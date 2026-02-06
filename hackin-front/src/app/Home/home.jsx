
'use client'; 

import React, { useState , useEffect} from 'react';
import Image from 'next/image';

/**
 * Gaza Reconstruction Platform
 * 
 * A complete React component for the Rebuild & Learn platform.
 * Includes header, hero, stats, projects grid, training section, and footer.
 * 
 * Features:
 * - Dark mode toggle
 * - Responsive design
 * - Material Symbols icons
 * - Tailwind CSS styling
 */
const GazaReconstructionPlatform = () => {

    const [projects, setProjects ] = useState(null);
  
    useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get('');
        console.log("projects response:", response.data);
        
        setProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch Projects data:", err);
        setError("Failed to load Projects. Please try again.");
      } finally {
        setLoading(false);
      }
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
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
              Our Mission
            </a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
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
              <button className="bg-[#00695C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center ">
                View Active Projects 
                
              </button>
              
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                contact us
              </button>
            </div>
          </div>
        </section>

        {/* Our mission */}

        <section className='flex flex-col mx-35 my-12 gap-12  justify-center '>
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
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-10">
            
              <h2 className="text-black text-3xl md:text-5xl font-black leading-tight tracking-tight  tracking-tight">
                Active Reconstruction Projects
              </h2>
              
            
            
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#f3ebe7] flex flex-col"
          >
            <div className="relative h-56">
              <img
                src={project.imageUrl}
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
        <section className="bg-[#ee6c2b]/10 dark:bg-primary/5 py-20 px-6">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Empowering Professionals,<br/>Building Futures.
              </h2>
              
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Our platform doesn't just fund buildings; we train the hands that build them. 
                By joining our vocational programs, local residents gain certifications in 
                sustainable engineering, masonry, and modern construction management.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary bg-white dark:bg-[#3d2b21] p-2 rounded-lg">
                    school
                  </span>
                  <div>
                    <h4 className="font-bold">Certified Training</h4>
                    <p className="text-sm text-gray-500">
                      Industry-standard certifications for all graduates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary bg-white dark:bg-[#3d2b21] p-2 rounded-lg">
                    payments
                  </span>
                  <div>
                    <h4 className="font-bold">Paid Apprenticeships</h4>
                    <p className="text-sm text-gray-500">
                      Earn while you learn on real reconstruction sites.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="mt-10 bg-[#1b120d] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">
                Become a Trainer
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              <img 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto" 
                alt="A teacher showing a student how to use engineering tools on a blueprint" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2pWDVpDIOYIWplVCmYyDYm19hYtXCznu1UHI3s3V9AkQlsLHk4YthJxLccO0guH71rE05R-WsmAucQ7b1ma0AuSq5X_LRrBSJO0rWgAcDFhnVA3dtmD9hOCha69HnndraG-PBDrVZ7CfeOciYokSWwAbB98s0G7RCkeww2vkfvffbdIHhrLcMYGxnJVx5ytkiv1z7-oCNJl8aJWKT10VwR4nJ3bnqap5mdopEAgxx8wTIviTDvDbJSTaaMt1uT_2X3LpTykmsVA"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-[#f3ebe7] dark:border-[#3d2b21] py-12 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">architecture</span>
              <span className="text-xl font-black">Rebuild &amp; Learn</span>
            </div>
            <p className="text-sm text-gray-500 text-center md:text-left">
              Humanitarian infrastructure and skill-sharing for Gaza.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-semibold">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contact Us
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Newsletter
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              className="size-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a 
              className="size-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
              href="#"
            >
              <span className="material-symbols-outlined text-xl">volunteer_activism</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#f3ebe7] dark:border-[#3d2b21] text-center text-xs text-gray-400">
          © 2024 Rebuild &amp; Learn. A community-led humanitarian initiative.
        </div>
      </footer>
    </div>
  );
};

export default GazaReconstructionPlatform;