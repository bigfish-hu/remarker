<?php

use Illuminate\Database\Seeder;

class IssueTrackersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('issue_trackers')->insert([
            'name' => 'Mantis',
            'user_name' => 'Remarker',
            'password' => str_random(6),
            'api_url' => 'bug.bigfish.hu',
            'tracker_type' => 'mantis',
            'created_at' => \Carbon\Carbon::now(),
        ]);

        DB::table('issue_trackers')->insert([
            'name' => 'Jira',
            'user_name' => 'Remarker',
            'password' => str_random(6),
            'api_url' => 'jira.bigfish.hu',
            'tracker_type' => 'jira',
            'created_at' => \Carbon\Carbon::now(),
        ]);

        DB::table('issue_trackers')->insert([
            'name' => 'Redmine',
            'user_name' => 'Remarker',
            'password' => str_random(6),
            'api_url' => 'redmine.bigfish.hu',
            'tracker_type' => 'redmine',
            'created_at' => \Carbon\Carbon::now(),
        ]);
    }
}
