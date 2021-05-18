@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="page-header">
      <div class="titleWrap">
        @empty(!$icon = get_field('icon', get_post_type().'_category_'.get_queried_object_id()))
          <img class="icon" src="{{$icon['url']}}" alt="">
        @endempty
        <h1>{!! App::title() !!}</h1>
      </div>
      <div class="descriptionWrap">
        <div class="desc">
          {!! App::description() !!}
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    @if (!have_posts())
      <div class="alert alert-warning">
        {{ __('Sorry, no results were found.', 'sage') }}
      </div>
      {!! get_search_form(false) !!}
    @endif
  
    <div id="macy-container">
      @while (have_posts()) @php the_post() @endphp
        @include('partials.content-dev_category')
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

