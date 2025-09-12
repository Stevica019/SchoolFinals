<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index()
{
    $cars = Car::all();
    return Inertia::render('AppPages/Cars/Cars', [
        'cars' => $cars,
    ]);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("AppPages/NewCar/NewCar");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'  => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year'  => 'required|integer|min:1900|max:' . date('Y'),
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $paths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $paths[] = $image->store('cars', 'public');
            }
        }

        $car = Car::create([
            'name'   => $data['name'],
            'model'  => $data['model'],
            'year'   => $data['year'],
            'images' => $paths,
        ]);

        return redirect()->back()->with('success', 'Car added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Car $car)
    {
    //     return Inertia::render('AppPages/Cars/Car', [
    //     'car' => $car,
    // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Car $car)
{
    if (!empty($car->images)) {
        foreach ($car->images as $imagePath) {
            Storage::disk('public')->delete($imagePath);
        }
    }

    $car->delete();

    return redirect()->route('cars.index')->with('success', 'Car deleted successfully!');
}
}
