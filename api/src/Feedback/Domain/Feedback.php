<?php
namespace Src\Feedback\Domain;

use DateTimeImmutable;

class Feedback
{
    /**
     * @var \Src\Feedback\Domain\Browser
     */
    protected $browser;

    /**
     * @var string
     */
    protected $url;

    /**
     * @var resource
     */
    protected $screenshot;

    /**
     * @var string
     */
    protected $title;

    /**
     * @var string
     */
    protected $description;

    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $email;

    /**
     * @var \DateTimeImmutable
     */
    protected $created;

    /**
     * @param \Src\Feedback\Domain\Browser $browser
     * @param string $url
     * @param string $screenshot
     * @param string $title
     * @param string $description
     * @param string $name
     * @param string $email
     */
    public function __construct(Browser $browser, $url, $screenshot, $title, $description, $name, $email)
    {
        $this->browser = $browser;
        $this->url = $url;
        $this->screenshot = base64_decode($screenshot);
        $this->title = $title;
        $this->description = $description;
        $this->name = $name;
        $this->email = $email;
        $this->created = new DateTimeImmutable();
    }

    /**
     * @return \Src\Feedback\Domain\Browser
     */
    public function getBrowser()
    {
        return $this->browser;
    }

    /**
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @return resource
     */
    public function getScreenshot()
    {
        return $this->screenshot;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
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
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @return \DateTimeImmutable
     */
    public function getCreated()
    {
        return $this->created;
    }
}
