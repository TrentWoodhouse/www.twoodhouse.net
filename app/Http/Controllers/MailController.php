<?php

namespace App\Http\Controllers;

use App\User;
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function contact(Request $request)
    {
        Mail::to(User::first()->email)->send(new Contact($request->get('name'), $request->get('email'), $request->get('message')));
        return response()->json(null, 200);
    }
}
