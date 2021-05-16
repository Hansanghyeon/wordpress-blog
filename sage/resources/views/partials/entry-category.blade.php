<ul class="category">
  @foreach (wp_get_post_terms(get_the_ID(), get_post_type().'_category') as $term)
    @php
    $icon = get_field('icon', get_post_type().'_category_'.$term->term_id);
    if (!is_array($icon)) $icon = acf_get_attachment($icon);
    $iconUrl = $icon['url'];
    $iconTItle = $icon['title'];
    @endphp
    <li>
      <a href="$term->slug" class="iconList">
        @if (!empty($iconUrl))
        <div class="imgWrap">
          <img src="{{$iconUrl}}" alt="{{$iconTitle}}">
        </div>
        @endif
        <span>{{$term->name}}</span>
      </a>
    </li>
  @endforeach
</ul>