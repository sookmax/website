import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link,
  Dot,
  Download,
} from "lucide-react";
import { AvatarSlot } from "./Avatar.primitives";
import { generateImageUrl } from "./generateImageUrls";

export function ResumeEn() {
  return (
    <main className="flex flex-col w-full h-full text-black">
      <header className="bg-zinc-800 text-zinc-100 p-6 grid grid-cols-3">
        <div className="w-full h-full flex justify-center items-center">
          <AvatarSlot className="w-24 h-24 border border-zinc-100">
            <img
              src={generateImageUrl("/profile-pic.jpeg")}
              alt="profile-picture"
            />
          </AvatarSlot>
        </div>
        <h1 className="flex flex-col justify-center gap-2">
          <div className="text-4xl">Sukkyu Chung</div>
          <div>Web Frontend Developer</div>
        </h1>
        <div className="flex justify-center items-center print:hidden">
          <a href={generateImageUrl("/resume_en.pdf")} target="_blank">
            <Download />
          </a>
        </div>
      </header>
      <div className="flex-grow flex">
        <article className="bg-zinc-200 p-6 space-y-8 w-[275px] flex-shrink-0">
          <section className="space-y-2">
            <h2 className="text-lg">Contacts</h2>
            <ul className="ml-1 space-y-1 text-xs font-light">
              <li className="flex items-center gap-2">
                <Link className="w-4 h-4" />
                <a href="https://www.sook.dev/" target="_blank">
                  sook.dev
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Seoul, South Korea</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:sukkyu.chung@gmail.com">
                  sukkyu.chung@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/in/sukkyu-sook-chung/"
                  target="_blank"
                >
                  sukkyu-sook-chung
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/sookmax" target="_blank">
                  @sookmax
                </a>
              </li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg">Education</h2>
            <div className="text-xs font-light ml-1">
              <div>Bachelor of Science in Statistics</div>
              <div>University of California, Los Angeles</div>
              <div className="text-2xs flex justify-between">
                <div>2013 - 2015</div>
                <div>
                  <span className="mr-1.5">GPA</span>
                  <span>
                    3.9<span className="text-zinc-500">/</span>4.0
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg">Open Source Contributions</h2>
            <ul className="font-light text-xs ml-1">
              <li className="flex items-center gap-1">
                <a
                  href="https://github.com/adobe/react-spectrum/pulls?page=1&q=is%3Apr+is%3Aclosed+author%3Asookmax"
                  target="_blank"
                  className="underline"
                >
                  adobe/react-spectrum (27 merged)
                </a>
              </li>
              <li className="flex items-center gap-1">
                <a
                  href="https://github.com/storybookjs/storybook/pulls?q=is%3Apr+is%3Aclosed+author%3Asookmax"
                  target="_blank"
                  className="underline"
                >
                  storybookjs/storybook (6 merged)
                </a>
              </li>
              <li className="flex items-center gap-1">
                <a
                  href="https://github.com/nkzw-tech/athena-crisis/pulls?q=is%3Apr+is%3Aclosed+author%3Asookmax"
                  target="_blank"
                  className="underline"
                >
                  nkzw-tech/athena-crisis (4 merged)
                </a>
              </li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg">Skills</h2>
            <ul className="ml-1 text-xs font-light flex items-center flex-wrap">
              <li className="after:content-['\00b7'] after:mx-1">React</li>
              <li className="after:content-['\00b7'] after:mx-1">Next.js</li>
              <li className="after:content-['\00b7'] after:mx-1">
                tailwindcss
              </li>
              <li className="after:content-['\00b7'] after:mx-1">React Aria</li>
              <li className="after:content-['\00b7'] after:mx-1">Storybook</li>
              <li className="after:content-['\00b7'] after:mx-1">three.js</li>
              <li className="after:content-['\00b7'] after:mx-1">gsap</li>
              <li className="after:content-['\00b7'] after:mx-1">Vue2</li>
              <li className="after:content-['\00b7'] after:mx-1">Vue3</li>
              <li className="after:content-['\00b7'] after:mx-1">HTML</li>
              <li className="after:content-['\00b7'] after:mx-1">CSS</li>
              <li className="after:content-['\00b7'] after:mx-1">JavaScript</li>
              <li className="after:content-['\00b7'] after:mx-1">TypeScript</li>
              <li className="after:content-['\00b7'] after:mx-1">Node.js</li>
              <li className="after:content-['\00b7'] after:mx-1">Docker</li>
              <li className="after:content-['\00b7'] after:mx-1">Kubernetes</li>
              <li className="after:content-['\00b7'] after:mx-1">Linux</li>
              <li className="after:content-['\00b7'] after:mx-1">Python</li>
              <li className="after:content-['\00b7'] after:mx-1">R</li>
              <li className="after:content-['\00b7'] after:mx-1">SQL</li>
              <li>Java</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg">Languages</h2>
            <ul className="ml-1 text-xs font-light">
              <li>English (proficient)</li>
              <li>Korean (native)</li>
            </ul>
          </section>
        </article>
        <article className="flex-grow bg-zinc-50 p-6 space-y-8">
          <section className="space-y-2">
            <h2 className="text-lg">Work Experience</h2>
            <ul className="ml-1 text-sm font-light space-y-4">
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Frontend Developer</div>
                      <div className="font-light text-2xs text-zinc-500">
                        (
                        <a
                          href="https://www.sook.dev/experience#fe-3i"
                          target="_blank"
                          // className="underline"
                        >
                          more info
                        </a>
                        )
                      </div>
                    </div>
                    <div className="text-xs">
                      <a
                        href="https://www.3i.ai/"
                        target="_blank"
                        className="flex items-center"
                      >
                        3i Inc.
                      </a>
                    </div>
                  </div>
                  <div className="text-2xs flex justify-between">
                    <div>Seoul, South Korea</div>
                    <div>Jun 2021 - Oct 2022</div>
                  </div>
                </h3>
                <ul className="text-xs font-light">
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Rewrote the entire legacy 3D JavaScript library with{" "}
                      <span className="font-medium text-zinc-700">
                        TypeScript
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        three.js
                      </span>
                      , and{" "}
                      <span className="font-medium text-zinc-700">gsap</span>;
                      3D panoramic view, navigation, and measurement system
                      similar to Google Street View.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Created thorough{" "}
                      <span className="font-medium text-zinc-700">
                        documentations
                      </span>{" "}
                      for the above library using{" "}
                      <span className="font-medium text-zinc-700">
                        VitePress
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-zinc-700">
                        Docusaurus
                      </span>
                      :
                      <a
                        href="https://tour3d-v1.vercel.app/"
                        target="_blank"
                        className="ml-1 underline"
                      >
                        Docs v1
                      </a>
                      <a
                        href="https://tour3d-v2.vercel.app/"
                        target="_blank"
                        className="ml-1 underline"
                      >
                        Docs v2
                      </a>
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Updated and migrated UIs (from{" "}
                      <span className="font-medium text-zinc-700">Vue2</span> to{" "}
                      <span className="font-medium text-zinc-700">Vue3</span>)
                      that wrap around the{" "}
                      <span className="font-medium text-zinc-700">
                        three.js
                      </span>{" "}
                      app based on Figma designs from design team.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Frontend Developer</div>
                      <div className="font-light text-2xs text-zinc-500">
                        (
                        <a
                          href="https://www.sook.dev/experience#fe-dawin"
                          target="_blank"
                          // className="underline"
                        >
                          more info
                        </a>
                        )
                      </div>
                    </div>
                    <div className="text-xs">
                      <a
                        href="https://dawin.xyz/"
                        target="_blank"
                        className="flex items-center"
                      >
                        Dawinproperty
                      </a>
                    </div>
                  </div>
                  <div className="text-2xs flex justify-between">
                    <div>Seoul, South Korea</div>
                    <div>Dec 2020 - Jun 2021</div>
                  </div>
                </h3>
                <ul className="text-xs font-light">
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Added new map features such as satellite view, terrain
                      view, and distant measurement to the existing{" "}
                      <span className="font-medium text-zinc-700">React</span>{" "}
                      app; similar to Google Maps.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Rewrote 'post home for sale' multi-step{" "}
                      <span className="font-medium text-zinc-700">
                        web form
                      </span>{" "}
                      in the{" "}
                      <span className="font-medium text-zinc-700">React</span>{" "}
                      app to have a persistent draft state in DB (
                      <span className="font-medium text-zinc-700">MySQL</span>)
                      before the submission is completed.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Created a{" "}
                      <span className="font-medium text-zinc-700">Node.js</span>{" "}
                      web scraper (
                      <span className="font-medium text-zinc-700">
                        Express.js
                      </span>
                      ) to collect and aggregate home prices from a 3rd-party
                      website.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Added an{" "}
                      <span className="font-medium text-zinc-700">
                        API endpoint
                      </span>{" "}
                      to our{" "}
                      <span className="font-medium text-zinc-700">
                        Express.js
                      </span>{" "}
                      backend to serve (and cache) data collected by the above
                      web scraper.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Added{" "}
                      <span className="font-medium text-zinc-700">
                        UI components
                      </span>{" "}
                      to the{" "}
                      <span className="font-medium text-zinc-700">React</span>{" "}
                      app that request (
                      <span className="font-medium text-zinc-700">
                        Redux-Saga
                      </span>
                      ) and show the data from the above API endpoint.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Software Engineer</div>
                      <div className="font-light text-2xs text-zinc-500">
                        (
                        <a
                          href="https://www.sook.dev/experience#swe-agilesoda"
                          target="_blank"
                          // className="underline"
                        >
                          more info
                        </a>
                        )
                      </div>
                    </div>
                    <div className="text-xs">
                      <a
                        href="http://www.agilesoda.com/"
                        target="_blank"
                        className="flex items-center"
                      >
                        AgileSoDA
                      </a>
                    </div>
                  </div>
                  <div className="text-2xs flex justify-between">
                    <div>Seoul, South Korea</div>
                    <div>Apr 2019 - Dec 2020</div>
                  </div>
                </h3>
                <ul className="text-xs font-light">
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Fixed bugs, implemented new UI designs, and added new
                      features to the existing{" "}
                      <span className="font-medium text-zinc-700">React</span>{" "}
                      app (
                      <span className="font-medium text-zinc-700">
                        Class Components, Redux, Webpack, Sass
                      </span>
                      ).
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Wrote a new{" "}
                      <span className="font-medium text-zinc-700">React</span>{" "}
                      app containing interactive UI elements such as sortable
                      tables, modals, settings page, and charts using{" "}
                      <span className="font-medium text-zinc-700">
                        React hooks, React Router, React Table, Apache ECharts,
                        Blueprint JS
                      </span>
                      .
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Added new{" "}
                      <span className="font-medium text-zinc-700">
                        REST API
                      </span>{" "}
                      endpoints to our{" "}
                      <span className="font-medium text-zinc-700">Java</span>{" "}
                      backend (
                      <span className="font-medium text-zinc-700">
                        Eclipse Vert.x
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-zinc-700">MariaDB</span>
                      ) for the new features.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="font-normal">Data Analyst</h3>
                <div className="text-2xs flex justify-between">
                  <div>Seoul, South Korea</div>
                  <div className="flex items-center">
                    <a
                      href="http://www.agilesoda.com/"
                      target="_blank"
                      className="font-normal"
                    >
                      AgileSoDA
                    </a>
                    <span className="mr-2">,</span>
                    <span className="mr-1">Apr 2017 - Apr 2019</span>
                    <span className="font-light text-2xs text-zinc-500">
                      (
                      <a
                        href="https://www.sook.dev/experience#da-agilesoda"
                        target="_blank"
                        // className="underline"
                      >
                        more info
                      </a>
                      )
                    </span>
                  </div>
                </div>
                <div className="text-2xs flex justify-between">
                  <div>Seoul, South Korea</div>
                  <div className="flex items-center">
                    <a
                      href="http://www.mobigen.com/eng/index.php"
                      target="_blank"
                      className="font-normal"
                    >
                      Mobigen
                    </a>
                    <span className="mr-2">,</span>
                    <span className="mr-1">Sep 2016 - Apr 2017</span>
                    <span className="font-light text-2xs text-zinc-500">
                      (
                      <a
                        href="https://www.sook.dev/experience#da-mobigen"
                        target="_blank"
                        // className="underline"
                      >
                        more info
                      </a>
                      )
                    </span>
                  </div>
                </div>
                <div className="text-2xs flex justify-between">
                  <div>Seoul, South Korea</div>
                  <div className="flex items-center">
                    <span className="font-normal">NowDream</span>
                    <span className="mr-2">,</span>
                    <span className="mr-1">Jul 2015 - Aug 2016</span>
                    <span className="font-light text-2xs text-zinc-500">
                      (
                      <a
                        href="https://www.sook.dev/experience#da-nowdream"
                        target="_blank"
                        // className="underline"
                      >
                        more info
                      </a>
                      )
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
