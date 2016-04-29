<?php
namespace Src\Frontend\Infrastructure\Twig;

use Src\Base\Infrastructure\Twig\AbstractTwig;

class FrontendTwig extends AbstractTwig
{
    protected function getPath()
    {
        return PROJECT_ROOT . "/src/Frontend/Resource";
    }
}
