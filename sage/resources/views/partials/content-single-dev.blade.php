<article @php post_class() @endphp>
  <header>
    <h1 class="entry-title">{!! get_the_title() !!}</h1>
    @include('partials/entry-meta')
  </header>
  <div class="entry-content">
    @include('partials.components.toc')
    @php the_content() @endphp
  </div>
  <footer>
    <div class="pageNav">
      @php
        // 이전글
        $prev_post = get_previous_post();
        if ( !empty($prev_post) ) {
          $link = get_permalink( $prev_post->ID );
          $title = apply_filters( 'the_title', $prev_post->post_title );
          echo <<<HTML
            <a class="card prev" href="$link">
              <i class="fi-rs-angle-small-left"></i>
              <span class="title">$title</span>
            </a>
HTML;
        } else {
          echo <<<HTML
            <div class="card prev empty">
              <span>이전 글</span>
            </div>
HTML;
        }

        // 다음글
        $next_post = get_next_post();
        if ( !empty($next_post) ) {
          $link = get_permalink( $next_post->ID );
          $title = apply_filters( 'the_title', $next_post->post_title );
          echo <<<HTML
            <a class="card next" href="$link">
              <i class="fi-rs-angle-small-right"></i>
              <span class="title">$title</span>
            </a>
HTML;
        } else {
          echo <<<HTML
            <div class="card next empty">
              <span>다음 글</span>
            </div>
HTML;
        }
      @endphp
    </div>
  </footer>
  @php comments_template('/partials/comments.blade.php') @endphp
</article>
