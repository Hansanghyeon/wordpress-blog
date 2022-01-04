@if (have_posts())
  <div class="lg:container !max-w-screen-md my-[20px] lg:my-[40px] mx-auto">
    <div class="text-center" x-data="{show: true}"
      x-show="show"
      x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0 transform scale-90"
      x-transition:enter-end="opacity-100 transform scale-100"
      x-transition:leave="transition ease-in duration-200"
      x-transition:leave-start="opacity-100 transform scale-100"
      x-transition:leave-end="opacity-0 transform scale-90"
    >
      <div class="neonAlert success mx-auto">
        <div class="neonAlert-icon left">
          <i class="icon-back-in-time"></i>
        </div>
        <div class="neonAlert-content flex items-center pb-0 flex-wrap #sm:justify-center">
          <span>리메이크되거나 제거된 홈페이지 기제하지 않았습니다.</span>
          <span class="dim leading-none">2020-09-16</span>
        </div>
        <div class="neonAlert-icon right">
          <i class="icon-cancel cursor-pointer" @click.prevent="show = false"></i>
        </div>
      </div>
      <div class="py-4 lg:py-8"></div>
    </div>
    <div class="prose">
      <h4 id="portfolio" class="scroll-mt-[calc(var(--topAreaHeight)+20px)]">포트폴리오</h4>
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