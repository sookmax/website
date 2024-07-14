import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link,
  Dot,
  ExternalLink,
  Download,
} from "lucide-react";
import { AvatarSlot } from "./Avatar.primitives";
import { generateImageUrl } from "./generateImageUrls";

export function ResumeEn() {
  return (
    <main className="flex flex-col w-full h-full">
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
          <a
            href={generateImageUrl("/resume_en.pdf")}
            download="sukkyu_chung_resume.pdf"
          >
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
                <div>GPA 3.9</div>
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
                >
                  adobe/react-spectrum (27 merged)
                </a>
              </li>
              <li className="flex items-center gap-1">
                <a
                  href="https://github.com/storybookjs/storybook/pulls?q=is%3Apr+is%3Aclosed+author%3Asookmax"
                  target="_blank"
                >
                  storybookjs/storybook (6 merged)
                </a>
              </li>
              <li className="flex items-center gap-1">
                <a
                  href="https://github.com/nkzw-tech/athena-crisis/pulls?q=is%3Apr+is%3Aclosed+author%3Asookmax"
                  target="_blank"
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
                      <a
                        href="https://www.sook.dev/experience#fe-3i"
                        target="_blank"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center gap-1">
                        <span>3i Inc.</span>
                        <a
                          href="https://www.3i.ai/"
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
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
                      Rewrote the entire legacy 3D JavaScript library with
                      TypeScript, three.js, and gsap; 3D panoramic view,
                      navigation, and measurement system similar to Google
                      Street View.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Created thorough documentations for said library using
                      VitePress and Docusaurus:
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
                      Updated and migrated UIs that sit on top of said 3D app
                      using Vue2 and Vue3 based on Figma designs from design
                      team.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Frontend Developer</div>
                      <a
                        href="https://www.sook.dev/experience#fe-dawin"
                        target="_blank"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center gap-1">
                        <span>Dawinproperty</span>
                        <a
                          href="https://dawin.xyz/"
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
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
                      Added additional map layers and tools such as satellite
                      view, terrain view, and distant measurement using APIs
                      provided by a 3rd-party map provider in a React app;
                      similar to Google Maps.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Rewrote 'post home for sale' multi-step form in a React
                      app to have a draft state in DB (MySQL) before the final
                      submission so that users wouldn't lose their progress by
                      accident.
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Created a separate node.js web scraper (Express.js) to
                      collect and aggregate home prices from a 3rd-party website
                      by apartment and size dynamically on request.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Software Engineer</div>
                      <a
                        href="https://www.sook.dev/experience#swe-agilesoda"
                        target="_blank"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center gap-1">
                        <span>AgileSoDA</span>
                        <a
                          href="http://www.agilesoda.com/"
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
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
                      Fixed bugs, renew designs, and added new features to the
                      existing React app (Class Components, Redux, Webpack,
                      Blueprint.js, Sass)
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Wrote a new React app for a new product we were preparing
                      to launch (React hooks, React Router, Blueprint.js,
                      TanStack Table, Apache ECharts)
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      Added new REST API endpoints to our Java backend (Eclipse
                      Vert.x)
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Data Analyst</div>
                      <a
                        href="https://www.sook.dev/experience#da-agilesoda"
                        target="_blank"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center gap-1">
                        <span>AgileSoDA</span>
                        <a
                          href="http://www.agilesoda.com/"
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs flex justify-between">
                    <div>Seoul, South Korea</div>
                    <div>Apr 2017 - Apr 2019</div>
                  </div>
                </h3>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Data Analyst</div>
                      <a
                        href="https://www.sook.dev/experience#da-mobigen"
                        target="_blank"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center gap-1">
                        <span>Mobigen</span>
                        <a
                          href="http://www.mobigen.com/eng/index.php"
                          target="_blank"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs flex justify-between">
                    <div>Seoul, South Korea</div>
                    <div>Sep 2016 - Apr 2017</div>
                  </div>
                </h3>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>Data Analyst</div>
                      <a
                        href="https://www.sook.dev/experience#da-nowdream"
                        target="_blank"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-center gap-1">
                        <span>NowDream</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs flex justify-between">
                    <div>Seoul, South Korea</div>
                    <div>Jul 2015 - Aug 2016</div>
                  </div>
                </h3>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
