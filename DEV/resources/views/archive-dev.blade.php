@extends('layouts.app')

@section('content')
  <div class="container mx-auto px-6">
    <div class="page-header prose-lg">
      <div class="imgWrap">
        <img class="md:hidden" src="/wp-content/uploads/media/개발포스트/RLRlP6kQU.png" alt="">
        <img class="hidden md:block" src="/wp-content/uploads/media/개발포스트/RLRlP6kQU-1.png" alt="">
      </div>
      <div class="titleWrap">
        <h1>{!! $title !!}</h1>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-6">
    @if (!have_posts())
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    @endif
    <div class="ditto-root">
      @while (have_posts()) @php(the_post())
        @include('partials.content-'.get_post_type())
      @endwhile
    </div>
  </div>


  @empty(!$pagination = get_the_posts_pagination( array(
    'mid_size' => 2,
    'prev_text' => __( '이전' ),
    'next_text' => __( '다음' ),
  )))
    <div class="container mx-auto px-6">
      <div class="page-pagination">
        {!! $pagination !!}
      </div>
    </div>
  @endempty
@endsection
