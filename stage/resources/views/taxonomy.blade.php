@extends('layouts.app')

@section('content')
  @include('partials.header-taxonomy')
  @if (!have_posts())
    <x-C404 />
  @endif
  <div class="container">
    <div id="macy-container">
      @while (have_posts()) @php the_post() @endphp
        @include('partials.content-ditto')
      @endwhile
    </div>
  </div>
@endsection