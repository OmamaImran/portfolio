import { projects } from "@/contants/common";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsContent = () => {
    return (
        <>
            {/* Search and filter bar */}
            {/* <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Find a project..."
                        className="bg-[#0d1117] border border-[#30363d] rounded-md py-1 px-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="flex space-x-2">
                    <div className="relative">
                        <button className="flex items-center text-xs bg-[#21262d] border border-[#363b42] rounded-md py-1 px-3 hover:border-gray-500">
                            <span>Type</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <button className="flex items-center text-xs bg-[#21262d] border border-[#363b42] rounded-md py-1 px-3 hover:border-gray-500">
                            <span>Language</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <button className="flex items-center text-xs bg-[#21262d] border border-[#363b42] rounded-md py-1 px-3 hover:border-gray-500">
                            <span>Sort</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <button className="flex items-center text-xs bg-[#238636] hover:bg-[#2ea043] text-white rounded-md py-1 px-3">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>New</span>
                    </button>
                </div>
            </div> */}

            {/* Pinned repositories */}
            {/* <h2 className="text-lg font-semibold mb-4">Pinned</h2> */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {projects.map((project) => (
                        <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d] hover:border-[#58a6ff] transition">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-md font-semibold text-[#58a6ff]">{project.name}</h3>
                                <button className="text-xs bg-[#21262d] border border-[#363b42] rounded-md py-0.5 px-2 hover:bg-[#30363d]">
                                    <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                    <span>{project.type}</span>
                                </button>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                            <div className="flex flex-col text-xs text-gray-400">
                                {project.language && (
                                    <>
                                        {/* <span className={`w-3 h-3 rounded-full mr-1 ${project.languageColor}`}></span> */}
                                        <span className="mr-4">{project.language}</span>
                                    </>
                                )}
                                {/* {project.stars > 0 && (
                                    <>
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                        <span className="mr-4">{project.stars}</span>
                                    </>
                                )}
                                {project.forks > 0 && (
                                    <>
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                        <span>{project.forks}</span>
                                    </>
                                )} */}
                            </div>
                            <Link key={project.slug} href={`repos/${project.slug}`} className="mt-3">
                                <div className="cursor-pointer flex gap-1 mt-3 bg-[#58a6ff]/30 text-white text-xs w-fit px-2 py-2 rounded-l-full rounded-r-full">
                                   <span> <ArrowUpRight size={15}/></span> <p>View</p>
                                </div>
                            </Link>
                        </div>
                ))}
            </div>
        </>
    )
}

export default React.memo(ProjectsContent, () => true);