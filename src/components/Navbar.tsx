import Image from "next/image"
import React from "react"

const Navbar = () => {
    return (
        <header className="bg-[#161b22] border-b border-[#30363d] py-4 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" fill="white" className="fill-current">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search or jump to..." 
                className="bg-[#0d1117] border border-[#30363d] rounded-md py-1 px-3 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs bg-[#30363d] text-gray-400 px-1 rounded">
                /
              </div>
            </div>
            <nav className="hidden md:flex space-x-4 text-sm font-semibold">
              <a href="#" className="hover:text-gray-300">Home</a>
              {/* <a href="#" className="hover:text-gray-300">About</a> */}
              {/* <a href="#" className="hover:text-gray-300">Contact</a> */}
              {/* <a href="#" className="hover:text-gray-300">Explore</a> */}
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-1 hover:bg-[#30363d] rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="flex items-center space-x-1 hover:bg-[#30363d] p-1 px-2 rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Image
              src="/profile-picture.png"
              alt="Omama"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </div>
      </header>
    )
}

export default React.memo(Navbar, () => true)