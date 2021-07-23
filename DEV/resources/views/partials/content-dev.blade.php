<div class="ditto">
  <div class="ditto-main" {!! $isThumbnail !!}>
    @if ($isThumbnail)
      <div class="ditto-thumbnail">
        {!! $thumbnail !!}
      </div>
    @endif
    <div class="ditto-main-inner" {!! $isThumbnail !!}>
      <div class="ditto-body">
        <h2 class="ditto-title"><a href="{!! $permalink !!}">{!! $title !!}</a></h2>
        <div class="ditto-content">
          {!! $excerpt !!}
        </div>
      </div>
      <div class="ditto-footer">
        <x-categorylist type="notion" />
      </div>
    </div>
  </div>
</div>