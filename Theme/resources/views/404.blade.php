@extends('layouts.app')

@section('content')
  @include('partials.header-page')

  @if (! have_posts())
    <div class="container lg:max-w-screen-lg mx-auto">
      <x-Alert type="warning">
        {!! __('Sorry, but the page you are trying to view does not exist.', 'sage') !!}
      </x-Alert>
  
      {!! get_search_form(false) !!}
    </div>
  @endif
@endsection
