@extends('layouts.app')

@section('content')
  <div class="container">
    @include('partials.page-header')
  </div>
  <div class="container">
    @if (!have_posts())
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    @endif
    
    <div class="ditto-root">
      @while (have_posts()) @php the_post() @endphp
        @include('partials.content-search')
      @endwhile
    </div>
  </div>

  @empty(!$pagination = get_the_posts_pagination( array(
    'mid_size' => 2,
    'prev_text' => __( '이전' ),
    'next_text' => __( '다음' ),
  )))
    <div class="container">
      <div class="page-pagination">
        {!! $pagination !!}
      </div>
    </div>
  @endempty
@endsection