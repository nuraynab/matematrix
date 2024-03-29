<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
<!--        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">-->
<!--        <link rel="stylesheet" type="text/css" href="{{ url('css/app.css') }}" />-->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
<!--        <script src="{{mix('js/app.js')}}" ></script>-->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
