import {Separator} from "@/components/ui/separator.tsx";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button.tsx";
import AnimatedContent from "@/components/reactbits/AnimatedContent/AnimatedContent.tsx";
import {ArrowUpRight} from "lucide-react";
import compro from '../assets/compro.png'
import oprec from '../assets/oprec.png'
import React from "react";
import BlurText from "@/components/reactbits/BlurText/BlurText.tsx";
import sendthesong from "../assets/sendthesong.png"
import docai from "../assets/doc_ai.png"
import medadmin from "../assets/med_admin.png"

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  year: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Company Profile FOSTI 2025",
    description: "Established an Official Site Profile for FOSTI 2025, showcasing our mission, vision, and services.",
    imageUrl: compro,
    projectUrl: "https://fostiums.org",
    year: "2025"
  },
  {
    id: 2,
    title: "Open Recruitment FOSTI 2025",
    description: "Establishing a seamless recruitment platform for FOSTI 2025 with user-friendly application processes.",
    imageUrl: oprec,
    projectUrl: "https://oprec.fostiums.org",
    year: "2025"
  },
  {
    id: 3,
    title: "Send The Song Clone",
    description: "A music sharing web application that allows users to send and share their favorite songs with friends.",
    imageUrl: sendthesong,
    projectUrl: "https://sendthesongclone.vercel.app",
    year: "2024"
  },
  {
    id: 4,
    title: "Doc AI",
    description: "an AI-powered web application to predict & check your health based on few simple questions.",
    imageUrl: docai,
    projectUrl: "https://halodoc-ai.vercel.app/",
    year: "2024"
  },
  {
    id: 5,
    title: "Med Admin",
    description: "A web application to manage and track medication schedules, ensuring timely reminders and adherence to prescribed treatments.",
    imageUrl: medadmin,
    projectUrl: "https://halodoc-ai.vercel.app/",
    year: "2024"
  },
];

const Works = () => {
  return (
    <section id={'works'} className={'w-full min-h-screen flex flex-col items-center justify-center'}>
      <Separator className={'bg-gray-300'}/>
      <div className={'w-full'}>
        <div className={'max-w-full mx-auto'}>
          <div className={'space-y-12 mt-5'}>
            <div className={'space-y-3 mb-7'}>
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
                delay={0.5}
              >
                <InteractiveHoverButton
                >
                  Selected Works
                </InteractiveHoverButton>
              </AnimatedContent>

              <BlurText
                text="A curated collection of projects that showcase thoughtful design, technical excellence, and meaningful user experiences."
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-base md:text-xl text-gray-700 font-secondary max-w-xl ml-5"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {workItems.map((work, idx) => (
                <AnimatedContent
                  key={work.id}
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0}
                  delay={0.25 + idx * 0.25}
                >
                  <WorkCard work={work}/>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkCard: React.FC<{ work: WorkItem }> = ({work}) => {
  const handleCardClick = () => {
    window.open(work.projectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 mb-4">
        <img
          src={work.imageUrl}
          alt={work.title}
          className="w-full h-[600px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"/>
        <div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ArrowUpRight className="w-4 h-4 text-gray-900"/>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3
            className="text-lg font-main font-bold text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
            {work.title}
          </h3>
          <span className="text-sm font-secondary text-gray-400">
            {work.year}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed font-secondary">
          {work.description}
        </p>
      </div>
    </div>
  );
};

export default Works;
