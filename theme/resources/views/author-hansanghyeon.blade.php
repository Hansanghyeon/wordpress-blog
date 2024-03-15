@extends('layouts.app')

@section('content')
  <div class="container max-w-screen-md">
    <div class="pt-[45px]">
      @include('partials.resume.profile')
    </div>
    <div class="prose max-w-none">
        {!! $description !!}
    </div>
  </div>
  <div class="container">
    @include('partials.resume.portfolio')
  </div>
@endsection
