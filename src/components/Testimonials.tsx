import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I had the pleasure of working alongside Guadalupe as full-stack software engineers at Resolvely.Ai, and I can confidently say that she is a fantastic team member. Guadalupe is not only incredibly smart and skilled, but she is also a joy to work with. Her positive attitude, friendliness, and sense of humor make her a valuable asset to any team. She consistently delivers high-quality work and is always willing to lend a helping hand to her colleagues. I highly recommend Guadalupe and believe she would be a great addition to any team!",
    name: "Kyung Bin Choi",
    title: "Software Engineer at Resolvely.Ai",
    avatar: "/person3.jpg",
  },
  {
    quote: "Very passionate and nice to work with. Is able to break problems down in concise way and is outspoken about potential issues with code.",
    name: "Aurel Aliy",
    title: "Software Engineer at Resolvely.Ai",
    avatar: "/person2.jpg",
  },
  {
    quote: "I worked with Guadalupe during the residency program at Method. Guadalupe is a strong collaborator – she leads with compassion and is efficient with her work. She had lots of great ideas to improve our MVP, and made the hand-off process from designers to developers very easy. I’ve really enjoyed working with her.",
    name: "Isabel Rozario",
    title: "Software Engineer at Method",
    avatar: "/person1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-8 flex items-center gap-2 font-mono text-m uppercase tracking-widest text-cream">
        <FontAwesomeIcon icon={faLeaf} className="text-accent" />
        What People Say
      </p>

      <div className="grid gap-6 md:grid-cols-3">
     {TESTIMONIALS.map((t, index) => (
  <div
    key={index}
    className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6"
  >
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="mb-4 text-xl text-text-muted"
              />
              <p className="text-sm leading-relaxed text-text-muted">
                {t.quote}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-text">{t.name}</p>
                <p className="text-xs text-text-muted">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}