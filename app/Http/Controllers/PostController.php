<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        $post = Post::create($data);
        return response()->json($post, 201);
    }

    public function show($id)
    {
        return Post::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->offsetUnset('type');
        $request->offsetUnset('user_id');
        $data = $request->all();
        $post = Post::findOrFail($id);
        $post->update($data);
        return response()->json($post, 200);
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return response()->json(null, 204);
    }
}
