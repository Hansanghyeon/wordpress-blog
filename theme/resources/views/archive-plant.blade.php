@extends('layouts.app')

@section('content')
  @include('partials.header-archive')
  @include('partials.nav-side')
  @if (!have_posts())
    <x-C404 />
  @else
    <div class="container lg:max-w-screen-lg">
      <div class="prose">
        {!! do_shortcode('[insert page="5814" display="content"]') !!}
      </div>
      <div class="prose">
        <h2 id="portfolio" class="scroll-mt-[calc(var(--topAreaHeight)+20px)] mb-[20px]">식물</h2>
      </div>
      <div class="ditto-root">
        @while (have_posts()) @php(the_post())
          @include('partials.content-ditto')
        @endwhile
      </div>
    </div>
    <div class="container lg:max-w-screen-lg">
      <div class="my-[45px]">
        {!! $pagination !!}
      </div>
    </div>
  @endif
@endsection
