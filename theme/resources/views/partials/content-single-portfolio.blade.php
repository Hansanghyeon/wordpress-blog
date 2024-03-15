<article @php(post_class())>
  @include('partials/header-portfolio')
  <div class="entry-content">
    @include('partials.toc')
    <div class="prose">
      @php(the_content())
    </div>
  </div>
  <footer>
    <x-pagination-single />
  </footer>
</article>
