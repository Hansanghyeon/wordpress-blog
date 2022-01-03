@extends('layouts.app')

@section('content')
  <div class="container max-w-screen-md">
    <div class="page-header">
      @include('partials.resume.profile')
    </div>
    <div class="prose max-w-none">
        @include('partials.resume.introduce')
    </div>
  </div>
  <div class="container">
    @include('partials.resume.portfolio')
  </div>
@endsection
