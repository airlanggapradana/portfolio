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
        className={'w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center text-2xl px-4 sm:px-6 lg:px-8'}>
        <Navbar/>
        <Hero/>
        <Works/>
        <Contact/>
      </main>
    </>
  )
}

export default App
