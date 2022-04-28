<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ingredient;

class IngredientController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }


    public function all()
    {
        return Ingredient::all();
    }

    public function update(Request $request, $id){
        $newData = json_decode($request->getContent());
        $ingredient = Ingredient::find($id);

        $ingredient->name = $newData->name;
        $ingredient->price = $newData->price;
        $ingredient->unit = $newData->unit;
        $ingredient->type = $newData->type;

        $ingredient->save();
    }

    public function delete(Request $request, $id){
        $ingredient = Ingredient::find($id);
        $ingredient->delete();
    }

    public function add(){

        $ingredient = new Ingredient;

        $ingredient = Ingredient::create([
            'name' => 'Új összetevő',
            'price' => '0',
            'unit' => 'g',
            'type' => 'Általános'
        ]);

        //$ingredient->save();
    }
}
