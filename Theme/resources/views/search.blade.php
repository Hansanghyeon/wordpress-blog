@extends('layouts.app')

@section('content')
  @include('partials.header-page')

  @if (!have_posts())
    <div class="container max-w-screen-lg mx-auto">
      <x-Alert type="warning">
        {!! __('Sorry, no results were found.', 'sage') !!}
      </x-Alert>
  
      {!! get_search_form(false) !!}
    </div>
  @endif

  <div class="container max-w-screen-lg mx-auto">
    @while(have_posts()) @php(the_post())
      @include('partials.content-search')
    @endwhile
  </div>
  
  @empty(!$pagination = get_the_posts_pagination( array(
    'mid_size' => 2,
    'prev_text' => __( '이전' ),
    'next_text' => __( '다음' ),
  )))
    <div class="container max-w-screen-lg mx-auto">
      <div class="page-pagination">
        {!! $pagination !!}
      </div>
    </div>
  @endempty
@endsection
