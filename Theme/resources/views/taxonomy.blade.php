@extends('layouts.app')

@section('content')
  @include('partials.header-taxonomy')
  <div class="container mx-auto">
    @if (!have_posts())
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    @endif
    <div id="macy-container">
      @while (have_posts()) @php the_post() @endphp
        @include('partials.content-ditto')
      @endwhile
    </div>
  </div>
@endsection