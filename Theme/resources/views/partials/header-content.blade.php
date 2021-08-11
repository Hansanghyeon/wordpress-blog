<a href="{!! $archive->url !!}" class="article__ac">
  <img class="article__ac-img" src="{!! $archive->icon !!}" />
  <span class="article__ac-title" style="{!! $archive->bg_color !!}">
    {!! $archive->title !!}
  </span>
</a>
<header class="article__header">
  <h1 class="article__header-title">{!! $title !!}</h1>
  @include('partials/entry-meta')
</header>