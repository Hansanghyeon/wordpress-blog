{{--
  Template Name: 홈페이지
--}}

@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="row py-5">
      <div class="col-12 col-lg-8 d-flex aling-items-center justify-content-center">
        <div class="instaWrap">
          <div class="insta insta-1" style="width: 360px">
            @php echo do_shortcode('[elfsight_instagram_feed id="1"]'); @endphp
          </div>
          <div class="insta insta-2" style="width: 360px">
            @php echo do_shortcode('[elfsight_instagram_feed id="2"]'); @endphp
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 py-5">
        <div class="entry-content">
          @php the_content() @endphp
        </div>
      </div>
    </div>
  </div>
@endsection
