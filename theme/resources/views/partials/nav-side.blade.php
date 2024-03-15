<nav class="fixed left-0 top-[calc(50%-30dvh)] w-auto pr-[1em] max-h-[60dvh] h-full min-h-[50dvh] min-w-[150px] hidden xl:block layer-shadow-y-light-background dark:layer-shadow-y-dark-background">
  @if ($categories)
    <div class="absolute top-[-1.4em] z-10 py-[0.25em] px-[1em] mb-[0.2em]">🔖 카테고리</div>
    <ul class="pt-[15px] overflow-y-scroll top-0 pb-[0.25em] pr-[1em] mb-[0.2em] absolute h-full scrollbar-hidden">
      @foreach ($categories as $term)
          <li>
            <a class="relative block text-[0.7em] py-[0.25em] px-[1em] pl-[calc(1em+var(--list-padding,0px))] rounded-r-[999px] transition-colors hover:bg-light-primary dark:hover:bg-dark-primary hover:bg-opacity-30 dark:hover:bg-opacity-30" href="{{ $term->link }}">{{ $term->name }}</a>
            @if (count($term->children) > 0)
                <ul class="[--list-padding:0.5em]">
                  @foreach ($term->children as $term2)
                      <li>
                        <a class="relative block text-[0.7em] py-[0.25em] px-[1em] pl-[calc(1em+var(--list-padding,0px))] rounded-r-[999px] transition-colors hover:bg-light-primary dark:hover:bg-dark-primary hover:bg-opacity-30" href="{{ $term2->link }}">{{ $term2->name }}</a>
                      </li>
                  @endforeach
                </ul>
            @endif
          </li>
      @endforeach
    </ul>
  @endif
</nav>
