<div data-status="{!! $status !!}" class="group grid gap-[12px] rounded-[6px] bg-[color:var(--bg0)] relative" x-data="{ showLink: false }">
  @if($status === 'draft' || $status === 'private')
    <div
      class="absolute w-full h-full top-0 left-0 rounded-[6px] z-50 pointer-events-none opacity-[0.9] group-hover:opacity-[0.3] transition-opacity"
      style="
        background-color: #22272e;
        background-image:  linear-gradient(30deg, #2d333b 12%, transparent 12.5%, transparent 87%, #2d333b 87.5%, #2d333b), linear-gradient(150deg, #2d333b 12%, transparent 12.5%, transparent 87%, #2d333b 87.5%, #2d333b), linear-gradient(30deg, #2d333b 12%, transparent 12.5%, transparent 87%, #2d333b 87.5%, #2d333b), linear-gradient(150deg, #2d333b 12%, transparent 12.5%, transparent 87%, #2d333b 87.5%, #2d333b), linear-gradient(60deg, #2d333b77 25%, transparent 25.5%, transparent 75%, #2d333b77 75%, #2d333b77), linear-gradient(60deg, #2d333b77 25%, transparent 25.5%, transparent 75%, #2d333b77 75%, #2d333b77);
        background-size: 20px 35px;
        background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
      "
    >
    </div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 z-[51] dark:text-white text-[24px] font-bold pointer-events-none group-hover:opacity-0 transition-opacity uppercase">
      {!! $status !!}
    </div>
  @endif
  {{-- content --}}
  <div class="px-[12px] pt-[12px] rounded-t-[6px] bg-[color:var(--bg0)]">
    <div class="grid grid-cols-[auto,auto,auto] items-center">
      @if ($f_category)
        <div class="flex">
          <ul class="flex gap-[8px]">
            @foreach ($f_category as $key => $term)
              <li class="w-[16px] h-[32px] relative">
                <a href="{!! $term->homepage_url !!}" target="_blank"
                  class="w-[32px] h-[32px] rounded-full overflow-hidden absolute shadow-md d-block @if ($key == 0) z-10 @endif"
                  rel="noopener noreferrer">
                  <img src="{!! $term->icon_url !!}" alt="{!! $term->icon_alt !!}">
                </a>
              </li>
            @endforeach
          </ul>
        </div>
      @endif
      <div class="justify-self-center">
        {!! $title !!}
      </div>
      <div class="justify-self-end">
        {!! $filterDate !!}
      </div>
    </div>
  </div>
  {{-- thumbnail --}}
  <a href="{!! $permalink !!}">
    <div class="aspect-w-16 aspect-h-9 rounded-[6px] shadow-sm overflow-hidden z-30 relative">
      {!! $thumbnail !!}
    </div>
  </a>
  {{-- <button @if (!empty($links)) @click.prevent="showLink=!showLink" @endif
    class="aspect-w-16 aspect-h-9 rounded-[6px] shadow-sm overflow-hidden z-30 relative"
    :class="{ '!z-[90] relative': showLink }">
    {!! $thumbnail !!}
  </button> --}}
  {{--
    TODO: Radix DropdownMenu 를사용해서 list를 보여주는 것으로 구현하자
    https://www.radix-ui.com/docs/primitives/components/dropdown-menu
   --}}
  @if (!empty($links))
    <ul x-show="showLink" x-cloak @click.away="showLink = false" x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100"
      x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
      x-transition:leave-end="opacity-0 transform scale-90"
      class="absolute top-full left-0 w-full bg-[color:var(--bg0)] rounded-b-[6px] shadow-sm px-[12px] py-[12px] pt-[20px] z-20 -translate-y-2"
      :class="{ '!z-[50]': showLink }">
      @foreach ($links as $link)
        <li>
          <a href="{!! $link['url'] !!}" target="_blank" rel="noopener noreferrer">{!! $link['name'] !!}</a>
        </li>
      @endforeach
    </ul>
  @endif
</div>
