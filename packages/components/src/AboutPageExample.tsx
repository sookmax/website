import { NextjsLogo } from "./icons/NextjsLogo";
import { ReactjsLogo } from "./icons/ReactjsLogo";
import { TailwindcssLogo } from "./icons/TailwindcssLogo";
import { RadixUILogo } from "./icons/RadixUILogo";
import { StorybookLogo } from "./icons/StorybookLogo";
import { SocialLinks } from "./SocialLinks";

export function AboutPageExample() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-8">
      <div className="md:col-span-3">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
          <div>Hi, I’m Sook.</div>
          <div className="flex items-center">
            <span>A web developer</span>
            <span className="w-7 h-7 md:w-9 md:h-9 ml-2">
              <ReactjsLogo className="text-primary dark:text-primary-dark" />
            </span>
          </div>
          <div className="hidden md:flex mt-4 opacity-70">
            <SocialLinks />
          </div>
        </h1>
        <div className="md:hidden grid grid-cols-3 gap-4 mt-8 px-2 pt-4">
          <TechsIUseMobile />
        </div>
        <div className="mt-8 space-y-7 lg:pr-8 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Well in fact, I started out not as a web developer but as a data
            analyst after finishing college back in 2015; I worked as a data
            analyst until early 2019. In hindsight, I think I had always enjoyed
            data visualization (charts and tables) more than any other aspects
            of data analysis, which had probably been the strongest motivator
            for me to want to become a web dev.
          </p>
          <p>
            As much as web technology is becoming more and more capable,
            allowing us to build amazing stuff on the web, I think web
            development can also be fairly hard and frustrating. A part of it
            might be because there are so many&mdash;often completely
            different&mdash;ways to achieve similar end results (JS frameworks,
            for example). Another part of it might have to do with the
            difficulty supporting multiple browsers and various devices with
            different screen sizes and input methods.
          </p>
          <p>
            Or, the fact that it's almost too easy to introduce visual
            regressions and break things with the slightest change in codebase
            could also be part of web development being quite tricky. I've
            observed all these challenges being amplified even further when
            there are more than one developers involved, working on the same
            project.
          </p>
          <p>
            Despite the challenges, I understand building a great product
            requires a <em>team</em> of great engineers; I think well-made
            software products are the culmination of immense{" "}
            <em>collaborative effort</em> among great people. My ultimate goal
            is to be a part of such team. And I believe the best way to achieve
            that&mdash;from my end, at least&mdash;is to become a sufficiently
            competent engineer myself.
          </p>
          <p>
            So here I am, trying to be a better web dev than yesterday, everyday
            😄.
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="grid grid-rows-4 gap-5 max-h-80">
          <TechsIUseDesktop />
        </ul>
      </div>
    </div>
  );
}

function TechsIUseDesktop() {
  return (
    <>
      <div className="flex items-center py-5">
        <NextjsLogo />
      </div>
      <div className="flex items-center">
        <TailwindcssLogo />
      </div>
      <div className="flex items-center py-4">
        <RadixUILogo className="text-[#1C2024] dark:text-[#EDEEF0]" />
      </div>
      <div className="flex items-center py-4">
        <StorybookLogo />
      </div>
    </>
  );
}

function TechsIUseMobile() {
  return (
    <>
      <div className="h-6 pt-2">
        <NextjsLogo />
      </div>
      <div className="h-8">
        <TailwindcssLogo />
      </div>
      <div className="h-6 pt-1">
        <RadixUILogo className="text-[#1C2024] dark:text-[#EDEEF0]" />
      </div>
      <div className="h-8 py-1">
        <StorybookLogo />
      </div>
    </>
  );
}
