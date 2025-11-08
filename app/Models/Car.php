<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'model',
        'year',
        'transmissionType',
        'engineType',
        'seats',
        'doors',
        'images',
    ];

    protected $casts = [
        'images' => 'array',
    ];
}

