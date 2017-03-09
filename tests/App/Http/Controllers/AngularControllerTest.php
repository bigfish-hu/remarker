<?php

namespace Tests\App\Http\Controllers;

use Illuminate\Http\Response;
use Tests\BaseTestClass;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 */
class AngularControllerTest extends BaseTestClass
{

    public function testGetAngularPage()
    {
        $this->get($this->baseUrl . 'admin')->assertStatus(Response::HTTP_OK)->assertSee('Remarker Admin');
    }
}
