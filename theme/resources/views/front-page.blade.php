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
            <ul class="flex flex-col items-center">
              @foreach (wp_get_nav_menu_items(wp_get_nav_menu_object('main')) as $item)
                <li>
                  <a href="{{$item->url}}" class="text-black dark:text-white hover:text-light-text dark:hover:text-gray-300 border-gray-400 border-opacity-[0.125] border-[2px] rounded-[4px] pl-[0.075rem] py-[0.5rem] pr-[0.125rem] transition-colors duration-300 hover:border-opacity-50 ">
                    @empty(!$icon = get_field('menu_icon', $item->ID))
                      <img class="max-w-[125px] mb-[8px]" src="{{$icon}}" />
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
