{{--
  Template Name: 히스토리
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
    <div class="container">
      <div id="react-app"></div>
    </div>
  @endwhile
@endsection
