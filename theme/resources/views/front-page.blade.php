@extends('layouts.app')

@section('content')
  <div class="container lg:max-w-screen-lg my-12 grid gap-[45px]">
    <div>
      <div class="entry-content prose-lg">
        @php the_content() @endphp
      </div>
    </div>
    <div>
      <div class="content prose-lg">
        <h2 class="mb-4">#부캐</h2>
      </div>
      <ul class="flex items-center gap-x-[8px]">
        @foreach (wp_get_nav_menu_items(wp_get_nav_menu_object('main')) as $item)
          <li>
            <a href="{{$item->url}}" class="grid">
              @empty(!$icon = get_field('menu_icon', $item->ID))
                <img class="max-w-[125px] mb-[8px]" src="{{$icon}}" />
              @endempty
              <div class="justify-self-center">
                <span class="text-black dark:text-white hover:text-light-text dark:hover:text-gray-300 border-gray-400 border-opacity-[0.125] border-[2px] rounded-[4px] py-[0.25rem] px-[0.5rem] transition-colors duration-300 hover:border-opacity-50 " style="
                  @empty(!$labelColor = get_field('label_color', $item->ID))
                    background-color: {{$labelColor}};
                  @endempty
                  ">
                  {{$item->title}}
                </span>
              </div>
            </a>
          </li>
        @endforeach
      </ul>
    </div>
  </div>
@endsection
