<header id="global" class="global headroom px-10 flex items-center">
  <div class="w-full flex justify-between">
    <a href="{{ home_url('/') }}">
      <img class="siteIcon" src="{{ get_site_icon_url() }}" alt="{{ get_bloginfo('name', 'display') }}">
    </a>
    @include('partials.sns')
  </div>
</header>