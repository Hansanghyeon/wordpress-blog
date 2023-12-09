{{-- $nav_obj는 WP_Post Object이고 children을 가지고있다. 메뉴를 만들어야한다 --}}
<nav class="{{ $class }}" style="--h: 100%">
  <ul class="flex h-[var(--h)] items-center">
    @foreach($nav_obj as $nav_item)
      <li class="nav-item h-[var(--h)]">
        {{-- children이있다면 Collapse를 만들고 없다면 링크로만든다 --}}
        @if(isset($nav_item->children) && count($nav_item->children) > 0)
          <div
            x-data="{ expanded: false }"
            @mouseleave="expanded = false"
            class="relative h-[var(--h)]"
          >
            <button class="h-[var(--h)]" type="button" @click="expanded = ! expanded" @mouseover="expanded = true">
              {{ $nav_item->title }}
            </button>
            <ul x-show="expanded" x-collapse class="absolute top-[var(--h)] p-[8px] bg-white w-[180px] left-1/2 -translate-x-1/2 text-center shadow-sm">
              @foreach($nav_item->children as $nav_child)
                <li>
                  <a class="nav-link whitespace-nowrap" href="{{ $nav_child->url }}">
                    {{ $nav_child->title }}
                  </a>
                </li>
              @endforeach
            </ul>
          </div>
        @else
          <div class="flex justify-center items-center h-[var(--h)]">
            <a class="nav-link p-[4px] rounded-lg hover:bg-shamrock-500 dark:hover:bg-slate-600 transition-colors inline-block" href="{{ $nav_item->url }}">
              @if($nav_item->light_icon)
                <img data-icon="light" src="{{ $nav_item->light_icon['url'] }}" alt="{{ $nav_item->title }}" class="w-[20px] h-[20px] block dark:hidden" />
              @endif
              @if($nav_item->dark_icon)
                <img  data-icon="dark" src="{{ $nav_item->dark_icon['url'] }}" alt="{{ $nav_item->title }}" class="w-[20px] h-[20px] dark:block hidden" />
              @endif
              @if(!$nav_item->light_icon && !$nav_item->dark_icon)
                {{ $nav_item->title }}
              @endif
            </a>
          </div>
        @endif
      </li>
    @endforeach
  </ul>
</nav>
