<?php
namespace Src\Feedback\Infrastructure\Twig;

use Src\Base\Infrastructure\Twig\AbstractTwig;

class FeedbackTwig extends AbstractTwig
{
    protected function getPath()
    {
        return PROJECT_ROOT . "/src/Feedback/Resource";
    }
}
