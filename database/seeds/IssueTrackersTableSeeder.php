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
        \App\IssueTracker::query()->create([
            'name' => 'Mantis',
            'user_name' => 'Remarker',
            'password' => str_random(6),
            'api_url' => 'bug.bigfish.hu',
            'tracker_type' => 'mantis',
        ]);

        \App\IssueTracker::query()->create([
            'name' => 'Jira',
            'user_name' => 'Remarker',
            'password' => str_random(6),
            'api_url' => 'jira.bigfish.hu',
            'tracker_type' => 'jira',
        ]);

        \App\IssueTracker::query()->create([
            'name' => 'Redmine',
            'user_name' => 'Remarker',
            'password' => str_random(6),
            'api_url' => 'redmine.bigfish.hu',
            'tracker_type' => 'redmine',
        ]);
    }
}
