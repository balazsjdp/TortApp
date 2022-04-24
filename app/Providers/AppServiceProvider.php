<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use View;
use App\Models\NavItem;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('*', function($view)
        {
            $navItems = NavItem::orderBy('ordering')->get();
            $view->with('navItems', $navItems);
        });
    }
}
