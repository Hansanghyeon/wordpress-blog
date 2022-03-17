@extends('layouts.app')

@section('content')
  <div class="container lg:max-w-screen-lg frontPage">
    <div class="flex flex-wrap items-center py-12">
      <div class="py-12">
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
