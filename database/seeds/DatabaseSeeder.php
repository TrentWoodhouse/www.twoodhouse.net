<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'first_name' => 'Trent',
            'last_name' => 'Woodhouse',
            'email' => 'trentrwoodhouse@gmail.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$IGFYVTqIE9Nb.ahYa.WJKuvuGo3oomi1yi8YZ/DtC0uUNE/13C/sa', //asdfasdf
        ]);
    }
}
