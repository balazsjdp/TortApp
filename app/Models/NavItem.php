<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NavItem extends Model
{
    use HasFactory;

    protected $table = 'navitems';

    protected $fillable = [
        'name', 'route', 'ordering'
    ];
}
