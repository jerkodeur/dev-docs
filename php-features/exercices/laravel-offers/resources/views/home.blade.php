@extends('layouts.app')

@section('title', 'accueil')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        {{ $message }}
    </div>
</div>
@endsection
