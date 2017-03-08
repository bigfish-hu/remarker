<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;

class PushSubscriptionController extends Controller
{
    use ValidatesRequests;

    /**
     * Update user's subscription.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $this->validate($request, ['endpoint' => 'required']);

        Auth::user()->updatePushSubscription(
            $request->endpoint,
            $request->key,
            $request->token
        );
    }

    /**
     * Delete the specified subscription.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $endpoint)
    {
        Auth::user()->deleteSubscription($endpoint);

        return response()->json(null, 204);
    }
}
