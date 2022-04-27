<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ingredient;
use App\Models\RecipeIngredient;

class Recipe extends Model
{
    use HasFactory;
    protected $table = 'recipes';


    public function ingredients(){
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredients');
    }
}
