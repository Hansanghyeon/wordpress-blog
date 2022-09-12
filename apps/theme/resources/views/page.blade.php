@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.header-page')
    <div class="container lg:max-w-screen-lg">
      <div class="prose max-w-none">
        @includeFirst(['partials.content-page', 'partials.content'])
      </div>
    </div>
  @endwhile
@endsection
