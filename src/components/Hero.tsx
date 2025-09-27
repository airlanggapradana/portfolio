import BlurText from "@/components/reactbits/BlurText/BlurText.tsx";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";
import SplitText from "@/components/reactbits/SplitText/SplitText.tsx";
import bg from '@/assets/bg_img.jpg'
import ava from '@/assets/avatar.jpg'

const Hero = () => {
  return (
    <section
      id={'home'}
      className="w-full h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      {/* Background image for desktop */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat bg-scroll min-h-screen hidden md:block"
        style={{
          backgroundImage: `url(${bg})`,
        }}
        aria-hidden="true"
      />
      <div className="absolute top-6 left-4 sm:top-12 sm:left-12 z-10">
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <div className="w-1 h-2 sm:h-8 bg-gray-300 rounded animate-grow-vertical-line"/>
          <BlurText
            text="Airlangga Pradana"
            delay={75}
            animateBy="letters"
            direction="bottom"
            className="text-lg sm:text-3xl font-main font-bold text-gray-700 md:text-gray-100"
          />
        </div>
      </div>
      <div className="absolute top-6 right-4 sm:top-12 sm:right-12 z-10">
        <InteractiveHoverButton
          onClick={() => {
            const section = document.getElementById('contacts');
            if (section) {
              section.scrollIntoView({behavior: 'smooth'});
            }
          }}
          className="text-sm sm:text-xl"
        >
          Contact
        </InteractiveHoverButton>
      </div>
      <div className="w-full">
        <div className="max-w-full mx-auto mt-20 md:mt-0">
          <BlurText
            text="Fullstack Web & Mobile Developer"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-5xl max-w-5xl leading-tight md:text-8xl font-main font-medium text-gray-700 md:text-gray-100 mb-4"
          />
          <SplitText
            text="Hello! I am Airlangga Pradana, known as Rangga, a self-learner and a fullstack developer — Crafting seamless digital experiences that empower brands to connect, engage, and grow in a dynamic world."
            className="text-lg md:text-2xl max-w-full sm:max-w-4xl text-gray-500 md:text-gray-300 font-secondary"
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
          <div className="block md:hidden mt-7">
            <div className="w-[15rem] h-[15rem] rounded-full overflow-hidden mx-auto">
              <img
                src={ava}
                alt="Airlangga Pradana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;