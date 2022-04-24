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
            ],
            [
                'name' => 'Összetevők',
                'route' => 'ingredients',
                'ordering' => 2,
            ]
        ];

        foreach ($links as $key => $navbar) {
            NavItem::create($navbar);
        }
    }
}
