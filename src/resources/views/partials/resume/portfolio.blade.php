@if (have_posts())
  <div class="lg:container !max-w-screen-md my-[40px] mx-auto">
    <div class="prose">
      <h4>포트폴리오</h4>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-[32px]">
    @while (have_posts()) @php(the_post())
      @include('partials.content-portfolio')
    @endwhile
  </div>
  <div class="container lg:max-w-screen-lg">
    <div class="page-pagination-number">
      {!! $pagination !!}
    </div>
  </div>
@endif