{{--
  Template Name: history
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <article>
      @include('partials.header-page')
      <div class="entry-content">
        @include('partials.toc')
        <div class="prose max-w-none">
          @includeFirst(['partials.content-page', 'partials.content'])
        </div>
      </div>
      <div id="changelog-start"></div>
    </article>
    <div class="max-w-[90%] mx-auto relative z-10 lg:max-w-[800px] lg:px-0">
      <div id="react-history-app" x-intersect:enter="$store.tocFixed = true" x-intersect:leave="$store.tocFixed = false"></div>
    </div>
  @endwhile
@endsection
