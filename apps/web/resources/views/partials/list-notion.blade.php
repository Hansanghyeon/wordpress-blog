@if ($categories)
  <ul>
    @foreach ($categories as $term)
      <li>
        <a href="{!! $term->permalink !!}" class="list-notion">
          @isset($term->icon_src)
            <div class="imgWrap @isset ($term->icon_is_cover)transform scale-[1.8] @endisset">
              <img src="{!! $term->icon_src !!}" alt="{!! $term->icon_alt !!}">
            </div>
          @endisset
          <span>{!! $term->name !!}</span>
        </a>
      </li>
    @endforeach
  </ul>
@endif
