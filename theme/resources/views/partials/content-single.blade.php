<article @php(post_class())>
  @include('partials/header-content')
  <div class="entry-content">
    @include('partials.toc')
    <div class="prose">
      @php(the_content())
    </div>
  </div>
  <footer>
    <x-pagination-single />
  </footer>
  <x-Comment />
</article>
