'use client';
import { useParams } from 'next/navigation';
import { projects } from '@/contants/common';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function RepoDetail() {
  const { repoName } = useParams();
  const [modalImage, setModalImage] = useState<string | null>(null);

  const project = projects.find((p) => p.slug === repoName);

  if (!project) return <p className="text-center mt-10">Project not found.</p>;

  return (
    <div className="bg-[#0d1117] text-white min-h-screen p-6 relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400">{project.name}</h1>
        <p className="mt-2 text-gray-400">{project.description}</p>

        <ul className="mt-4 space-y-2 pl-5 list-disc text-gray-300 text-sm">
          {project.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        {
          project.link && (
            <div className="">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-sm text-blue-400"
              >
                View Deployed Project <span className="ml-1"><ExternalLink size={15}/></span>
              </Link>
            </div>
          )
        }

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
          <div className="flex flex-wrap gap-4">
            {project.screenshots.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                width={project.imgWidth}
                height={project.imgHeight}
                className="rounded-md border border-gray-700 object-cover cursor-zoom-in"
                onClick={() => setModalImage(src)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <Image
            src={modalImage}
            alt="Enlarged Screenshot"
            width={900}
            height={600}
            className="rounded-md max-w-full max-h-[90vh] object-contain cursor-zoom-out"
          />
        </div>
      )}
    </div>
  );
}
