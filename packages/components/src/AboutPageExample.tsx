import { NextjsLogo } from "./icons/NextjsLogo";
import { ReactjsLogo } from "./icons/ReactjsLogo";
import { TailwindcssLogo } from "./icons/TailwindcssLogo";
import { ReactAriaLogo } from "./icons/ReactAriaLogo";
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
            <span>A web developer.</span>
            {/* <span className="w-7 h-7 md:w-9 md:h-9 ml-2">
              <ReactjsLogo className="text-primary dark:text-primary-dark" />
            </span> */}
          </div>
          <div className="hidden md:flex mt-4 opacity-70">
            <SocialLinks />
          </div>
        </h1>
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8 px-2 pt-4">
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
            While web technology is becoming more and more capable, allowing us
            to build amazing stuff on the web, I think web development can also
            be fairly hard and frustrating. A part of it might be because there
            are so many&mdash;often completely different&mdash;ways to achieve
            similar end results (JS frameworks, for example). Another part of it
            might have to do with the difficulty supporting different browsers
            and devices with varying screen sizes and input methods.
          </p>
          <p>
            Or, the fact that it's almost too easy to introduce visual
            regressions and break things with the slightest change in codebase
            could also be part of web development being quite tricky. I've
            observed all these challenges being amplified even further when
            there are more than one developer involved, working on a project at
            the same time.
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
            So here I am, trying to be a better web dev than yesterday,
            everyday. 🫡
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="grid grid-rows-6 gap-6">
          <TechsIUseDesktop />
        </ul>
      </div>
    </div>
  );
}

function TechsIUseDesktop() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <ReactjsLogo
            className="text-primary dark:text-primary-dark"
            width={36}
            height={36}
          />
          <p className="text-lg font-semibold">React</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <NextjsLogo height={20} width={150} />
      </div>
      <div className="flex items-center  justify-center">
        <TailwindcssLogo height={30} width={150} />
      </div>
      <div className="flex items-center justify-center">
        <ReactAriaLogo height={28} width={28} />
      </div>
      <div className="flex items-center justify-center">
        <RadixUILogo
          className="text-[#1C2024] dark:text-[#EDEEF0]"
          height={22}
          width={150}
        />
      </div>
      <div className="flex items-center justify-center">
        <StorybookLogo height={26} width={150} />
      </div>
    </>
  );
}

function TechsIUseMobile() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <ReactjsLogo
            className="text-primary dark:text-primary-dark"
            width={36}
            height={36}
          />
          <p className="text-lg font-semibold">React</p>
        </div>
      </div>
      <div className="flex items-center">
        <NextjsLogo height={18} width={92} />
      </div>
      <div className="flex items-center">
        <TailwindcssLogo height={18} width={150} />
      </div>
      <div className="flex items-center">
        <ReactAriaLogo height={28} width={28} />
      </div>
      <div className="flex items-center">
        <RadixUILogo
          className="text-[#1C2024] dark:text-[#EDEEF0]"
          height={20}
          width={90}
        />
      </div>
      <div>
        <StorybookLogo height={28} width={120} />
      </div>
    </>
  );
}
