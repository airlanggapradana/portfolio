import {Separator} from "@/components/ui/separator.tsx";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button.tsx";
import AnimatedContent from "@/components/reactbits/AnimatedContent/AnimatedContent.tsx";

const Works = () => {
  return (
    <section id={'works'} className={'w-full min-h-screen flex flex-col items-center justify-center'}>
      <Separator className={'bg-gray-300'}/>
      <div className={'w-full'}>
        <div className={'max-w-full mx-auto'}>
          <div className={'space-y-5 mt-5'}>
            <AnimatedContent
              distance={-100}
              direction="horizontal"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0}
              delay={0.5}
            >
              <InteractiveHoverButton
              >
                Selected Works
              </InteractiveHoverButton>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
