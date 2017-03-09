<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\View\View;

class AngularController extends BaseController
{
    public function serveApp() : View
    {
        return view('angular');
    }
}
