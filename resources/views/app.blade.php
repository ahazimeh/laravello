<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name','Laravello') }}</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="h-screen text-grey-800"style="background-color:#9076F6;">
        <div id="app">
            <Board></Board>
        </div>
    </body>
</html>
