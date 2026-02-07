'use client';

import React, { useState } from 'react';
import CourseCard from './CourseCard';

/**
 * My Created Courses - Rebuild & Learn
 * 
 * A complete React component for the mentor dashboard showing created courses.
 * Includes sidebar navigation, course cards, search, and filters.
 * 
 * Features:
 * - Fixed sidebar navigation
 * - Course grid with status badges
 * - Search and filter functionality
 * - Dark mode support
 * - Material Symbols icons
 * - Tailwind CSS styling
 */
const MyCreatedCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const courses = [
  {
    id: 1,
    title: "Electricity",
    students: 124,
    lessons: 12,
    status: "Published",
    image: "https://www.sirtbhopal.ac.in/blogs/electrical-engineering-is-the-life-line-for-civilization",
    actionText: "View Details",
  },
  {
    id: 2,
    title: "Solar Grid Maintenance",
    students: 0,
    lessons: 8,
    status: "Draft",
    image: null,
    actionText: "Continue Editing",
  },
  {
    id: 3,
    title: "Modern Plumbing Systems",
    students: 86,
    lessons: 15,
    status: "Published",
    image: null,
    actionText: "View Details",
  },
];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-deep bg-green-950 text-white flex flex-col fixed h-full z-10">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <h1>Logo</h1>
          </div>
          
          {/* User Profile */}
          <div className="flex gap-3 mb-8 items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/30" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1b6EVL8wzNGarl3wv01M4_Im3XjbfwoqnDd5l_P0Jwwq3xJnw8xqy_qS1mZI4O8Aj-g27NqhfNGobQUNMtlSpxXVW1wLFGtflDRCAPK4vI2MxPbsI14p9I2TUfwZ3fjKITEgAZ6l32eLYYSa6dF5gjtKi0-xkJaBtGsKmCKcEdFOVCfds5vM5K8TE-76gD8H3WaD-3iyKcEQW0MrCU2loEWNXMMXgxFxyyp3mXcOtfkFEXhNBq9YuOtftaBFeCYKvCBFapkWQEw")' }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-sm font-medium leading-tight">Ahmad Mansour</h1>
              <p className="text-primary text-xs font-normal">Senior Engineering Mentor</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-col gap-1">

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors" href="#">
              
              <p className="text-sm font-medium">My Courses</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors" href="/StudentsProgress">
              
              <p className="text-sm font-medium">Student Progress</p>
            </a>
            
          </nav>
        </div>
        
        {/* Settings Button */}
        <div className="mt-auto p-6 border-t border-white/10">
          <button className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
             
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-black">
              Mentor Created Courses
            </h2>
            
          </div>
           <a href="/CreateCourse"><button className="px-6 py-3 rounded-lg bg-[#00695C] text-white py-3 rounded-xl font-bold border-2 border-[#00695C] hover:bg-white hover:text-[#00695C] transition-all flex items-center gap-2">
            Create New Course
          </button>
          </a>
        </header>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            
            <input 
              className="w-full pl-10 pr-4 py-2 bg-[#00695C]  border border-[#e5eeee]  rounded-lg focus:ring-primary focus:border-primary" 
              placeholder="Search your courses..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="bg-[#00695C]  border border-[#e5eeee]  rounded-lg px-6 py-2 text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
         <CourseCard key={course.id} course={course} />
               ))}

        {/* Create New Card */}
        
        </div>

        {/* Courses Grid */}
              </main>
    </div>
  );
};

export default MyCreatedCourses;