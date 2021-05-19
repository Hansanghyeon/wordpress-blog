{{-- 
  Template Name: 이력서
--}}

@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="page-header">
      <div class="neonAlert success">
        <div class="neonAlert-icon left">
          <i class="fi-rr-time-check"></i>
        </div>
        <div class="neonAlert-content">
          <span>리메이크되거나 제거된 홈페이지 기제하지 않았습니다.</span>
          <span class="dimSpan">2020-09-16</span>
        </div>
        <div class="neonAlert-icon right">
          <i class="fi-rr-cross-small"></i>
        </div>
      </div>
      <div class="py-4"></div>
      @include('partials.resume.profile')
    </div>
    <div class="row mb-4">
      <div class="col-12">
        @include('partials.resume.introduce')
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        @include('partials.resume.career')
      </div>
    </div>
  </div>
@endsection
