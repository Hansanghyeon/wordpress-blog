<footer id="global" class="content-info global">
  <div class="container lg:max-w-screen-lg mx-auto grid grid-flow-row auto-rows-max gap-3">
    <div class="flex justify-center">
      <a class="logo icon" href="{{ home_url('/') }}">
        <img src="{{ get_site_icon_url() }}" alt="{{ get_bloginfo('name', 'display') }}">
      </a>
    </div>
    <a href="/history">
      Since 2014.7.22 - <span id="history"></span>
    </a>
    <span>
      Copyright (c) 2021 999hyeon
    </span>
    <div class="flex justify-center mb-3">
      @include('partials.sns')
    </div>
    @php dynamic_sidebar('sidebar-footer') @endphp
  </div>
</footer>
@if (current_user_can('editor') || current_user_can('administrator')) 
<div class="share-global">
  <x-Share />
</div>
@endif
