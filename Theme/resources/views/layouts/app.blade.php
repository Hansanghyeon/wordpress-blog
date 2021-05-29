<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php body_class() @endphp data-barba="wrapper">
  @php do_action('get_header') @endphp
  @include('partials.header')
  <div class="wrap" role="document" data-barba="container" data-barba-namespace="{{$post->ID}}"
    data-postid="{{$post->ID}}">
    <div id="body-classes" @php body_class() @endphp>
      <main class="main">
        @yield('content')
      </main>
    </div>
    <slot id="containerScript">
      @php wp_footer() @endphp
    </slot>
  </div>
  <div id="loader" class="loader-wrapper">
    <div class="loader-doodle">
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </div>
  </div>
  @php do_action('get_footer') @endphp
  @include('partials.footer')
  @if (current_user_can('editor') || current_user_can('administrator'))
    <div class="share-global">
      @include('partials.components.share')
    </div>
  @endif
  <slot id="baseFooterScript">
    @php wp_footer() @endphp
  </slot>
</body>

</html>
