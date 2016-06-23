<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;
use Dingo\Api\Routing\Helpers;

class Controller extends BaseController
{
    use Helpers;

    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    protected function unsetEmptyInputFields(array $input)
    {
        foreach ($input as $field => $value) {
            if (!$value) {
                unset($input[$field]);
            }
        }

        return $input;
    }
}
