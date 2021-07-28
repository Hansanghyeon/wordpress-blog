@extends('layouts.app')

@section('content')
  @include('partials.header-archive')
  <div class="container mx-auto px-6">
    @if (!have_posts())
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    @endif
    <div class="ditto-root">
      @while (have_posts()) @php(the_post())
        {{-- @include('partials.content-'.get_post_type()) --}}
        @include('partials.content-ditto')
      @endwhile
    </div>
  </div>


  @empty(!$pagination = get_the_posts_pagination( array(
    'mid_size' => 2,
    'prev_text' => __( '이전' ),
    'next_text' => __( '다음' ),
  )))
    <div class="container mx-auto px-6">
      <div class="page-pagination-number">
        {!! $pagination !!}
      </div>
    </div>
  @endempty
@endsection
