<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@remarker.com',
            'password' => \Illuminate\Support\Facades\Hash::make('secret'),
            'created_at' => \Carbon\Carbon::now(),
            'is_superadmin' => true,
        ]);
        DB::table('users')->insert([
            'name' => 'user',
            'email' => 'user@remarker.com',
            'password' => \Illuminate\Support\Facades\Hash::make('secret'),
            'created_at' => \Carbon\Carbon::now(),
        ]);
    }
}
