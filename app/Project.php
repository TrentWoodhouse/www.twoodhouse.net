<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
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
