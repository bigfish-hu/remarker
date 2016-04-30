<?php
namespace Src\Feedback\Infrastructure\Notification;

use Exception;
use PHPMailer;
use Src\Base\Config\Config;
use Src\Feedback\Domain\AbstractNotification;
use Src\Feedback\Domain\Feedback;
use Src\Feedback\Domain\Project;
use Src\Feedback\Exception\EmailCannotBeSent;
use Src\Feedback\Infrastructure\Twig\FeedbackTwig;

class PhpMailerEmailNotification extends AbstractNotification
{
    /**
     * @var \Src\Base\Infrastructure\Twig\TwigInterface
     */
    protected $twig;

    public function __construct(Config $config, FeedbackTwig $twig)
    {
        parent::__construct($config);
        $this->twig = $twig;
    }

    public function notify(Project $project, Feedback $feedback)
    {
        $recipients = $this->config->getEmailNotificationRecipients($project);
        if (empty($recipients)) {
            return;
        }

        $mailer = new PHPMailer(true);
        $mailer->CharSet = 'utf-8';
        $mailer->Sender = $this->config->getNoReplyEmailAddress();
        $mailer->setFrom($this->config->getNoReplyEmailAddress());
        foreach ($recipients as $recipient) {
            $mailer->addAddress($recipient);
        }
        $mailer->Subject = "Új észrevétel a(z) " . $project->getCode() . " nevű projekthez";
        $mailer->isHTML(true);
        $mailer->msgHTML($this->getBody($feedback));
        $mailer->addStringAttachment($feedback->getScreenshot(), "screenshot.jpg");
        
        try {
            $result = $mailer->send();

            if ($result === false) {
                throw new Exception();
            }
        } catch (Exception $e) {
            throw new EmailCannotBeSent($mailer->ErrorInfo);
        }
    }

    protected function getBody(Feedback $feedback)
    {
        return $this->twig->render(
            "mail_template.twig",
            [
                "feedback" => $feedback,
                "base_url" => $this->config->getBaseUrl(),
                "email_address" => $this->config->getSupportEmailAddress()
            ]
        );
    }
}
