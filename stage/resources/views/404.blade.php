@extends('layouts.app')

@section('content')
  @if (! have_posts())
    <x-C404 />
  @endif
@endsection
