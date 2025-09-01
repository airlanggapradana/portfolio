import {FloatingDock} from "@/components/ui/floating-dock.tsx";
import {IconBrandGithub, IconHome} from "@tabler/icons-react";
import {MdOutlinePeopleOutline, MdOutlineWorkHistory} from "react-icons/md";
import {Instagram, Linkedin} from "lucide-react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#",
    },

    {
      title: "Works",
      icon: (
        <MdOutlineWorkHistory className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#works",
    },
    {
      title: "Contacts",
      icon: (
        <MdOutlinePeopleOutline className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "#contacts",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://linkedin.com/in/airlanggapradana",
    },
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://instagram.com/iamrangga._",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://github.com/airlanggapradana",
    },
  ];
  return (
    <div className={'fixed bottom-5 z-10'}>
      <FloatingDock
        items={links}
      />
    </div>
  );
};

export default Navbar;
