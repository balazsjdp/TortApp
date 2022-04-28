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
                'type' => 'Nagyi titka'
            ],
            [
                'name' => 'Tojás',
                'price' => 50,
                'unit' => 'db',
                'type' => 'Házi'
            ],
            [
                'name' => 'Sütőpor',
                'price' => 150,
                'unit' => 'csomag',
                'type' => 'Auchanos'
            ],
        ];

        foreach ($ingredients as $key => $ingredient) {
            Ingredient::create($ingredient);
        }
    }
}
