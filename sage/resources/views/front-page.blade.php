@extends('layouts.app')

@section('content')
  <div class="container frontPage">
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
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-12 contentCol">
              <div class="entry-content">
                @php the_content() @endphp
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-12">
              <h1>#부캐</h1>
              <ul class="cardList">
                @foreach (wp_get_nav_menu_items(wp_get_nav_menu_object('main')) as $item)
                  <li>
                    <a href="{{$item->url}}" class="cardList-item">
                      @empty(!$icon = get_field('menu_icon', $item->ID))
                        <img class="icon-card" src="{{$icon}}" />
                      @endempty
                      <span class="title" style="
                        @empty(!$labelColor = get_field('label_color', $item->ID))
                          background-color: {{$labelColor}};
                        @endempty
                        ">
                        {{$item->title}}
                      </span>
                    </a>
                  </li>
                @endforeach
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
