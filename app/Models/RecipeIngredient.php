<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeIngredient extends Model
{
    use HasFactory;

    protected $table = 'recipe_ingredients';

    /*public function recipe()
    {
        return $this->belongsToMany('App\Models\Recipe', 'recipe_id');
    }*/


}
