<div class="container lg:max-w-screen-lg">
  <div class="py-[45px] prose-lg">
    <div class="flex items-center mb-[12px]">
      @empty(!$icon)
        <img class="max-w-[48px] mr-[12px] mt-0" src="{!! $icon['url'] !!}" alt="{!! $icon['description'] !!}" />
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
