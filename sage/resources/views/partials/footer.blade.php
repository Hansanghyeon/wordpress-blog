<footer class="content-info FNB">
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <a class="logo icon" href="{{ home_url('/') }}">
          <img src="{{ get_site_icon_url() }}" alt="{{ get_bloginfo('name', 'display') }}">
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a href="/history">
          Since 2014.7.22 - <span id="history"></span>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a href="https://github.com/Hansanghyeon/4log/blob/master/LICENSE">Copyright (c) 2021 999hyeon</a>
      </div>
    </div>
    @php dynamic_sidebar('sidebar-footer') @endphp
  </div>
</footer>
