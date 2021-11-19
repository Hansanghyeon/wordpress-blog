
<div class="py-3 flex items-center justify-center">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="{!! $prevlink !!}" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Previous
    </a>
    <a href="{!! $nextlink !!}" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Next
    </a>
  </div>
  <div>
    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
      <a href="{!! $prevlink !!}" class="relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium btn-white">
        <span class="sr-only">Previous</span>
        <!-- Heroicon name: solid/chevron-left -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </a>
      @for ($i = 1; $i < $pages; $i++)
        @if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems))
          @if ($paged == $i)
            <span class="z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-white active">{!! $i !!}</span>
          @else
            <a href="{!! get_pagenum_link($i) !!}" class="btn-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">{!! $i !!}</a>
          @endif
        @endif
      @endfor
      <span class="relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-white">...</span>
      <a href="{!! $lastlink !!}" class="relative inline-flex items-center px-4 py-2 border text-sm font-medium btn-white">{!! $pages !!}</a>
      <a href="{!! $nextlink !!}" class="relative inline-flex items-center px-2 py-2 rounded-r-md border  text-sm font-medium btn-white">
        <span class="sr-only">Next</span>
        <!-- Heroicon name: solid/chevron-right -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </a>
    </nav>
  </div>
</div>