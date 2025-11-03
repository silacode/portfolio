import Image from "next/image";

interface ContactItem {
  iconSrc: string;
  iconAlt: string;
  text: string;
  link?: string;
}

interface ContactInfoProps {
  items: ContactItem[];
}

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const content = (
          <div className="flex items-center gap-3 text-gray-700 justify-center md:justify-start">
            <Image
              src={item.iconSrc}
              alt={item.iconAlt}
              width={20}
              height={20}
              className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
            />
            <span className="text-sm">{item.text}</span>
          </div>
        );

        if (item.link) {
          return (
            <a key={index} href={item.link} className="block">
              {content}
            </a>
          );
        }

        return <div key={index}>{content}</div>;
      })}
    </div>
  );
}
