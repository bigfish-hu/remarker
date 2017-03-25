<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feedbacks', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('title')->index();
            $table->string('description')->nullable();
            $table->string('url');
            $table->string('reporter_name')->nullable();
            $table->string('reporter_email')->nullable();
            $table->string('browser');
            $table->string('platform');
            $table->string('user_agent');
            $table->string('screen_resolution');
            $table->boolean('cookie_enabled');
            $table->integer('project_id')->nullable();
            $table->integer('ext_user_id')->nullable();
            $table->timestamps();
        });
        DB::statement("ALTER TABLE feedbacks ADD screenshot LONGBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('feedbacks');
    }
}
