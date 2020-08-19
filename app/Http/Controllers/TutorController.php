<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tutor;

class TutorController extends Controller
{
    public function register(Request $request){
        try{
          $tutor = Tutor::create($request->toArray());

          return response()->json(["message" => "Tutor registered successfully"], 201);
        }catch (Illuminate\Database\QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(["message" => "Tutor with entered email or telephone number exists"], 401);
            }
        }
    }

    public function getAllData(){
        return Tutor::all();
    }
}
