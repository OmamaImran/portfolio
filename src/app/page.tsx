// pages/index.tsx
'use client'
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Tabs from '@/components/Tabs';
import { useTabStore } from '@/store/tabStore';
import ProjectsContent from '@/components/ProjectsContent';
import ExperienceContent from '@/components/ExperienceContent';
import EducationContent from '@/components/EducationContent';
import ReadMeIntro from '@/components/ReadMeIntro';
import Skills from '@/components/Skills';

export default function Home() {
  const activeTab = useTabStore(state => state.activeTab);
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <Navbar/>

      {/* Main content */}
      <main className="max-w-5xl mx-auto py-6 px-4 md:px-8">
        {/* Profile section */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          
          {/* side profile bio section */}
          <Profile/>
          
          <div className="md:w-3/4">
            <ReadMeIntro/>
            {/* Navigation tabs */}
            <Tabs/>
            
            {activeTab === "projects" ? (
              <ProjectsContent/>
            ) : activeTab === "experience" ? (
              <ExperienceContent/>
            ) : <EducationContent/>
            }

            <Skills/>
            
            {/* Recent activity */}
            <div className="border border-[#30363d] rounded-md">
              <div className="bg-[#161b22] border-b border-[#30363d] p-4">
                <h3 className="font-semibold">Recent activity</h3>
              </div>
              <div className="p-4 text-center text-gray-400 text-sm">
                <p>When you take actions across GitHub, we&apos;ll provide those activities here.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}