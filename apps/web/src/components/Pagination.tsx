import type { WPPageInfo } from "~web/client";
import { v4 as uuidv4 } from 'uuid';
import Link from "~web/components/atom/Link/Link";

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

export default function Pagination({ hasPrevious, hasMore, basePath, per = 5, midSize = 5, current, total }: PaginationProps) {
  const t = current ? Math.floor(current / midSize) : 0;
  const r = midSize * t === 0 ? 1 : midSize * t;
  const url = (pageNumber) => `${basePath}/page/${pageNumber}`;
  const last = Math.floor(total / per);

  return (
    <>
      <div className="py-3 grid grid-cols-1 gap-x-[18px] gap-y-[18px] items-center justify-center">
        <div className="justify-self-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <Link href={hasPrevious && url(r - 1)} disabled={!hasPrevious} className="relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium btn-light dark:btn-dark">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* 첫번째 페이지네이션일때 보이지 않게 */}
            {!(0 < current && current < midSize) && (
              <>
                <Link href={url(1)} className="relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-light dark:btn-dark">1</Link>
                <Link className="relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-light dark:btn-dark" disabled>...</Link>
              </>
            )}

            {[...(new Array(midSize))].map((_, index) => {
              const pageNumber = index + r;
              if (pageNumber === current) {
                return <Link key={uuidv4()} className="z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-primary-light dark:btn-primary-dark" disabled>{pageNumber}</Link>
              }
              return <Link key={uuidv4()} href={url(pageNumber)} className="btn-light dark:btn-dark relative inline-flex items-center px-4 py-2 border text-sm font-medium">{pageNumber}</Link>;
            })}

            {/* 마지막 페이지네이션일때 보이지 않게 */}
            {!(last - midSize < current && current < last) && (
              <>
                <Link className="relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-light dark:btn-dark" disabled>...</Link>
                <Link href={url(last)} className="relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-light dark:btn-dark">{last}</Link>
              </>
            )}
            <Link href={hasMore && url(r + midSize)} disabled={!hasMore} className="relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium btn-light dark:btn-dark">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
