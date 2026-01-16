import {Separator} from "@/components/ui/separator.tsx";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button.tsx";
import AnimatedContent from "@/components/reactbits/AnimatedContent/AnimatedContent.tsx";
import {ArrowUpRight, ExternalLink} from "lucide-react";
import compro from '../assets/compro.webp'
import oprec from '../assets/oprec.webp'
import React, {useState} from "react";
import BlurText from "@/components/reactbits/BlurText/BlurText.tsx";
import fostifest from "../assets/fostifest.webp"
import uploadxam from "../assets/uploadxam.webp"
import evoria from "../assets/evoria.webp"

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  year: string;
  tags?: string[];
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Company Profile FOSTI 2025",
    description: "Established an Official Site Profile for FOSTI 2025, showcasing our mission, vision, and services.",
    imageUrl: compro,
    projectUrl: "https://fostiums.org",
    year: "2025",
    tags: ["Web Design", "React", "Branding"]
  },
  {
    id: 2,
    title: "Open Recruitment FOSTI 2025",
    description: "Establishing a seamless recruitment platform for FOSTI 2025 with user-friendly application processes.",
    imageUrl: oprec,
    projectUrl: "https://oprec.fostiums.org",
    year: "2025",
    tags: ["Platform", "UX/UI", "React"]
  },
  {
    id: 3,
    title: "FOSTIFEST 2025",
    description: "A Web Event Application for Fostifest 2024, showcasing event details, schedules, and registration.",
    imageUrl: fostifest,
    projectUrl: "https://fostifest.fostiums.org",
    year: "2025",
    tags: ["Event", "Web App", "Frontend"]
  },
  {
    id: 4,
    title: "UploadXam | Bank Soal Digital FKI UMS",
    description: "A Platform dedicated for Students from Fakultas Komunikasi dan Informatika (FKI) UMS to gather and share past exam questions for various subjects.",
    imageUrl: uploadxam,
    projectUrl: "https://uploadxam.fostiums.org",
    year: "2025",
    tags: ["Education", "Platform", "Community"]
  },
  {
    id: 5,
    title: "Evoria | an Event Ticketing Platform",
    description: "Evoria is a comprehensive event ticketing platform designed to streamline the process of event management and ticket sales.",
    imageUrl: evoria,
    projectUrl: "https://evoria.vercel.app/",
    year: "2025",
    tags: ["E-commerce", "SaaS", "Full Stack"]
  },
];

const Works = () => {
  return (
    <section id={'works'}
             className={'relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black'}>
      <Separator className={'bg-gradient-to-r from-transparent via-gray-700 to-transparent'}/>

      <div className={'w-full max-w-7xl mx-auto'}>
        <div className={'space-y-16 mt-12'}>
          {/* Header Section */}
          <div className={'space-y-6 text-center max-w-3xl mx-auto'}>
            <AnimatedContent
              distance={-100}
              direction="horizontal"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0}
              delay={0.3}
            >
              <div className="inline-block">
                <InteractiveHoverButton className="mb-4">
                  Selected Works
                </InteractiveHoverButton>
              </div>
            </AnimatedContent>

            <BlurText
              text="A curated collection of projects that showcase thoughtful design, technical excellence, and meaningful user experiences."
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-lg md:text-2xl text-gray-400 font-secondary leading-relaxed"
            />
          </div>

          {/* Works Grid */}
          <div className="space-y-8">
            {workItems.map((work, idx) => (
              <AnimatedContent
                key={work.id}
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.95}
                threshold={0.1}
                delay={0.2 + idx * 0.15}
              >
                <WorkCard work={work} index={idx}/>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkCard: React.FC<{ work: WorkItem; index: number }> = ({work, index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  const handleCardClick = () => {
    window.open(work.projectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50 ring-1 ring-white/10 ${isEven ? '' : 'lg:order-2'}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCardClick();
          }
        }}
      >
        <div className="relative aspect-[16/9] cursor-pointer">
          <img
            src={work.imageUrl}
            alt={work.title}
            className="w-full h-full object-fill object-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"/>

          {/* Hover Button */}
          <div
            className={`absolute top-6 right-6 transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div
              className="bg-white/10 backdrop-blur-md rounded-full p-3 shadow-xl ring-1 ring-white/20 hover:bg-white/20 transition-all duration-300">
              <ExternalLink className="w-5 h-5 text-white"/>
            </div>
          </div>

          {/* Year Badge */}
          <div className="absolute bottom-6 left-6">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-5 py-2 shadow-lg ring-1 ring-white/20">
              <span className="text-sm font-bold text-white">{work.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className={`space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
        <div className="space-y-4">
          {/* Number Badge */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white font-bold text-xl shadow-lg ring-1 ring-white/10">
            {String(work.id).padStart(2, '0')}
          </div>

          {/* Title */}
          <h3
            className="text-3xl md:text-4xl font-main font-bold text-white leading-tight group-hover:text-gray-300 transition-colors duration-300">
            {work.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-secondary">
            {work.description}
          </p>

          {/* Tags */}
          {work.tags && work.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {work.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-200 ring-1 ring-white/10"
                >
                              {tag}
                            </span>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handleCardClick}
            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 mt-4"
          >
            View Project
            <ArrowUpRight
              className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works;