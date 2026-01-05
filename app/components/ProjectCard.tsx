"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  year?: string;
  imageSrc?: string;
  imageAlt?: string;
  githubLink?: string;
  websiteLink?: string;
}

export default function ProjectCard({
  title,
  description,
  year,
  imageSrc,
  imageAlt = "Project image",
  githubLink,
  websiteLink,
}: ProjectCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setIsLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (isLightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, closeLightbox]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
        {imageSrc ? (
          <button
            onClick={openLightbox}
            className="w-full sm:w-48 h-32 flex-shrink-0 bg-gray-200 rounded overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-transform hover:scale-[1.02]"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={192}
              height={128}
              className="w-full h-full object-cover"
            />
          </button>
        ) : (
          <div className="w-full sm:w-48 h-32 flex-shrink-0 bg-gray-200 rounded"></div>
        )}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-700 text-sm mb-2">{description}</p>
          )}
          {year && <p className="text-gray-500 text-sm mb-4">{year}</p>}
          {(githubLink || websiteLink) && (
            <div className="flex gap-4 mt-auto">
              {websiteLink && (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <Image
                    src="/globe.svg"
                    alt="Website"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">Website</span>
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && imageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
