import React from 'react'
import { useState, useEffect } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { pipe } from 'fp-ts/function'
import * as S from 'fp-ts/string'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import * as RA from 'fp-ts/ReadonlyArray'
import * as O from 'fp-ts/Option'
import 'twin.macro'
import tw from 'twin.macro'
import CHANGELOG_RAW from '../../../CHANGELOG.md?raw'

function Logs({ logs }: { logs: readonly string[][] }) {
  return (
    <div>
      {pipe(
        logs,
        RA.mapWithIndex((index, log) => {
          const version = log[0]
          return (
            <React.StrictMode>
              <div
                key={`timeline-${index}`}
                tw="grid grid-rows-[auto,auto] md:grid-rows-1 grid-cols-[24px,1fr] md:grid-cols-[100px,24px,1fr] gap-[18px]"
              >
                <div tw="font-bold order-2 md:order-first flex gap-[5px]">
                  <Markdown children={log[1]} remarkPlugins={[remarkGfm]} />
                  <div tw="md:hidden">
                    <Markdown children={log[0]} remarkPlugins={[remarkGfm]} />
                  </div>
                </div>
                <div
                  id={version}
                  tw="order-1 scroll-mt-[calc(var(--topAreaHeight)+20px)] flex flex-col items-center row-span-2 md:row-span-1"
                >
                  <a
                    href={`#${version}`}
                    className="circle"
                    css={[
                      tw`w-[24px] h-[24px] rounded-full block relative`,
                      index !== 0 &&
                        tw`border-4 border-bombay-100 dark:border-[#444c56]`,
                    ]}
                  >
                    {index === 0 && (
                      <i
                        className="icon-back-in-time"
                        tw="position-center text-[24px] text-shamrock-500"
                      ></i>
                    )}
                  </a>
                  <div
                    className="bar"
                    css={[
                      tw`w-[4px] h-[calc(100%-24px)] rounded-full`,
                      index === 0
                        ? tw`bg-shamrock-500`
                        : tw`bg-bombay-100 dark:bg-[#444c56]`,
                    ]}
                  ></div>
                </div>
                <div
                  css={[
                    tw`order-3 mb-[40px] p-[16px] border rounded-[6px] border-[#d0d7de] dark:border-[#444c56] shadow-sm bg-[color:var(--bg0)]`,
                  ]}
                >
                  <div tw="hidden md:block mb-[20px]">
                    <Markdown children={log[0]} remarkPlugins={[remarkGfm]} />
                  </div>
                  <div tw="prose prose-sm">
                    <Markdown children={log[2]} remarkPlugins={[remarkGfm]} />
                  </div>
                </div>
              </div>
            </React.StrictMode>
          )
        }),
      )}
    </div>
  )
}

export default function History() {
  const [desc, setDesc] = useState('')
  const [logs, setLogs] = useState<readonly string[][] | undefined>(undefined)

  useEffect(() => {
    if (!logs) {
      fetchChangelog()
    }
  }, [desc, logs])

  function fetchChangelog() {
    /**
     * 로그의 버전별로 나눈다.
     * array[
     *    array[version, date, content]
     * ]
     */
    const versionLogs = pipe(
      CHANGELOG_RAW,
      S.split('\n## '),
      RNEA.mapWithIndex((index, section) => {
        if (index > 0) {
          const result = pipe(
            section,
            S.split(/(.*?) ([0-9]{4}-[0-9]{2}-[0-9]{2}?)/),
            (e) => e.slice(1),
          )
          return result
        }
        return [section]
      }),
      // ReadonlyNonEmptyArray를 어떻게 string[]으로 바꾸지?
      RA.map((e) => e),
      (e) => e,
    )
    const head = pipe(
      versionLogs,
      RA.head,
      O.fold(
        () => '',
        (e) => e[0],
      ),
    )
    const other = pipe(
      versionLogs,
      RA.tail,
      O.fold(
        () => [],
        (e) => e,
      ),
    )

    setDesc(head)
    setLogs(other)
  }

  return (
    <div className="group" tw="lg:translate-x-[-160px] lg:w-[calc(100%+160px)]">
      <div tw="lg:pl-[160px] mb-[40px] prose">
        <Markdown children={desc.toString()} remarkPlugins={[remarkGfm]} />
      </div>
      {logs && <Logs logs={logs} />}
    </div>
  )
}
