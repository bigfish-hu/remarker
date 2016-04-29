<?php
namespace Src\Base\Infrastructure\Twig;

interface TwigInterface
{
    /**
     * @param string $template
     * @param array $data
     * @return string
     */
    public function render($template, array $data);
}
