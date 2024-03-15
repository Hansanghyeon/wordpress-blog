@extends('layouts.app')

@section('content')
  @include('partials.header-archive')
  @include('partials.nav-side')
  @if (!have_posts())
    <x-C404 />
  @else
    <div class="container lg:max-w-screen-lg">
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
