@if ($categories)
  <ul>
    @foreach ($categories as $term)
      <li>
        <a href="{!! $term['link'] !!}" class="list-notion">
          @isset($term['icon'])
            <div class="imgWrap @isset ($term['icon']['cover'])transform scale-[1.8] @endisset">
              <img src="{!! $term['icon']['src'] !!}" alt="{!! $term['icon']['alt'] !!}">
            </div>
          @endisset
          <span>{{$term['name']}}</span>
        </a>
      </li>
    @endforeach
  </ul>
@endif