<?php

namespace App\Providers;

use App\Repositories\DefaultRepository;
use App\Repositories\Interfaces\DefaultRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Articles repository
        $this->app->bind(DefaultRepositoryInterface::class, DefaultRepository::class);
        // Places repository
    }

    public function boot()
    {
        //
    }
}
