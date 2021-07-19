@extends('layouts.app')

@section('content')
  <div class="container frontPage mx-auto px-6">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-4/6 flex items-center justify-center">
        <div class="instaWrap">
          <div class="insta insta-1" style="width: 360px">
            @php echo do_shortcode('[elfsight_instagram_feed id="1"]'); @endphp
          </div>
          <div class="insta insta-2" style="width: 360px">
            @php echo do_shortcode('[elfsight_instagram_feed id="2"]'); @endphp
          </div>
        </div>
      </div>
      <div class="w-full lg:w-2/6 py-5">
        <div class="flex flex-wrap">
          <div class="w-full md:w-3/6 lg:w-full contentCol">
            <div class="entry-content prose-lg">
              @php the_content() @endphp
            </div>
          </div>
          <div class="w-full md:w-3/6 lg:w-full">
            <div class="content prose-lg">
              <h2 class="mb-4">#부캐</h2>
            </div>
            <ul class="list-card">
              @foreach (wp_get_nav_menu_items(wp_get_nav_menu_object('main')) as $item)
                <li>
                  <a href="{{$item->url}}" class="list-card-item">
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
@endsection
