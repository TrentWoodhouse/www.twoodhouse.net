<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'user_id', 'title', 'description', 'content', 'image',
    ];

    protected $appends = [
        'author',
    ];

    public function getAuthorAttribute() {
        return $this->user->full_name;
    }

    public function user() {
        return $this->belongsTo('\App\User');
    }
}
