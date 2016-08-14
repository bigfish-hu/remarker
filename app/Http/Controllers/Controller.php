<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

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
