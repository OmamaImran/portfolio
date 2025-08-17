'use client'
import { experiences } from "@/contants/common";
import { useRouter } from "next/navigation";
import React from "react";



const ExperienceContent = () => {
  const router = useRouter();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6 border-b border-[#30363d] pb-2">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-[#161b22] p-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-[#58a6ff]">{exp.title}</h3>
              <h4 className="text-md font-medium">{exp.company}</h4>
              <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
            </div>
            {exp.current && (
              <span className="bg-[#238636] text-xs text-white px-2 py-1 rounded-full">Current</span>
            )}
          </div>
          <ul className="mt-4 space-y-2 pl-5 list-disc text-gray-300 text-sm">
            {exp.points.map((point, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.skills.map((item, i) => (
              <span key={i} className="text-xs bg-[#1e60a3] text-white px-2 py-1 rounded-full">{item}</span>
            ))}
          </div>
          {exp.projects && (
            <>
              <h2 className="text-2xl font-bold mt-5 mb-2">Projects:</h2>
              {exp.projects.map((proj, j) => (
                <div
                  key={j}
                  onClick={() =>
                    proj.link.startsWith('http')
                      ? window.open(proj.link, '_blank')
                      : router.push(proj.link)
                  }
                  className="bg-[#161b22] cursor-pointer p-5 mb-5 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#58a6ff]">{proj.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 mb-2">{proj.description}</p>
                  <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-300 text-sm">
                    {proj.points.map((pt, k) => (
                      <li key={k} dangerouslySetInnerHTML={{ __html: pt }} />
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ExperienceContent);
