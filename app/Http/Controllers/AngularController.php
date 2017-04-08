<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\File;

class AngularController extends BaseController
{
    public function serveApp()
    {
        return File::get(public_path() . '/admin/index.html');
    }
}
