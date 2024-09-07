import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="hero"
      className="grid h-full grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-[auto_auto] lg:grid-cols-2 lg:content-end"
    >
      {/* Text Block */}
      <div className="mx-auto max-w-[540px] md:w-[512px] md:self-start lg:mx-0 lg:w-full lg:self-center lg:justify-self-start">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="flex flex-col gap-6 uppercase">
            <span className="text_preset_6--mobile md:text_preset_5--desktop text-blue-300">
              So, you want to travel to
            </span>
            <span className="text_preset_1--mobile md:text_preset_1--desktop">
              Space
            </span>
          </h1>
          <p className="text_preset_9--mobile md:text_preset_9--tablet lg:text_preset_9--desktop text-blue-300">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
      </div>
      {/* Button */}
      <div className="mx-auto max-w-[540px] md:w-[512px] md:self-end lg:mx-0 lg:w-full lg:self-center lg:justify-self-end">
        <div className="flex h-full items-center justify-center md:items-end lg:items-center lg:justify-end">
          <Button
            className="text_preset_4--mobile md:text_preset_4--desktop h-[144px] w-[144px] rounded-full bg-white p-0 uppercase text-blue-900 transition-all duration-300 hover:bg-white hover:text-blue-900/50 hover:ring-[88px] hover:ring-white/10 md:h-[272px] md:w-[272px]"
            asChild
          >
            <Link href="/destination">Explore</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
