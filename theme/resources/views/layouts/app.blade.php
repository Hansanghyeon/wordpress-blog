@include('partials.header')

<main class="[&_*]:mac-scrollbar">
  @yield('content')
</main>

{{-- @hasSection('sidebar')
  <aside class="sidebar">
    @yield('sidebar')
  </aside>
@endif --}}

@include('partials.footer')

{{-- invisible !mt-0 text-[0px] --}}
