import React from 'react';
import {Mail, Github, Linkedin} from 'lucide-react';
import SplitText from "@/components/reactbits/SplitText/SplitText.tsx";
import AnimatedContent from "@/components/reactbits/AnimatedContent/AnimatedContent.tsx";

interface ContactItem {
  id: number;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    id: 1,
    label: "Email",
    value: "ranggavfxartwork@gmail.com",
    href: "mailto:ranggavfxartwork@gmail.com",
    icon: <Mail className="w-5 h-5"/>
  },
  {
    id: 2,
    label: "GitHub",
    value: "github.com/airlanggapradana",
    href: "https://github.com/airlanggapradana",
    icon: <Github className="w-5 h-5"/>
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/airlanggapradana",
    href: "https://linkedin.com/in/airlanggapradana",
    icon: <Linkedin className="w-5 h-5"/>
  },
];

const Contact: React.FC = () => {
  return (
    <section id={'contacts'}
             className="py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-black via-gray-900 to-gray-950">
      <div className='w-full'>
        <div className="max-w-full mx-auto">
          <div className="mb-10 sm:mb-16 flex flex-col items-start w-full">
            <SplitText
              text="Get in Touch"
              className="text-2xl sm:text-3xl font-medium font-main text-white mb-3 sm:mb-4"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{opacity: 0, y: 40}}
              to={{opacity: 1, y: 0}}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="initial"
            />
            <SplitText
              text="Available for freelance projects, collaborations, and interesting conversations."
              className="text-gray-400 max-w-xl font-secondary text-base sm:text-xl"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{opacity: 0, y: 40}}
              to={{opacity: 1, y: 0}}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="initial"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contactItems.map((contact) => (
              <AnimatedContent
                key={contact.id}
                distance={50}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.2 * contact.id}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 backdrop-blur-sm hover:bg-white/10"
                >
                  <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-medium text-white mb-0.5 sm:mb-1">
                        {contact.label}
                      </div>
                      <div
                        className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 break-all">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedContent>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 mb-12 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              Currently based in Surakarta, open to remote opportunities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;