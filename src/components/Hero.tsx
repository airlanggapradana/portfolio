import BlurText from "@/components/reactbits/BlurText/BlurText.tsx";
import TextType from "@/components/reactbits/TextType/TextType.tsx";

const Hero = () => {
  return (
    <div className={'w-full h-screen flex items-center justify-center'}>
      <div className={'w-full'}>
        <div className={'max-w-8xl mx-auto'}>
          <BlurText
            text="Fullstack Developer & Self Learner"
            delay={150}
            animateBy="words"
            direction="bottom"
            className={'text-4xl sm:text-5xl max-w-5xl leading-tight md:text-8xl font-main font-medium mb-4'}
          />
          <TextType
            text={["Hello! I am Airlangga Pradana, known as Rangga, a self-learner and a fullstack developer — Crafting seamless digital experiences that empower brands to connect, engage, and grow in a dynamic world."]}
            typingSpeed={30}
            pauseDuration={1500}
            showCursor={true}
            textColors={['#4B5563']}
            cursorCharacter="|"
            className={'text-lg max-w-3xl sm:text-xl md:text-2xl text-gray-600 font-secondary'}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
