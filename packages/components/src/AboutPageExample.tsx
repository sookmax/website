import { NextjsLogo } from "./icons/NextjsLogo";
import { ReactjsLogo } from "./icons/ReactjsLogo";
import { TailwindcssLogo } from "./icons/TailwindcssLogo";
import { RadixUILogo } from "./icons/RadixUILogo";
import { StorybookLogo } from "./icons/StorybookLogo";

export function AboutPageExample() {
  return (
    <>
      <main className="py-8 md:grid md:grid-cols-4 md:gap-8">
        <div className="md:col-span-3">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
            <div>Hi, I’m Sook.</div>
            <div className="flex items-center">
              <span>A web developer</span>
              <span className="w-7 h-7 md:w-10 md:h-10 ml-2">
                <ReactjsLogo className="text-primary dark:text-primary-dark animate-[spin_6s_linear_infinite]" />
              </span>
            </div>
          </h1>
          <div className="md:hidden grid grid-cols-3 gap-4 mt-8 px-2 pt-4">
            <TechsIUseMobile />
          </div>
          <div className="mt-12 space-y-7 lg:pr-8 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Well actually, I did not start my career as a web developer, but
              now I can hardly think of anything else I'd rather do than web
              development.
            </p>
            <p>
              I started out as a data analyst after graduating college back in
              2015. In hindsight, I think I had always enjoyed data
              visualization (charts and tables) more than any other aspects of
              data analysis, which had probably been the strongest motivator
              that eventually led me to web development. And now, I'm happier
              and more fulfilled as a web developer.
            </p>
            <p>
              As much as I am passionate about web dev though, I think it is
              also fairly hard. A part of it might be because there are so
              many&mdash;often completely different&mdash;ways to achieve
              similar end results (JS frameworks, for example). Another part of
              it might have to do with the difficulty supporting multiple
              browsers (and their versions) and various devices (and their
              sizes).
            </p>
            <p>
              Or the fact that it's almost too easy to introduce visual
              regressions and break things with the slightest change in the code
              base could also be part of web development being quite difficult.
              I've observed all these challenges being amplified even more when
              there are multiple developers involved, as opposed to when I am
              the only developer of a particular project.
            </p>
            <p>
              Despite the challenges, I understand building a great product
              requires a <em>team</em> of great engineers; I think well-made
              software products are the culmination of immense{" "}
              <em>collaborative effort</em> among great people. My ultimate goal
              is to be a part of such team. And I believe the best way to
              achieve that&mdash;from my end&mdash;is to become a sufficiently
              competent dev myself.
            </p>
            <p>
              So here I am, trying to be a better web dev than yesterday,
              everyday :)
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-12">
          <ul className="grid grid-rows-5 gap-5 max-h-96 mt-6">
            <TechsIUseDesktop />
          </ul>
        </div>
      </main>
    </>
  );
}

function TechsIUseDesktop() {
  return (
    <>
      <div className="flex items-center px-2">
        <NextjsLogo />
      </div>
      <div className="flex items-center">
        <TailwindcssLogo />
      </div>
      <div className="flex items-center px-2">
        <RadixUILogo className="text-[#1C2024] dark:text-[#EDEEF0]" />
      </div>
      <div className="flex items-center">
        <StorybookLogo />
      </div>
    </>
  );
}

function TechsIUseMobile() {
  return (
    <>
      <div className="h-8 px-2">
        <NextjsLogo />
      </div>
      <div className="h-8">
        <TailwindcssLogo />
      </div>
      <div className="h-8 px-2">
        <RadixUILogo className="text-[#1C2024] dark:text-[#EDEEF0]" />
      </div>
      <div className="h-8">
        <StorybookLogo />
      </div>
    </>
  );
}
