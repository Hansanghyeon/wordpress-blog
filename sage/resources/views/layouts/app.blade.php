<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')

  <ul>
    <li>
      <a href="/">home</a>
    </li>
    <li>
      <a href="/dev/wp_nav_menu로-생성된-submenu-ul에-클래스이름-추가/">wp_nav_menu()로 생성된 submenu ul에 클래스이름 추가
      </a>
    </li>
    <li>
      <a href="/dev/wp_nav_menu로-만드는-메뉴에서-li에-클래스-추가하는-방법/">wp_nav_menu()로 만드는 메뉴에서 li에 클래스 추가하는 방법</a>
    </li>
    <li><a href="/dev/styled-bootstrap-grid에서-media-함수내부에서-theme-props-타입">styled-bootstrap-grid에서 media 함수내부에서 theme props 타입</a></li>
  </ul>
  <body @php body_class() @endphp data-barba="wrapper">
    @php do_action('get_header') @endphp
    @include('partials.header')
    <div class="wrap container" role="document" data-barba="container" data-barba-namespace="{{$post->post_name}}">
      <div class="content">
        <main class="main">
          @yield('content')
        </main>
        @if (App\display_sidebar())
          <aside class="sidebar">
            @include('partials.sidebar')
          </aside>
        @endif
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
