@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.header-page')
    <div class="container lg:max-w-screen-lg mx-auto prose">
      @includeFirst(['partials.content-page', 'partials.content'])
    </div>
  @endwhile
@endsection
