<div class="grid grid-cols-1 gap-x-[18px] items-center justify-center">
  <div class="justify-self-center items-center flex gap-[10px]">
    <nav class="order-2 relative z-0 mx-[6px] inline-flex gap-x-[16px] rounded-md -space-x-px text-[#999999]" aria-label="Pagination">
      @for ($i = $startPage; $i <= $endPage; $i++)
        {{-- 선택된 페이지일때 --}}
        @if ($paged == $i)
          <span class="z-10 relative inline-flex items-center text-[16px] font-normal text-black">{!! $i !!}</span>
        @else
          <a href="{!! get_pagenum_link($i) !!}{!! $anchor !!}" class=" relative inline-flex items-center text-[16px] font-normal">{!! $i !!}</a>
        @endif
      @endfor
    </nav>

    {{-- Arrow --}}
    <div class="order-1">
      <a
        {{-- firstlink는 없을수있다. 아카이브 페이지에 포스트가 너무적어서 페이지네이션이 안될때. --}}
        @if(!empty($firstlink) && $paged != 1) href="{!! $firstlink['link'] !!}{!! $anchor !== '' ? $anchor : '' !!}" @endif
        x-data="{isLast: {!! $paged == 1 ? 'true' : 'false' !!}}"
        class="relative inline-flex items-center justify-center px-[4px] h-[28px] rounded-[4px] border text-[20px]"
        :class="{'text-[#999999]': isLast}"
      >
        <span class="sr-only">First</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[0.8em] h-[0.8em]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
      </a>
      <a
        {{-- $prevlink 는 없을수있다. 아카이브 페이지에 포스트가 너무적어서 페이지네이션이 안될때. --}}
        @if(!empty($prevlink) && $paged != 1) href="{!! $prevlink !!}{!! $anchor !== '' ? $anchor : '' !!}" @endif
        x-data="{isLast: {!! $paged == 1 ? 'true' : 'false' !!}}"
        class="relative inline-flex items-center justify-center px-[4px] h-[28px] rounded-[4px] border text-[20px]"
        :class="{'text-[#999999]': isLast}"
      >
        <span class="sr-only">Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[0.8em] h-[0.8em]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </a>
    </div>

    <div class="order-3">
      <a
        {{-- $nextlink 는 없을수있다. 아카이브 페이지에 포스트가 너무적어서 페이지네이션이 안될때. --}}
        @if(!empty($nextlink) && $nextlink != '')href="{!! $nextlink !!}{!! $anchor !== '' ? $anchor : '' !!}"@endif
        x-data="{isLast: {!! $nextlink == '' ? 'true' : 'false' !!}}"
        class="relative inline-flex items-center justify-center px-[4px] h-[28px] rounded-[4px] border text-[20px]"
        :class="{'text-[#999999]': isLast}"
      >
        <span class="sr-only">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[0.8em] h-[0.8em]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </a>
      <a
        {{-- $lastlink 는 없을수있다. 아카이브 페이지에 포스트가 너무적어서 페이지네이션이 안될때. --}}
        @if(!empty($lastlink) && $lastlink['link'] != '')href="{!! $lastlink['link'] !!}{!! $anchor !== '' ? $anchor : '' !!}"@endif
        x-data="{isLast: {!! !empty($lastlink) && $lastlink['link'] == '' ? 'true' : 'false' !!}}"
        class="relative inline-flex items-center justify-center px-[4px] h-[28px] rounded-[4px] border text-[20px]"
        :class="{'text-[#999999]': isLast}"
      >
        <span class="sr-only">Last</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[0.8em] h-[0.8em]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </div>
  </div>
</div>
