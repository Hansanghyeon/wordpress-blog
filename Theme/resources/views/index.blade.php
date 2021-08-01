@extends('layouts.app')

@section('content')
  @include('partials.header-page')

  @if (! have_posts())
    <x-Alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-Alert>

    {!! get_search_form(false) !!}
  @endif

  @while(have_posts()) @php(the_post())
    @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
  @endwhile

  {!! get_the_posts_navigation() !!}
@endsection

@section('sidebar')
  @include('partials.sidebar')
@endsection
