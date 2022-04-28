<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeIngredient extends Model
{
    use HasFactory;

    protected $table = 'recipe_ingredients';

    public function ingredients(){
        return $this->belongsToMany(Recipe::class, 'recipe_ingredients');
    }

}
