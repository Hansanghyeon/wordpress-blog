@extends('layouts.app')

@section('content')
  <div class="container max-w-screen-md mx-auto">
    <div class="page-header">
      <div class="neonAlert success mx-auto">
        <div class="neonAlert-icon left">
          <i class="fi-rr-time-check"></i>
        </div>
        <div class="neonAlert-content">
          <span>리메이크되거나 제거된 홈페이지 기제하지 않았습니다.</span>
          <span class="dim">2020-09-16</span>
        </div>
        <div class="neonAlert-icon right">
          <i class="fi-rr-cross-small"></i>
        </div>
      </div>
      <div class="py-4"></div>
      @include('partials.resume.profile')
    </div>
    <div class="prose">
        @include('partials.resume.introduce')
    </div>
  </div>
@endsection
