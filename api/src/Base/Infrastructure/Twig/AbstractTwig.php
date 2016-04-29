<?php
namespace Src\Base\Infrastructure\Twig;

use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_Extension_Debug;

abstract class AbstractTwig implements TwigInterface
{
    /**
     * @var \Twig_Environment
     */
    private $twig;

    /**
     * @return string
     */
    abstract protected function getPath();

    public function __construct()
    {
        $this->twig = new Twig_Environment(
            null,
            [
                "debug" => APP_MODE === "dev" ? false : true,
                "cache" => false,
            ]
        );

        // LOADER
        $loader = new Twig_Loader_Filesystem();
        $loader->addPath($this->getPath());
        $this->twig->setLoader($loader);

        // EXTENSIONS
        $this->twig->addExtension(new Twig_Extension_Debug());
        $this->twig->getExtension("core")->setEscaper("slash", function($twig, $str) {
            $str = str_replace("'", "", $str);
            $str = str_replace("\n", "", $str);

            return $str;
        });
    }

    /**
     * @param string $template
     * @param array $data
     * @return string
     */
    public function render($template, array $data)
    {
        return $this->twig->render($template, $data);
    }
}
