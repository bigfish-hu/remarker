<?php
namespace Src\Feedback\Action;

use WoohooLabs\Yin\JsonApi\JsonApi;

class CreateFeedback
{
    /**
     * @Inject
     * @var \Src\Feedback\Domain\ProjectRepositoryInterface
     */
    protected $projectRepository;

    /**
     * @Inject
     * @var \Src\Feedback\JsonApi\Hydrator\FeedbackHydator
     */
    protected $feedbackHydrator;
    
    /**
     * @param \WoohooLabs\Yin\JsonApi\JsonApi $jsonApi
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function __invoke(JsonApi $jsonApi)
    {
        $project = $this->projectRepository->getProject($jsonApi->request->getAttribute("project"));
        $feedback = $this->feedbackHydrator->hydrate($jsonApi->getRequest());
        $project->sendNotifications($feedback);
        
        return $jsonApi->respond()->noContent();
    }
}
