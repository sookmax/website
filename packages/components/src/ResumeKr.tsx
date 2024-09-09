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

export function ResumeKr() {
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
          <div className="text-4xl">정 석 규</div>
          <div>프론트엔드 개발자</div>
        </h1>
        <div className="flex justify-center items-center print:hidden">
          <a href={generateImageUrl("/resume_kr.pdf")} target="_blank">
            <Download />
          </a>
        </div>
      </header>
      <div className="flex-grow flex">
        <article className="bg-zinc-200 p-6 space-y-8 w-[275px] flex-shrink-0">
          <section className="space-y-2">
            <h2 className="text-lg">연락처</h2>
            <ul className="ml-1 space-y-1 text-xs font-light">
              <li className="flex items-center gap-2">
                <Link className="w-4 h-4" />
                <a href="https://www.sook.dev/" target="_blank">
                  sook.dev
                </a>
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
            <h2 className="text-lg">학력</h2>
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
            <h2 className="text-lg">오픈소스 기여</h2>
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
            <h2 className="text-lg">스킬</h2>
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
            <h2 className="text-lg">외국어</h2>
            <ul className="ml-1 text-xs font-light">
              <li>English (proficient)</li>
            </ul>
          </section>
        </article>
        <article className="flex-grow bg-zinc-50 p-6 space-y-8">
          <section className="space-y-4">
            <h2 className="text-lg space-x-2 flex items-center">
              <span>경력</span>
              <span className="text-sm font-normal">
                (현)프론트엔드 4년 / (전)데이터분석가 5년
              </span>
            </h2>
            <ul className="ml-1 text-sm font-light space-y-6">
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>프론트엔드 개발자</div>
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
                    <div className="text-2xs">
                      <div>2021.06 - 2022.10</div>
                    </div>
                  </div>
                  <div className="text-xs flex justify-between">
                    <a
                      href="https://www.3i.ai/"
                      target="_blank"
                      className="flex items-center"
                    >
                      (주)쓰리아이
                    </a>
                  </div>
                </h3>
                <ul className="text-xs font-light">
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      <span className="font-medium text-zinc-700">
                        three.js
                      </span>
                      , <span className="font-medium text-zinc-700">gsap</span>,{" "}
                      <span className="font-medium text-zinc-700">Rollup</span>,{" "}
                      <span className="font-medium text-zinc-700">Vite</span>,{" "}
                      <span className="font-medium text-zinc-700">
                        TypeScript
                      </span>
                      등을 사용하여 Google Street View와 유사한 3D 뷰어{" "}
                      <span className="font-medium text-zinc-700">WebGL</span>{" "}
                      애플리케이션 개발
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      <span className="font-medium text-zinc-700">
                        VitePress
                      </span>{" "}
                      와{" "}
                      <span className="font-medium text-zinc-700">
                        Docusaurus
                      </span>{" "}
                      를 이용하여, 위{" "}
                      <span className="font-medium text-zinc-700">WebGL</span>{" "}
                      애플리케이션의 문서 및 가이드 작성:{" "}
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
                      <span className="font-medium text-zinc-700">Vue2</span> 와{" "}
                      <span className="font-medium text-zinc-700">Vue3</span>를
                      이용하여 위 3D 애플리케이션을 감싸는 UI 구현 (디자인팀
                      figma 디자인 기반)
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>개발팀 / 프론트엔드 개발자</div>
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
                    <div className="text-2xs">
                      <div>2020.12 - 2021.06</div>
                    </div>
                  </div>
                  <div className="text-xs flex justify-between">
                    <a
                      href="https://dawin.xyz/"
                      target="_blank"
                      className="flex items-center"
                    >
                      (주)다윈프로퍼티
                    </a>
                  </div>
                </h3>
                <ul className="text-xs font-light">
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      카카오맵 API를 이용하여 지도기반 웹 (
                      <span className="font-medium text-zinc-700">React</span>)
                      애플리케이션의 부가기능 개발 (스카이뷰, 지젹편집도,
                      거리재기 등)
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      자사 집내놓기 서비스 리팩토링 및 기능 강화:{" "}
                      <span className="font-medium text-zinc-700">React</span>앱
                      form 예외처리, server-side 임시저장 및 매물수정 기능 (
                      <span className="font-medium text-zinc-700">Node.js</span>
                      , <span className="font-medium text-zinc-700">MySQL</span>
                      )
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      네이버부동산 데이터를 수집하는 web scraper 개발 (
                      <span className="font-medium text-zinc-700">Node.js</span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        Express.js
                      </span>
                      )
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      위 수집된 데이터를 실시간 가공 (필요에 따라 DB에 cache)
                      하여 client에 결과를 제공하는 API 개발 (
                      <span className="font-medium text-zinc-700">
                        Express.js
                      </span>
                      , <span className="font-medium text-zinc-700">MySQL</span>
                      )
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      위 API를 호출하여 정보를 보여주는 UI 개발 (
                      <span className="font-medium text-zinc-700">React</span>,{" "}
                      <span className="font-medium text-zinc-700">
                        React Router
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        Redux-Saga
                      </span>
                      )
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>
                  <div className="font-normal flex justify-between">
                    <div className="flex items-center gap-1">
                      <div>플랫폼팀 / 책임 연구원</div>
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
                    <div className="text-2xs">
                      <div>2019.04 - 2020.12</div>
                    </div>
                  </div>
                  <div className="text-xs flex justify-between">
                    <a
                      href="http://www.agilesoda.com/"
                      target="_blank"
                      className="flex items-center"
                    >
                      (주)애자일소다
                    </a>
                  </div>
                </h3>
                <ul className="text-xs font-light">
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      신규 자사 B2B SaaS 제품 UI 개발 (
                      <span className="font-medium text-zinc-700">React</span>,{" "}
                      <span className="font-medium text-zinc-700">
                        styled-components
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        Chart.js
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        Apache Echarts
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        MonacoEditor
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        Blueprint.js
                      </span>
                      )
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      기존 자사 B2B SaaS 제품 UI 기능 추가, 스타일 개선, 버그
                      수정 (
                      <span className="font-medium text-zinc-700">React</span>,{" "}
                      <span className="font-medium text-zinc-700">Redux</span>,{" "}
                      <span className="font-medium text-zinc-700">Sass</span>,{" "}
                      <span className="font-medium text-zinc-700">Webpack</span>
                      )
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      기존 자사 B2B SaaS 제품 backend 기능 추가, 버그 수정 (
                      <span className="font-medium text-zinc-700">Java 8</span>,{" "}
                      <span className="font-medium text-zinc-700">
                        Eclipse Vert.x
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">MariaDB</span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">MongoDB</span>
                      )
                    </p>
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <p>
                      기존 자사 B2B SaaS 제품 infrastructure 개발 지원 (
                      <span className="font-medium text-zinc-700">Docker</span>,{" "}
                      <span className="font-medium text-zinc-700">
                        Kubernetes
                      </span>
                      ,{" "}
                      <span className="font-medium text-zinc-700">
                        Helm charts
                      </span>
                      )
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="font-normal">데이터 분석가</h3>
                <div className="text-2xs flex justify-between">
                  <div className="space-x-1">
                    <span>컨설팅팀 / 선임 연구원,</span>
                    <a
                      href="http://www.agilesoda.com/"
                      target="_blank"
                      className="font-normal"
                    >
                      (주)애자일소다
                    </a>
                  </div>
                  <div>
                    <span className="mr-1">2017.04 - 2019.04</span>
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
                  <div className="space-x-1">
                    <span>연구소 / 주임,</span>
                    <a
                      href="http://www.mobigen.com/eng/index.php"
                      target="_blank"
                      className="font-normal"
                    >
                      (주)모비젠
                    </a>
                  </div>
                  <div>
                    <span className="mr-1">2016.09 - 2017.04</span>
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
                  <div className="space-x-1">
                    <span>R&D 전략기획실 / 사원,</span>
                    <span className="font-normal">(주)나우드림</span>
                  </div>
                  <div>
                    <span className="mr-1">2015.07 - 2016.08</span>
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
