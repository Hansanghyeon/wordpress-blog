@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.header-page')
    @includeFirst(['partials.content-page', 'partials.content'])
  @endwhile
@endsection
