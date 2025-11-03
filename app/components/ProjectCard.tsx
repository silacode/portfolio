import Image from "next/image";

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
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
      {imageSrc ? (
        <div className="w-full sm:w-48 h-32 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={192}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
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
  );
}
