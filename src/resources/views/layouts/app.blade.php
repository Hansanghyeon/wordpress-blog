@include('partials.header')

<main>
  @yield('content')
</main>

{{-- @hasSection('sidebar')
  <aside class="sidebar">
    @yield('sidebar')
  </aside>
@endif --}}

@include('partials.footer')

{{-- invisible !mt-0 --}}
