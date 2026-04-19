import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Slide = { src: string; alt: string };

export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [autoplay.current]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div ref={emblaRef} className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover animate-[heroZoom_8s_ease-out_forwards]"
                width={1920}
                height={1080}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* dot indicators */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all ${
              i === selected ? "w-8 bg-gold" : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
