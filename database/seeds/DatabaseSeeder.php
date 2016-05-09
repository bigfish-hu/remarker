<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
        $this->call(FeedbacksTableSeeder::class);
        $this->call(IssueTrackersTableSeeder::class);
        $this->call(ExtUsersTableSeeder::class);
    }
}
