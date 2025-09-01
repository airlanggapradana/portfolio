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
    <section className="py-28 px-6 w-full">
      <div className="max-w-full mx-auto">
        <div className="mb-16 flex flex-col items-start w-full">
          <SplitText
            text="Get in Touch"
            className="text-3xl font-medium font-main text-gray-900 mb-4"
            delay={100}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{opacity: 0, y: 40}}
            to={{opacity: 1, y: 0}}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="Available for freelance projects, collaborations, and interesting conversations."
            className="text-gray-600 max-w-xl font-secondary text-xl"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactItems.map((contact) => (
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.5 * contact.id}
            >
              <a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {contact.label}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      {contact.value}
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedContent>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Currently based in Surakarta, open to remote opportunities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;