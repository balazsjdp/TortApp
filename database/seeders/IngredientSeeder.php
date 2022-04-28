<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ingredient;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ingredients = [
            [
                'name' => 'Liszt',
                'price' => 15,
                'unit' => 'g',
            ],
            [
                'name' => 'Tojás',
                'price' => 50,
                'unit' => 'db',
            ],
            [
                'name' => 'Sütőpor',
                'price' => 150,
                'unit' => 'csomag',
            ],
        ];

        foreach ($ingredients as $key => $ingredient) {
            Ingredient::create($ingredient);
        }
    }
}
