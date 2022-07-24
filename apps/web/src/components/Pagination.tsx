import type { WPPageInfo } from '~web/client';
import { v4 as uuidv4 } from 'uuid';
import Link from '~web/components/atom/Link/Link';
import clsx from 'clsx';
export interface PaginationProps {
  pageInfo?: WPPageInfo;
  basePath: string;
  per?: number;
  hasPrevious: boolean;
  hasMore: boolean;
  total: number;
  current?: number;
  midSize?: number;
}

const Pagination = ({
  basePath,
  per = 5,
  midSize = 5,
  current,
  total,
}: PaginationProps) => {
  const t = current ? Math.floor(current / midSize) : 0;
  const r = midSize * t === 0 ? 1 : midSize * t;
  const url = (pageNumber) => `${basePath}/page/${pageNumber}`;
  const last = Math.floor(total / per);
  const hasMoreNext = r + midSize < last;
  const hasMoreNextStep = !(last - midSize < current && current < last);
  const hasMorePrev = !(r - 1 > 0);
  const hasMorePrevStep = !(current > 0 && current < midSize);

  return (
    <>
      <div className="grid grid-cols-1 items-center justify-center gap-x-[18px] gap-y-[18px] py-3">
        <div className="justify-self-center">
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {/* 첫번째 페이지네이션일때 보이지 않게 */}
            {!(current > 0 && current < midSize) && (
              <>
                <Link
                  href={url(1)}
                  className="btn-light dark:btn-dark relative inline-flex items-center rounded-l-md border px-3 py-2 text-sm font-medium "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[1em] w-[1em]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </>
            )}

            <Link
              href={r - 1 > 0 && url(r - 1)}
              disabled={hasMorePrev}
              className={clsx(
                'btn-light dark:btn-dark relative inline-flex items-center border px-2 py-2 text-[14px] font-medium',
                { 'rounded-l-md': !hasMorePrevStep },
              )}
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1.2em] w-[1.2em]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {[...new Array(midSize)].map((_, index) => {
              const pageNumber = index + r;
              if (pageNumber > last) return true;
              if (pageNumber === current) {
                return (
                  <Link
                    key={uuidv4()}
                    className="btn-primary-light dark:btn-primary-dark relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium"
                    disabled
                  >
                    {pageNumber}
                  </Link>
                );
              }
              return (
                <Link
                  key={uuidv4()}
                  href={url(pageNumber)}
                  className="btn-light dark:btn-dark relative inline-flex items-center border px-4 py-2 text-sm font-medium"
                >
                  {pageNumber}
                </Link>
              );
            })}

            {/* NEXT Paignation */}
            <Link
              href={hasMoreNext && url(r + midSize)}
              disabled={!hasMoreNext}
              className={clsx(
                'btn-light dark:btn-dark relative inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-medium',
                { 'rounded-r-md': !hasMoreNextStep },
              )}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-[1.2em] w-[1.2em]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            {/* 마지막 페이지네이션일때 보이지 않게 */}
            {!(last - midSize < current && current < last) && hasMoreNext && (
              <>
                <Link
                  href={url(last)}
                  className="btn-light dark:btn-dark relative inline-flex items-center rounded-r-md border px-3 py-2 text-sm font-medium "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[1em] w-[1em]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
