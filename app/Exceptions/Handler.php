<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        if ($e instanceof UnauthorizedHttpException) {
            return response($e->getMessage(), Response::HTTP_UNAUTHORIZED);
        } elseif ($e instanceof JWTException) {
            return response($e->getMessage(), Response::HTTP_UNAUTHORIZED);
        } elseif ($e instanceof BadRequestHttpException) {
            return response($e->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
//        } catch (TokenExpiredException $e) {
//            return response()->json('token_expired', 401);
//        } catch (TokenInvalidException $e) {
//            return response()->json('token_invalid', 401);
//        } catch (JWTException $e) {
//            return response()->json('token_absent', 400);
//        }
        return parent::render($request, $e);
    }
}
