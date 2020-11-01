<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = CategoryCollection::collection(Category::orderByDesc('created_at')->get());
        return view('categories', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return  Category::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return new CategoryCollection($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $category = $category->update($request->all());
        if($category){
            $response = response()->json([
                'message' => 'La catégorie a bien mise à jour',
                'datas' => $request->all()
            ]);
        }
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        return $category->delete();
    }
}
