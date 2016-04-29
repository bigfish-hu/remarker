<?php

use Psr\Http\Message\ResponseInterface;

if (function_exists("v") === false) {
    function vv($variable)
    {
        printDebugHeader();
        echo "<pre>";
        var_dump($variable);
        exit;
    }
}

if (function_exists("p") === false) {
    function pp($variable)
    {
        print_r($variable);
        exit;
    }
}

if (function_exists("pr") === false) {
    function ppr(ResponseInterface $variable)
    {
        print_r($variable->getBody()->getContents());
        exit;
    }
}

function printDebugHeader()
{
    $trace = debug_backtrace(0, 4);
    foreach ($trace as $item) {
        if ($item["file"] !== __FILE__) {
            echo "API " . $item["file"] . ", L" . $item["line"];
            return;
        }
    }
}
