<a href="{!! $archive->url !!}" class="article__ac">
  <img class="article__ac-img" src="{!! $archive->icon !!}" />
  <span class="article__ac-title" style="{!! $archive->bg_color !!}">
    {!! $archive->title !!}
  </span>
</a>
<header class="article__header">
  <h1 class="article__header-title">{!! $title !!}</h1>
  @include('partials/entry-meta')
  <div class="mb-6"></div>
  @if ($tags)
    <ul class="flex gap-1 mt-2 mb-2 flex-wrap">
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
</header>