<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use Illuminate\Support\Facades\Storage;




class RecipeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }


    public function all()
    {
        $recipes = Recipe::with('ingredients')->with("accessories")->get();

        foreach ($recipes as $recipe) {
            $recipe->image =  Storage::url('recipe-images/'.$recipe->image);
        }

        return $recipes;
    }
}
