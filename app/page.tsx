import Image from "next/image";
import SocialLinks from "./components/SocialLinks";
import ProjectCard from "./components/ProjectCard";
import ContactInfo from "./components/ContactInfo";
import { socialLinks } from "./data/socialLinks";
import { contactItems } from "./data/contactItems";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Sidebar - Fixed */}
      <aside className="w-full md:w-80 flex-shrink-0 border-r-0 md:border-r border-gray-200 p-4 md:p-8 flex flex-col">
        {/* Profile Picture */}
        <div className="mb-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4 mx-auto md:mx-0">
            <Image
              src="/profile.jpeg"
              alt="Siladitya Samaddar"
              width={128}
              height={128}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Siladitya Samaddar
        </h1>

        {/* Title */}
        <p className="text-gray-600 mb-6 text-center md:text-left">
          Senior Software Engineer
        </p>

        {/* Social Links */}
        <SocialLinks links={socialLinks} />

        {/* Separator */}
        <hr className="border-gray-200 mb-6" />

        {/* Contact Information */}
        <ContactInfo items={contactItems} />
      </aside>

      {/* Right Column - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 md:space-y-12">
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siladitya Samaddar
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m an engineer who designs and scales AI-driven systems,
                blending distributed architecture, async data layers, and
                generative models to solve complex problems. I focus on
                reliability, performance, and clarity, whether it&apos;s
                microservices, observability, or multi-agent AI.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
