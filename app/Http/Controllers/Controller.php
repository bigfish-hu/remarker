<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Schema;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function extractExistingFieldsFromRequest(Request $request, string $tableName): array
    {
        $params = $request->all();
        $fields = ['*'];

        if (array_key_exists('fields', $params) && $params['fields']) {
            $fields = explode(',', $params['fields']);
            $tableFields = Schema::getColumnListing($tableName);

            $fields = array_filter(array_map(function ($item) use ($tableFields, $tableName) {
                if (in_array($item, $tableFields)) {
                    return $tableName . '.' . $item;
                }
            }, $fields));
        }

        return $fields;
    }
}
