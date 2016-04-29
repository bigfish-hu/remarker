<?php
namespace Src\Feedback\Domain;

interface ProjectRepositoryInterface
{
    /**
     * @param string $code
     * @return \Src\Feedback\Domain\Project
     * @throws \Src\Feedback\Exception\ProjectNotFound
     */
    public function getProject($code);
}
