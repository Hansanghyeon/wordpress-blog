@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="page-header">
      <div class="imgWrap">
        <img class="d-md-none" src="/wp-content/uploads/media/개발포스트/RLRlP6kQU.png" alt="">
        <img class="d-none d-md-block" src="/wp-content/uploads/media/개발포스트/RLRlP6kQU-1.png" alt="">
      </div>
      <div class="titleWrap">
        <h1>{!! App::title() !!}</h1>
      </div>
    </div>
  </div>

  <div class="container">
    @if (!have_posts())
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    @endif
    <div class="ditto-root">
      @while (have_posts()) @php the_post() @endphp
        @include('partials.content-'.get_post_type())
      @endwhile
    </div>
  </div>

  <div class="container">
    {!! get_the_posts_navigation() !!}
  </div>
  @endsection
