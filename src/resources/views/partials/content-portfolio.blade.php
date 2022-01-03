<div class="grid gap-[12px] rounded-[6px] bg-[color:var(--bg0)] relative" x-data="{showLink: false}">
  {{-- content --}}
  <div class="px-[12px] pt-[12px] rounded-t-[6px] bg-[color:var(--bg0)]">
    <div class="grid grid-cols-[auto,auto,auto] items-center">
      @if ($categories)
        <ul class="flex gap-[8px]">
          @foreach ($categories as $category)
            <div class="w-[32px] h-[32px] rounded-full overflow-hidden">
              <img src="{!! $category['icon']['src'] !!}" alt="{!! $category['icon']['alt'] !!}">
            </div>
          @endforeach
        </ul>
      @endif
      <div class="justify-self-center">
        <a href="{!! $permalink !!}">{!! $title !!}</a>
      </div>
      <div class="justify-self-end">
        {!! $filterDate !!}
      </div>
    </div>
  </div>
  {{-- thumbnail --}}
  <button @if (!empty($links)) @click.prevent="showLink=!showLink" @endif class="aspect-w-16 aspect-h-9 rounded-[6px] shadow-sm overflow-hidden z-30 relative" :class="{'!z-[90] relative': showLink}">
    {!! $thumbnail !!}
  </button>
  @if (!empty($links))
    <ul
      x-show="showLink"
      x-cloak
      @click.away="showLink = false"
      x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0 transform scale-90"
      x-transition:enter-end="opacity-100 transform scale-100"
      x-transition:leave="transition ease-in duration-200"
      x-transition:leave-start="opacity-100 transform scale-100"
      x-transition:leave-end="opacity-0 transform scale-90"
      class="absolute top-full left-0 w-full bg-[color:var(--bg0)] rounded-b-[6px] shadow-sm px-[12px] py-[12px] pt-[20px] z-20 -translate-y-2"
      :class="{'!z-[50]': showLink}"
    >
      @foreach ($links as $link)
          <li>
            <a href="{!! $link['url'] !!}" target="_blank" rel="noopener noreferrer">{!! $link['name'] !!}</a>
          </li>
      @endforeach
    </ul>
  @endif
</div>