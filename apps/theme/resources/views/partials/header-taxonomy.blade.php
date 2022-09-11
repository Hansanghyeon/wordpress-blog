<div class="container lg:max-w-screen-lg">
  <div class="page-header prose-lg">
    <div class="titleWrap">
      @empty(!$icon)
        <img class="icon" src="{!! $icon['url'] !!}" alt="{!! $icon['description'] !!}" />
      @endempty
      <h1>{!! $title !!}</h1>
    </div>
    <div class="descriptionWrap">
      <div class="desc">
        {!! do_shortcode($description) !!}
      </div>
    </div>
  </div>
</div>