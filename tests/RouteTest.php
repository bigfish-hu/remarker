<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RouteTest extends TestCase
{
    /**
     * @return void
     * @test
     */
    public function testIndex()
    {
        $response = $this->call('GET', '/');

        $this->assertEquals(200, $response->status());
    }

    /**
     * @return void
     * @test
     */
    public function testAdminIndex()
    {
        $response = $this->call('GET', '/admin');

        $this->assertEquals(200, $response->status());
        $this->see('login');
    }

}
