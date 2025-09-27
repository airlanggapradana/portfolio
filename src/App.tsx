import useLenis from "@/hooks/useLenin.ts";
import Navbar from "@/components/Navbar.tsx";
import Hero from "@/components/Hero.tsx";
import Works from "@/components/Works.tsx";
import Contact from "@/components/Contacts.tsx";
import {Seo} from "./utils/seo.tsx";


function App() {
  useLenis();
  return (
    <>
      <Seo
        title="Airlangga Pradana | Web Developer Portfolio"
        description="Portfolio Airlangga Pradana, Fullstack Developer Indonesia. Spesialis React, Express, MongoDB, TypeScript."
      />
      <main
        className={'w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-5 md:gap-14 text-2xl'}
      >
        <Navbar/>
        <Hero/>
        <Works/>
        <Contact/>
      </main>
    </>
  )
}

export default App
