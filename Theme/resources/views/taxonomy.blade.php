@extends('layouts.app')

@section('content')
  @include('partials.header-taxonomy')
  @if (!have_posts())
    <div class="container mx-auto lg:max-w-screen-lg px-6">
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    </div>
  @endif
  <div class="container mx-auto">
    <div id="macy-container">
      @while (have_posts()) @php the_post() @endphp
        @include('partials.content-ditto')
      @endwhile
    </div>
  </div>
@endsection