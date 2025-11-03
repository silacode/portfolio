import Image from "next/image";

interface SocialLink {
  href: string;
  iconSrc: string;
  alt: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4 mb-6 justify-center md:justify-start">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-opacity duration-200"
        >
          <Image
            src={link.iconSrc}
            alt={link.alt}
            width={20}
            height={20}
            className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
          />
        </a>
      ))}
    </div>
  );
}
