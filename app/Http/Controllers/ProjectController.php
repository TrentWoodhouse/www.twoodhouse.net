<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::all();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        if($data['image'] === null) {
            $data['image'] = '/images/no-image.png';
        }
        $project = Project::create($data);
        return response()->json($project, 201);
    }

    public function show($id)
    {
        return Project::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        if($data['image'] === null) {
            $data['image'] = '/images/no-image.png';
        }
        $project = Project::findOrFail($id);
        $project->update($data);
        return response()->json($project, 200);
    }

    public function destroy($id)
    {
        $project = Project::find($id);
        $project->delete();
        return response()->json(null, 204);
    }
}
