<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\NavItem;

class NavItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $links = [
            [
                'name' => 'Főoldal',
                'route' => 'dashboard',
                'ordering' => 1,
                'icon' => 'Dashboard'
            ],
            [
                'name' => 'Összetevők',
                'route' => 'ingredients',
                'ordering' => 4,
                'icon' => 'Egg'
            ],
            [
                'name' => 'Receptek',
                'route' => 'recipes',
                'ordering' => 3,
                'icon' => 'Receipt'
            ],
            [
                'name' => 'Rendelések',
                'route' => 'orders',
                'ordering' => 2,
                'icon' => 'FilterFrames'
            ],
            [
                'name' => 'Kiegészítők',
                'route' => 'accessories',
                'ordering' => 2,
                'icon' => 'FilterVintage'
            ]
        ];

        foreach ($links as $key => $navbar) {
            NavItem::create($navbar);
        }
    }
}
