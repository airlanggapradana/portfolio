import BlurText from "@/components/reactbits/BlurText/BlurText.tsx";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";
import SplitText from "@/components/reactbits/SplitText/SplitText.tsx";

const Hero = () => {
  return (
    <section id={'home'} className={'w-full h-screen flex items-center justify-center'}>
      <div className="absolute top-12 left-12 z-10">
        <div className="flex items-center gap-3">
          <div className="w-1 h-10 bg-gray-300 rounded animate-grow-vertical-line"/>
          <BlurText
            text="Airlangga Pradana"
            delay={75}
            animateBy="letters"
            direction="bottom"
            className={'text-3xl font-main font-bold text-gray-700'}
          />
        </div>
      </div>
      <div className="absolute top-12 right-12 z-10">
        <InteractiveHoverButton
          onClick={() => {
            const section = document.getElementById('contacts');
            if (section) {
              section.scrollIntoView({behavior: 'smooth'});
            }
          }}
        >
          Contact
        </InteractiveHoverButton>
      </div>
      <div className={'w-full'}>
        <div className={'max-w-full mx-auto'}>
          <BlurText
            text="Fullstack Web & Mobile Developer"
            delay={150}
            animateBy="words"
            direction="bottom"
            className={'text-4xl sm:text-5xl max-w-5xl leading-tight md:text-8xl font-main font-medium mb-4'}
          />
          <SplitText
            text="Hello! I am Airlangga Pradana, known as Rangga, a self-learner and a fullstack developer — Crafting seamless digital experiences that empower brands to connect, engage, and grow in a dynamic world."
            className={'text-lg max-w-4xl sm:text-xl md:text-2xl text-gray-600 font-secondary'}
            delay={100}
            duration={1}
            ease="power3.out"
            splitType="words"
            from={{opacity: 0, y: 20}}
            to={{opacity: 1, y: 0}}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="initial"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;