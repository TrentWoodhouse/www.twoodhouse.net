<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PhotoController extends Controller
{
    public function imageUpload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:20000',
        ]);
        $image = $request->file('image');
        $path = '/' . Str::random(64) . '.' . $image->extension();
        $request->file('image')->storeAs('uploads', $path);
        return response()->json(asset('uploads') . $path, 200);
    }
}
