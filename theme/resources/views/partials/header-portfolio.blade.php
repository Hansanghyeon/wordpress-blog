<header class="article__header mt-[38px] mb-6">
  <h1 class="article__header-title">{!! $title !!}</h1>
  <div class="grid grid-cols-[1fr,auto] sticky top-[var(--h)]">
    <div>
      @include('partials/entry-meta')
      @if ($tags)
        <ul class="flex gap-1 my-2 flex-wrap">
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
                <span class="font-semibold">{{$term['name']}}</span>
              </a>
            </li>
          @endforeach
        </ul>
      @endif
    </div>
    <div class="self-end">
      @if (!empty($links))
        <ul class="text-right">
          @foreach ($links as $link)
            @if($link['name'] === '라이브 홈페이지')
              <li>
                <a href="{!! $link['url'] !!}" target="_blank" rel="noopener noreferrer" class="flex gap-x-[4px] items-center">
                  <span>{!! $link['name'] !!}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-[1em] h-[1em]" viewBox="0 0 24 24" id="external-link"><path style="fill:currentColor" d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"></path></svg>
                </a>
              </li>
            @endif
          @endforeach
        </ul>
      @endif
    </div>
  </div>
</header>
