@extends('layouts.app')

@section('title', 'accueil')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <ul>
            @foreach($categories as $category)
            <li>
                {{ $category->id }} --> {{ $category->name }}
            </li>
            @endforeach
        </ul>
    </div>
</div>
@endsection
