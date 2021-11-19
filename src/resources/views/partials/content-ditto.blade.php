<div class="ditto" x-data="{open: false}">
  <div class="ditto-main" {!! $isThumbnail !!}>
    @if ($isThumbnail)
      <div class="ditto-thumbnail">
        {!! $thumbnail !!}
      </div>
    @endif
    <div class="ditto-main-inner" {!! $isThumbnail !!}>
      <div class="ditto-body">
        <h2 class="ditto-title"><a href="{!! $permalink !!}">{!! $title !!}</a></h2>
        <div class="ditto-content">
          {!! $excerpt !!}
        </div>
        @if ($tags)
          <div class="ditto-main-overlay"
            @mouseleave="open = false"
            x-show="open"
            x-cloak
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 transform"
            x-transition:enter-end="opacity-100 transform"
            x-transition:leave="transition ease-in duration-300"
            x-transition:leave-start="opacity-100 transform"
            x-transition:leave-end="opacity-0 transform"
          >
            <ul class="flex gap-1">
              @foreach ($tags as $term)
                <li>
                  <a href="{!! $term['link'] !!}" class="flex items-center">
                    <svg viewBox="0 0 464 464" width="0.8em" height="1em">
                      <path style="fill:currentColor" d="M436,128h-56.504l19.744-85.056c3.504-15.096-5.44-30.288-20.344-34.544
                      c-15.992-4.568-32.56,5.184-36.32,21.384L319.784,128H188.992l19.744-85.056c3.504-15.096-5.44-30.288-20.344-34.544
                      c-15.992-4.568-32.56,5.184-36.32,21.384L129.28,128H64c-15.464,0-28,12.536-28,28s12.536,28,28,28h52.28l-22.288,96H28
                      c-15.464,0-28,12.536-28,28s12.536,28,28,28h52.992l-19.744,85.056c-3.504,15.096,5.44,30.288,20.344,34.544
                      c15.992,4.568,32.56-5.184,36.32-21.392L140.704,336h130.792l-19.744,85.056c-3.504,15.096,5.44,30.288,20.344,34.544
                      c15.992,4.568,32.56-5.184,36.32-21.392L331.208,336H396c15.464,0,28-12.536,28-28s-12.536-28-28-28h-51.792l22.288-96H436
                      c15.464,0,28-12.536,28-28S451.464,128,436,128z M284.496,280H153.704l22.288-96h130.792L284.496,280z"/>
                    </svg>
                    <span>{{$term['name']}}</span>
                  </a>
                </li>
              @endforeach
            </ul>
          </div>
        @endif
      </div>
      <div class="ditto-footer">
        <div class="ditto-footer-more">
          @include('partials.list-notion')
          @if ($tags)
            <button class="svgWrap" @mouseover="open = true">
              <svg viewBox="0 0 497 497">
                <path d="m459.5 113.5h-30v75h30c20.625 0 37.5-16.875 37.5-37.5s-16.875-37.5-37.5-37.5z" fill="currentColor"/>
                <path d="m459.5 308.5h-30v75h30c20.625 0 37.5-16.875 37.5-37.5s-16.875-37.5-37.5-37.5z" fill="currentColor"/>
                <path d="m467 346c0-20.625-16.875-37.5-37.5-37.5h-46v-120h46c20.625 0 37.5-16.875 37.5-37.5s-16.875-37.5-37.5-37.5h-46v-76c0-20.625-16.875-37.5-37.5-37.5s-37.5 16.875-37.5 37.5v76h-120v-76c0-20.625-16.875-37.5-37.5-37.5s-37.5 16.875-37.5 37.5v76h-76c-20.625 0-37.5 16.875-37.5 37.5s16.875 37.5 37.5 37.5h76v120h-76c-20.625 0-37.5 16.875-37.5 37.5s16.875 37.5 37.5 37.5h76v76c0 20.625 16.875 37.5 37.5 37.5s37.5-16.875 37.5-37.5v-76h120v76c0 20.625 16.875 37.5 37.5 37.5s37.5-16.875 37.5-37.5v-76h46c20.625 0 37.5-16.875 37.5-37.5zm-158.5-37.5h-120v-120h120z" fill="currentColor" />
              </svg>
            </button>
          @endif
        </div>
        <time class="updated" datetime="{{ get_post_time('c', true) }}">{{ get_the_date() }}</time>
      </div>
    </div>
  </div>
</div>