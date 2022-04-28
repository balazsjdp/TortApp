<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Recipe;


class Ingredient extends Model
{
    use HasFactory;
    protected $table = 'ingredients';

    protected $fillable = [
        'name',
        'price',
        'unit',
        'type'
    ];


    public function ingredients(){
        return $this->belongsToMany(Recipe::class, 'recipe_ingredients');
    }
}
