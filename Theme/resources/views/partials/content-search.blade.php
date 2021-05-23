@php
$isThumb = !empty(get_the_post_thumbnail());
if (!empty(get_the_post_thumbnail())) $isThumb = 'data-isthumb';
@endphp
<div class="ditto">
  <article @php post_class() @endphp>
    <div class="ditto-main" @php echo $isThumb @endphp>
      <div class="ditto-thumbnail">
        @php echo get_the_post_thumbnail() @endphp
      </div>
      <div class="ditto-main-inner" @php echo $isThumb @endphp>
        <div class="ditto-body">
          <h2 class="ditto-title"><a href="{{ get_permalink() }}">{!! get_the_title() !!}</a></h2>
          <div class="ditto-content">
            @php the_excerpt() @endphp
          </div>
        </div>
        <div class="ditto-footer">
          @include('partials/entry-simple-meta')
        </div>
      </div>
    </div>
  </article>
</div>
