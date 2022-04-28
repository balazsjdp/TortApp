<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Accessory;

class AccessoryController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }


    public function all()
    {
        return Accessory::all();
    }

    public function update(Request $request, $id){
        $newData = json_decode($request->getContent());
        $accessory = Accessory::find($id);

        $accessory->name = $newData->name;
        $accessory->price = $newData->price;

        $accessory->save();
    }

    public function delete(Request $request, $id){
        $accessory = Accessory::find($id);
        $accessory->delete();
    }

    public function add(){

        $ingredient = new Accessory;

        $ingredient = Accessory::create([
            'name' => 'Új kiegészítő',
            'price' => '0',
        ]);

    }
}
