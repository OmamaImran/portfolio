import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="md:w-1/4">
      <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
        <div className="flex flex-col items-center">
          <Image
            src="/profile-picture.png"
            alt="Omama"
            width={160}
            height={160}
            className="rounded-full mb-4"
          />
          <h1 className="text-xl font-bold">Omama Imran</h1>
          <p className="text-gray-400 text-sm mb-4">Full-Stack Developer | Frontend Specialist | React, Next.js, React Native, NestJS | Building scalable & high-performance apps.</p>

          <a
            href="/Omama-Imran-CV.pdf"
            download
            className="block w-full bg-[#21262d] border border-[#363b42] rounded-md py-1 px-4 text-sm mb-4 text-center hover:border-gray-500"
          >
            Download CV
          </a>

          <div className="text-sm text-gray-400 w-full space-y-2">
            <div className="flex items-center">
              <MapPin size={15} className="mr-2" />
              <span>Karachi, Pakistan</span>
            </div>
            <div className="flex items-center">
              <Mail size={15} className="mr-2" />
              <a href="mailto:omama.imran22@gmail.com" className="text-blue-400 hover:underline">omama.imran22@gmail.com</a>
            </div>

            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"
                />
              </svg>

              <a href="https://www.linkedin.com/in/omama-imran/" className="text-blue-400 hover:underline">/omama-imran</a>
            </div>

            <div className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <a href="https://github.com/OmamaImran" className="text-blue-400 hover:underline">/OmamaImran</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Profile, () => true);