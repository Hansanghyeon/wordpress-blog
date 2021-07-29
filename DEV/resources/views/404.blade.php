@extends('layouts.app')

@section('content')
  @include('partials.header-page')

  @if (! have_posts())
    <div class="container max-w-screen-lg mx-auto">
      <x-alert type="warning">
        {!! __('Sorry, but the page you are trying to view does not exist.', 'sage') !!}
      </x-alert>
  
      {!! get_search_form(false) !!}
    </div>
  @endif
@endsection
