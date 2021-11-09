<article @php post_class() @endphp>
  @include('partials/header-content')
  <div class="entry-content">
    @include('partials.toc')
    <div class="prose">
      @php the_content() @endphp
    </div>
  </div>
  <footer>
    <div class="page-pagination-arrow">
      @if (!empty($prev_post = get_previous_post()))
        <a class="card prev" href="{!! get_permalink( $prev_post->ID ) !!}">
          <i class="fi-rs-angle-small-left"></i>
          <span class="title">{!! apply_filters( 'the_title', $prev_post->post_title ) !!}</span>
        </a>
      @else
        <div class="card prev empty">
          <i class="fi-rs-angle-small-left"></i>
          <span>이전 글</span>
        </div>
      @endif
      @if (!empty($next_post = get_next_post()))
        <a class="card next" href="{!! get_permalink( $next_post->ID ) !!}">
          <i class="fi-rs-angle-small-right"></i>
          <span class="title">{!! apply_filters( 'the_title', $next_post->post_title ) !!}</span>
        </a>
      @else
        <div class="card next empty">
          <i class="fi-rs-angle-small-right"></i>
          <span>다음 글</span>
        </div>
      @endif
    </div>
  </footer>
  <x-Comment />
</article>
