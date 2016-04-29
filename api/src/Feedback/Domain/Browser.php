<?php
namespace Src\Feedback\Domain;

class Browser
{
    /**
     * @var string
     */
    protected $codeName;

    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $version;

    /**
     * @var string
     */
    protected $cookieEnabled;

    /**
     * @var string
     */
    protected $platform;

    /**
     * @var string
     */
    protected $userAgent;

    /**
     * @var string
     */
    protected $screen;

    /**
     * @param string $codeName
     * @param string $name
     * @param string $version
     * @param string $isCookieEnabled
     * @param string $platform
     * @param string $userAgent
     * @param string $screen
     */
    public function __construct($codeName, $name, $version, $isCookieEnabled, $platform, $userAgent, $screen)
    {
        $this->codeName = $codeName;
        $this->name = $name;
        $this->version = $version;
        $this->cookieEnabled = $isCookieEnabled;
        $this->platform = $platform;
        $this->userAgent = $userAgent;
        $this->screen = $screen;
    }

    /**
     * @return string
     */
    public function getCodeName()
    {
        return $this->codeName;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * @return string
     */
    public function isCookieEnabled()
    {
        return $this->cookieEnabled;
    }

    /**
     * @return string
     */
    public function getPlatform()
    {
        return $this->platform;
    }

    /**
     * @return string
     */
    public function getUserAgent()
    {
        return $this->userAgent;
    }

    /**
     * @return string
     */
    public function getScreen()
    {
        return $this->screen;
    }
}
