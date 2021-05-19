<header class="banner GNB headroom px-4">
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex align-items-center">
        <div class="siteIcon px-2">
          <a href="{{ home_url('/') }}">
            <img src="{{ get_site_icon_url() }}" alt="{{ get_bloginfo('name', 'display') }}">
          </a>
        </div>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <div class="snsList">
          @include('partials.components.sns')
        </div>
      </div>
    </div>
  </div>
</header>

{{-- <div class="container mb-4">
  <nav class="nav-primary">
    @if (has_nav_menu('primary_navigation'))
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
    @endif
  </nav>
</div> --}}
