@if ($categories)
  <ul>
    @foreach ($categories as $term)
      <li>
        <a href="{!! $term['link'] !!}" class="list-notion">
          @if (!empty($term['icon'] ))
          <div class="imgWrap">
            <img src="{!! $term['icon']['src'] !!}" alt="{!! $term['icon']['alt'] !!}">
          </div>
          @endif
          <span>{{$term['name']}}</span>
        </a>
      </li>
    @endforeach
  </ul>
@endif