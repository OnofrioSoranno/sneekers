<?php

namespace App\Models;

use App\Models\User;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'body',
        'image', 
        'brand_id',
        'user_id',

    ];
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }
}
