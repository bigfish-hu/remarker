<?php

use Illuminate\Database\Seeder;

class ExtUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ExtUser::class, 20)->create();
    }
}
