<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class AngularController extends BaseController
{
    /**
     * Serve the angular application.
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function serveApp()
    {
        return view('angular');
    }
}
