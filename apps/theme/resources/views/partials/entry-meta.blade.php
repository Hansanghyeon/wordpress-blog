<div class="flex">
  <time class="createDate" datetime="{{ get_post_time('c', true) }}">
    @if ($date)
      {!! $date !!}
    @else
      {{ get_the_date() }}
    @endif
  </time>
  @if ($updateDate)
    <div class="px-[8px] opacity-50">
      ( 업데이트: <time class="createDate">{!! $updateDate !!}</time> )
    </div>
  @endif
</div>

<p class="byline author vcard">
  <span>{{ __('By', 'sage') }}</span>
  <a href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn">
    {{ get_the_author() }}
  </a>
</p>

