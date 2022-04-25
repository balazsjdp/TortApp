<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ingredient;

class IngredientController extends Controller
{

    /*public function __construct()
    {
        $this->middleware('auth:api');
    }*/


    public function all()
    {
        return Ingredient::all();
    }
}
