<div class="grid grid-cols-1 sm:grid-cols-2 gap-[12px] mb-[45px]">
  @if (!empty($prev_post = get_previous_post()))
    <a class="card" href="{!! get_permalink( $prev_post->ID ) !!}">
      <i class="icon-right-open-mini absolute top-1/2 -translate-y-1/2 pt-[0.1rem] leading-none left-4"></i>
      <span class="title">{!! apply_filters( 'the_title', $prev_post->post_title ) !!}</span>
    </a>
  @else
    <div class="card text-disabled">
      <i class="icon-right-open-mini absolute top-1/2 -translate-y-1/2 pt-[0.1rem] leading-none left-4"></i>
      <span>이전 글</span>
    </div>
  @endif
  @if (!empty($next_post = get_next_post()))
    <a class="card" href="{!! get_permalink( $next_post->ID ) !!}">
      <i class="icon-right-open-mini absolute top-1/2 -translate-y-1/2 pt-[0.1rem] leading-none right-4"></i>
      <span class="title">{!! apply_filters( 'the_title', $next_post->post_title ) !!}</span>
    </a>
  @else
    <div class="card opacity-50 text-opacity-50">
      <i class="icon-right-open-mini absolute top-1/2 -translate-y-1/2 pt-[0.1rem] leading-none right-4"></i>
      <span>다음 글</span>
    </div>
  @endif
</div>
