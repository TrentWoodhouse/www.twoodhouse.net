<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function getAuthorAttribute() {
        return $this->user->fullName;
    }

    public function user() {
        return $this->belongsTo('\App\User');
    }
}
