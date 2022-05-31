import { getNextStaticProps, is404 } from "@faustjs/next";
import { client } from "~web/client";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import cx from "classnames";
import {
  UilGithubAlt,
  UilMailbox,
  UilMobileAndroidAlt,
} from "@iconscout/react-unicons";

export default function Page() {
  const { useQuery } = client;
  const post = useQuery().shortcutPost({
    id: "cG9zdDo1Mzg4",
  });

  return (
    <>
      <div className="container md:max-w-screen-md">
        <section>
          <div className="mb-8 grid gap-x-[20px] gap-y-[20px] sm:mb-4 sm:grid-cols-[125px,auto] lg:gap-x-[40px]">
            <div className="relative overflow-hidden rounded-[16px] sm:h-[125px] sm:rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/42893446?v=4"
                alt="hansanghyeon"
              />
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-[8px]">
              <div className="col-span-2">
                <h4>한상현</h4>
              </div>
              <UilMobileAndroidAlt /> <a href="tel:01053929950">01053929950</a>
              <UilMailbox /> <a href="melto: 999@hyeon.pro">999@hyeon.pro</a>
              <UilGithubAlt />
              <a
                target="_blank"
                href="https://github.com/Hansanghyeon"
                rel="noreferrer"
              >
                Hansanghyeon (999)
              </a>
            </div>
          </div>
          <div className="mb-4">
            <div>주요 기술</div>
            <div>
              {[
                {
                  name: "react",
                  className: "text-[color:#61DAFB]",
                },
                {
                  name: "💅 styled-component",
                  className: "text-[color:#F0B5F2]",
                },
                {
                  name: "sass",
                  className: "text-[color:#CD6899]",
                },
                {
                  name: "tailwind",
                  className: "text-[color:#38BDF9]",
                },
                {
                  name: "docker",
                  className: "text-[color:#38BDF9]",
                },
                { name: "stroybook" },
                { name: "WordPress" },
                { name: "Markup HTML/CSS/JS" },
              ].map(({ name, className }, index) => (
                <>
                  <code
                    className={cx(
                      className,
                      "whitespace-pre bg-slate-600 dark:bg-[color:var(--codeBg)]"
                    )}
                    key={`key-${index}-skill1`}
                  >
                    {name}
                  </code>{" "}
                </>
              ))}
            </div>
          </div>
          <div>
            <div>그 외 다뤄본 기술 & 인프라 기타 등등</div>
            <div>
              {[
                "Cloud AWS/GCP/NCP/Vultr",
                "Redux",
                "Bootstrap 4",
                "Vue 3",
                "Next.js",
                "Gatsby",
                "docker swarm",
                "k8s",
              ].map((name, index) => (
                <>
                  <code key={`key-${index}-skill2`} className="whitespace-pre">
                    {name}
                  </code>{" "}
                </>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: post?.content() ?? "" }} />
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
