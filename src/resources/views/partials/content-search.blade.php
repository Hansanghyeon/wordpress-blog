<div @php(post_class())>
  <div class="prose">
    <header>
      <h2 class="entry-title">
        <a href="{{ get_permalink() }}">
          {!! $title !!}
        </a>
      </h2>
  
      @includeWhen(get_post_type() === 'post', 'partials/entry-meta')
    </header>
  
    <div class="entry-summary">
      @php(the_excerpt())
    </div>
  </div>
</div>
