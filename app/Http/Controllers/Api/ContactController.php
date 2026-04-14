<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function index(): JsonResponse
    {
        $contacts = Contact::with('latestMessage')->get();

        return response()->json($contacts);
    }

    public function show(Contact $contact): JsonResponse
    {
        return response()->json($contact->load('messages'));
    }
}
