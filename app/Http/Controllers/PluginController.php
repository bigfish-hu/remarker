<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\View;

class PluginController extends BaseController
{
    /**
     * @param $id
     * @return Response
     */
    public function getJs($id)
    {
        $contents = View::make('plugin.remarker', ['id' => $id]);
        $response = Response::make($contents, 200);
        $response->header('Content-Type', 'application/javascript');
        return $response;
    }
}
