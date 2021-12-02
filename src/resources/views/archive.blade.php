@extends('layouts.app')

@section('content')
  @include('partials.header-archive')
  @include('partials.nav-side')
  @if (!have_posts())
    <x-C404 />
  @else
    <div class="container lg:max-w-screen-lg mx-auto">
      <div class="ditto-root">
        @while (have_posts()) @php(the_post())
          {{-- @include('partials.content-'.get_post_type()) --}}
          @include('partials.content-ditto')
        @endwhile
      </div>
    </div>
    <div class="container lg:max-w-screen-lg mx-auto">
      <div class="page-pagination-number">
        {!! $pagination !!}
      </div>
    </div>
  @endif
@endsection
