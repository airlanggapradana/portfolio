import React from 'react';
import {Mail, Github, Linkedin, Twitter} from 'lucide-react';

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
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: <Mail className="w-5 h-5"/>
  },
  {
    id: 2,
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com/username",
    icon: <Github className="w-5 h-5"/>
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com/in/username",
    icon: <Linkedin className="w-5 h-5"/>
  },
  {
    id: 4,
    label: "Twitter",
    value: "@username",
    href: "https://twitter.com/username",
    icon: <Twitter className="w-5 h-5"/>
  }
];

const Contact: React.FC = () => {
  return (
    <section className="py-28 px-6 w-full">
      <div className="max-w-full mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-medium font-main text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-xl font-secondary text-xl">
            Available for freelance projects, collaborations, and interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((contact) => (
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