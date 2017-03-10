<?php

use Illuminate\Database\Seeder;
use App\Project;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Project::class, 'project1')->create();
        factory(Project::class, 'project2')->create();
        factory(Project::class, 'project3')->create();
    }
}
