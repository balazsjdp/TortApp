<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $recipes = [
            [
                'name' => 'Sima piskóta',
                'image' => 'piskota.jpg',
                'note' => "Nagyon finom!",
                'description' => 'A piskóta elkészítéséhez a tojásokat szétválasztjuk.
                    A fehérjét kemény habbá verjük (géppel is végezhetjük). A sárgáját kikeverjük a cukor felével.
                    Amikor a fehérje már kemény, beleszórjuk a maradék cukrot, és még egy kicsit verjük tovább.
                    A felvert tojásfehérjéhez hozzáadjuk a sárgáját (ezt is csinálhatjuk géppel, de a leglassúbb fokozaton).
                    Ezután egy kanál segítségével óvatosan és apránként hozzáadjuk a lisztet, és minden adagolás után átkeverjük.
                    A piskótatésztát kivajazott, lisztezett vagy sütőpapírral bélelt tepsibe öntjük, és 160 fokra előmelegített sütőben kb. 20 perc alatt készre sütjük. Nem szabad a sütő ajtót közben nyitogatni.',
                'favorite' => 1
            ],
            [
                'name' => 'Kakaós piskóta',
                'image' => 'csokispiskota.jpg',
                'note' => "Nagyon finom, és még kakaós is",
                'description' => 'A piskóta elkészítéséhez a tojásokat szétválasztjuk.
                    A fehérjét kemény habbá verjük (géppel is végezhetjük). A sárgáját kikeverjük a cukor felével.
                    Amikor a fehérje már kemény, beleszórjuk a maradék cukrot, és még egy kicsit verjük tovább.
                    A felvert tojásfehérjéhez hozzáadjuk a sárgáját (ezt is csinálhatjuk géppel, de a leglassúbb fokozaton).
                    Ezután egy kanál segítségével óvatosan és apránként hozzáadjuk a lisztet, és minden adagolás után átkeverjük.
                    A piskótatésztát kivajazott, lisztezett vagy sütőpapírral bélelt tepsibe öntjük, és 160 fokra előmelegített sütőben kb. 20 perc alatt készre sütjük. Nem szabad a sütő ajtót közben nyitogatni.',
                'favorite' => 1
            ],
        ];

        foreach ($recipes as $key => $recipe) {
            Recipe::create($recipe);
        }
    }
}
