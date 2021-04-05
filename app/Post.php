<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'user_id', 'type', 'title', 'description', 'content', 'image',
    ];

    protected $appends = [
        'author',
    ];

    protected $attributes = [
        'image' => '/images/no-image.png',
    ];

    public function getAuthorAttribute() {
        return $this->user->full_name;
    }

    public function user() {
        return $this->belongsTo('\App\User');
    }
}
