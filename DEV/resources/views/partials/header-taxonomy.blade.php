<div class="container max-w-screen-lg mx-auto px-6">
  <div class="page-header prose-lg">
    <div class="titleWrap">
      @empty(!$icon)
        <img class="icon" src="{!! $icon['url'] !!}" alt="{!! $icon['description'] !!}" />
      @endempty
      <h1>{!! $title !!}</h1>
    </div>
    <div class="descriptionWrap">
      <div class="desc">
        {!! $description !!}
      </div>
    </div>
  </div>
</div>