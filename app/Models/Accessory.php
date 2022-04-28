<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Recipe;

class Accessory extends Model
{
    use HasFactory;

    protected $table = 'accessories';

    protected $fillable = [
        'name',
        'price',
    ];

    public function accessories(){
        return $this->belongsToMany(Recipe::class, 'recipe_accessories');
    }
}
