import { Button } from "@/components/ui/button";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const MenHeroSection = () => {
  return (
    <div className="relative w-full aspect-5/2 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/6388420/"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container z-10 flex  flex-col justify-center h-full gap-2">
        <p className="promo-title  text-background">
          BUILT FOR <br /> PERFORMANCE
        </p>
        <p className="body-1 font-semibold text-background">
          Train Hard. Recover Harder
        </p>
        <Button
          component="link"
          href="/shop"
          endIcon={<IoIosArrowDroprightCircle className="size-6.5" />}
          className="py-5 px-4 bg-tansparent border border-background hover:border-transparent text-xl uppercase rounded-none w-fit mt-8"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default MenHeroSection;
