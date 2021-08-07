<nav class="nav-side">
  <div class="nav-side-title">🔖 카테고리</div>
  <ul class="list-side">
    @foreach ($categories as $term)
        <li>
          <a class="list-side-item" href="{{ $term->link }}">{{ $term->name }}</a>
          @if (count($term->children) > 0)
              <ul class="list-side-children">
                @foreach ($term->children as $term2)
                    <li>
                      <a class="list-side-item" href="{{ $term2->link }}">{{ $term2->name }}</a>
                    </li>
                @endforeach
              </ul>
          @endif
        </li>
    @endforeach
  </ul>
</nav>