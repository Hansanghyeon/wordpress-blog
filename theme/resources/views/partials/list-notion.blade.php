@if ($categories)
  <ul>
    @foreach ($categories as $term)
      <li>
        <a href="{!! $term->permalink !!}" class="text-light-text dark:text-gray-300 flex w-full gap-x-[8px]">
          @isset($term->icon_src)
            <div class="flex items-center justify-center overflow-hidden rounded-[3px] text-center @isset ($term->icon_is_cover)transform scale-[1.8] @endisset">
              <img src="{!! $term->icon_src !!}" alt="{!! $term->icon_alt !!}" class="h-[1em] mb-0">
            </div>
          @endisset
          <span>{!! $term->name !!}</span>
        </a>
      </li>
    @endforeach
  </ul>
@endif
