<?php

use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            'name' => 'Groby',
            'ext_id' => 11,
            'issue_tracker_id' => 1,
            'is_automatic_notification' => false,
        ]);

        DB::table('projects')->insert([
            'name' => 'Háda',
            'ext_id' => 12,
            'issue_tracker_id' => 2,
            'is_automatic_notification' => true,
            'created_at' => \Carbon\Carbon::now(),
        ]);

        DB::table('projects')->insert([
            'name' => 'Artexport',
            'ext_id' => 13,
            'issue_tracker_id' => 3,
            'is_automatic_notification' => false,
            'created_at' => \Carbon\Carbon::now(),
        ]);
    }
}
