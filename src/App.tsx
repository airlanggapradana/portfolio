import useLenis from "@/hooks/useLenin.ts";
import Navbar from "@/components/Navbar.tsx";
import Hero from "@/components/Hero.tsx";
import Works from "@/components/Works.tsx";
import Contact from "@/components/Contacts.tsx";
import useSEO from "@/hooks/useSeo.tsx";

function App() {
  useLenis();
  useSEO({
    title: "Home - My Portfolio Website",
    description: "Welcome to my website, here you can find amazing content.",
    keywords: "portfolio, web development, projects, airlangga",
    image: "https://example.com/thumbnail.png",
    url: "https://mywebsite.com/",
  })
  return (
    <main
      className={'w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center text-2xl px-4 sm:px-6 lg:px-8'}>
      <Navbar/>
      <Hero/>
      <Works/>
      <Contact/>
    </main>
  )
}

export default App
