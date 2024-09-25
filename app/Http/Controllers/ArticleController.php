<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands = Brand::all();
        return Inertia::render('Article/Create', ['brands'=>$brands]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Article $article)
    {
        $request->validate([
            'name' => 'required|min:2|',
            'body' => 'required|min:10|',
            'image'=> 'required|image',
            'brand'=> 'required',

        ]);

        $imageName = time().'.'.$request->image->extension();
        Article::create([
            'name' => $request->name,
            'body' => $request->body,
            'image' => $request->image->move(public_path('images'), $imageName),
            'brand_id' => $request->brand,
            'user_id' => Auth::user()->id,

        ]);

        $message = 'Articolo inserito!';
        return Redirect::route('/')->with('success', 'Articolo inserito con successo!' );
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
