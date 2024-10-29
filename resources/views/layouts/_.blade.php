<!DOCTYPE html>
<html class="h-auto"
      lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0">
        <meta name="version"
              content="{{ exec('git rev-parse --verify HEAD 2> /dev/null', $output) }}">
        <meta name="csrf-token"
              content="{{ csrf_token() }}">
        @vite('resources/css/main.css')
        @vite('resources/js/main.ts')
        <title>{{ config('app.name') }}</title>
    </head>

    <body>
        <a class="sr-only"
           href="#main"
           tabindex="0">Skip to main content</a>
        <div id="app">
            <main id="main"
                  role="main">
                <vue-app>
                    @yield('content')
                </vue-app>
            </main>
        </div>
        <div class="hidden">
            @include('layouts.svg-sprite')
            @stack('scripts')
        </div>
        <div class="aspect-ratio-square fixed bottom-2 right-2 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white shadow-xl">
            <div class="block">
                <span class="sm:hidden">--</span>
                <span class="hidden sm:block md:hidden">SM</span>
                <span class="hidden md:block lg:hidden">MD</span>
                <span class="hidden lg:block xl:hidden">LG</span>
                <span class="hidden xl:block 2xl:hidden">XL</span>
                <span class="hidden 2xl:block">2XL</span>
            </div>
        </div>
    </body>

</html>
