@extends('layouts.app')

@section('content')
  <div class="container">
    @include('partials.page-header')
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
