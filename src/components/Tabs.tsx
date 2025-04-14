import { useTabStore } from "@/store/tabStore";
import React from "react";

const Tabs = () => {
     const tabSelected = useTabStore(state => state.activeTab);
      const setTabSelected = useTabStore(state => state.setActiveTab);
    return (
        <nav className="flex border-b border-[#30363d] mb-6">
        <p onClick={()=> setTabSelected('projects')} className={`px-4 py-3 text-sm cursor-pointer text-gray-400 hover:text-gray-300 font-medium ${tabSelected === 'projects' ? 'border-b-2 border-orange-500 text-white' : ''}`}>Projects</p>
        <p  onClick={()=> setTabSelected('experience')} className={`px-4 py-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-gray-300 ${tabSelected === 'experience' ? 'border-b-2 border-orange-500 text-white' : ''}`}>Experience</p>
        <p  onClick={()=> setTabSelected('education')} className={`px-4 py-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-gray-300 ${tabSelected === 'education' ? 'border-b-2 border-orange-500 text-white' : ''}`}>Education</p>
        {/* <a href="#" className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-gray-300">Stars</a> */}
      </nav>
    )
}

export default React.memo(Tabs, () => true);