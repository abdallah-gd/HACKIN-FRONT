'use client';

import React, { useState } from 'react';

const StudentProgress = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  const students = [
    {
      id: 1,
      initials: 'SM',
      name: 'Sara Mansour',
      email: 'sara.m@example.com',
      course: 'Solar Grid Maintenance',
      progress: 85,
      lastActive: 'Oct 24, 2023',
      bgColor: 'bg-[#cee8e8]',
      textColor: 'text-teal-deep'
    },
    {
      id: 2,
      initials: 'OA',
      name: 'Omar Al-Sayed',
      email: 'omar.a@example.com',
      course: 'Advanced Carpentry',
      progress: 42,
      lastActive: 'Oct 25, 2023',
      bgColor: 'bg-[#fde8e4]',
      textColor: 'text-terracotta'
    },
    {
      id: 3,
      initials: 'LZ',
      name: 'Leila Ziad',
      email: 'leila.z@example.com',
      course: 'Reconstruction Masonry',
      progress: 12,
      lastActive: 'Oct 21, 2023',
      bgColor: 'bg-[#fef3c7]',
      textColor: 'text-amber-warm'
    },
    {
      id: 4,
      initials: 'HK',
      name: 'Hassan Khalil',
      email: 'hassan.k@example.com',
      course: 'Solar Grid Maintenance',
      progress: 100,
      lastActive: 'Oct 25, 2023',
      bgColor: 'bg-primary/30',
      textColor: 'text-teal-deep'
    }
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

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors" href="/TrainerCourses">
              
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
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#0d1c1c]">Student Progress</h2>
            
          </div>
          
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-xl shadow-sm border border-[#e5eeee] dark:border-[#2a4a4a] border-l-4 border-l-terracotta">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#499c9c] dark:text-[#a0cccc]">Total Students</span>
              <span className="material-symbols-outlined text-terracotta">groups</span>
            </div>
            <div className="text-3xl font-black text-[#0d1c1c] dark:text-white">142</div>
            <div className="mt-2 text-xs text-green-600 flex items-center gap-1 font-semibold">
               +12% this month
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-xl shadow-sm border border-[#e5eeee] dark:border-[#2a4a4a] border-l-4 border-l-terracotta">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#499c9c] dark:text-[#a0cccc]">Course Completion Rate</span>
              <span className="material-symbols-outlined text-terracotta">verified</span>
            </div>
            <div className="text-3xl font-black text-[#0d1c1c] dark:text-white">78.5%</div>
            <div className="mt-2 text-xs text-[#499c9c] dark:text-[#a0cccc]">Global average: 62%</div>
          </div>

          <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-xl shadow-sm border border-[#e5eeee] dark:border-[#2a4a4a] border-l-4 border-l-terracotta">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#499c9c] dark:text-[#a0cccc]">Active Learners</span>
              <span className="material-symbols-outlined text-terracotta">bolt</span>
            </div>
            <div className="text-3xl font-black text-[#0d1c1c] dark:text-white">94</div>
            <div className="mt-2 text-xs text-amber-500 font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">history</span> Active in last 24h
            </div>
          </div>
        </section>

        {/* Students Table */}
        <div className="bg-white dark:bg-[#1a2e2e] rounded-xl shadow-sm border border-[#e5eeee] dark:border-[#2a4a4a] overflow-hidden">
          {/* Table Header with Search and Filters */}
          <div className="p-6 border-b border-[#e5eeee] dark:border-[#2a4a4a] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              
              <input
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#cee8e8] dark:border-[#2a4a4a] bg-[#f8fcfc] dark:bg-[#102222] focus:ring-primary focus:border-primary text-sm"
                placeholder="Search by name or course..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="rounded-lg border border-[#cee8e8] dark:border-[#2a4a4a] bg-[#f8fcfc] dark:bg-[#102222] text-sm py-2 px-3 focus:ring-primary"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option>All Courses</option>
                <option>Carpentry 101</option>
                <option>Solar Engineering</option>
                <option>Masonry for Reconstruction</option>
              </select>
              <button className="px-4 py-2 border border-[#cee8e8] dark:border-[#2a4a4a] rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-teal-deep/20 transition-all flex items-center gap-2">
                 Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#f8fcfc] dark:bg-[#142828] border-b border-[#e5eeee] dark:border-[#2a4a4a]">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#499c9c]">Student Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#499c9c]">Enrolled Course</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#499c9c]">Progress</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#499c9c]">Last Active</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#499c9c] text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5eeee] dark:divide-[#2a4a4a]">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-[#f8fcfc] dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`size-9 rounded-full ${student.bgColor} flex items-center justify-center font-bold ${student.textColor} text-xs`}>
                          {student.initials}
                        </div>
                        <div>
                          <p className="text-sm font-bold">{student.name}</p>
                          <p className="text-[11px] text-[#499c9c]">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">{student.course}</td>
                    <td className="px-6 py-4">
                      <div className="w-full max-w-[160px]">
                        <div className="flex justify-between mb-1">
                          <span className="text-[11px] font-bold">{student.progress}%</span>
                        </div>
                        <div className="w-full bg-[#e5eeee] dark:bg-[#2a4a4a] rounded-full h-1.5">
                          <div
                            className={`${student.progress === 100 ? 'bg-green-500' : 'bg-teal-deep dark:bg-primary'} h-1.5 rounded-full`}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#499c9c] dark:text-[#a0cccc]">{student.lastActive}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-4 py-1.5 bg-primary/10 text-teal-deep dark:text-primary rounded text-xs font-bold hover:bg-primary/20 transition-all flex items-center gap-1 ml-auto">
                        <span className="material-symbols-outlined text-[16px]">mail</span> Message
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-[#e5eeee] dark:border-[#2a4a4a] flex items-center justify-between">
            <p className="text-xs text-[#499c9c] dark:text-[#a0cccc]">Showing 4 of 142 students</p>
            <div className="flex gap-2">
              <button className="size-8 flex items-center justify-center border border-[#cee8e8] dark:border-[#2a4a4a] rounded hover:bg-gray-50 dark:hover:bg-teal-deep/20 transition-all">
                
              </button>
              <button className="size-8 flex items-center justify-center bg-teal-deep text-white rounded text-xs font-bold">1</button>
              <button className="size-8 flex items-center justify-center border border-[#cee8e8] dark:border-[#2a4a4a] rounded text-xs hover:bg-gray-50 dark:hover:bg-teal-deep/20">2</button>
              <button className="size-8 flex items-center justify-center border border-[#cee8e8] dark:border-[#2a4a4a] rounded text-xs hover:bg-gray-50 dark:hover:bg-teal-deep/20">3</button>
              <button className="size-8 flex items-center justify-center border border-[#cee8e8] dark:border-[#2a4a4a] rounded hover:bg-gray-50 dark:hover:bg-teal-deep/20 transition-all">
                
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProgress;