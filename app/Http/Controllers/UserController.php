<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class UserController extends Controller
{
    public function register(Request $req){

      if(Cookie::get('auth')!==null){
        // case when the user is already logged in
        return response()->json(["message" => "User is already logged in"], 201);
      }

      try{
        $user = User::create($req->toArray());
        Auth::login($user);

        $cookie = Cookie::make('auth', $req['username'], 120);

        return response()->json(["message" => "User registered successfully"], 201)->cookie($cookie);
      }catch (Illuminate\Database\QueryException $e){
          $errorCode = $e->errorInfo[1];
          if($errorCode == 1062){
              return response()->json(["message" => "User with entered email or username exists"], 401);
          }
      }
    }

    public function login(Request $request){

      if(Cookie::get('auth')!==null){
        // case when the user is already logged in
        return response()->json(["message" => "User is already logged in"], 400);
      }

      if(Auth::attempt(['username'=>$request['username'], 'password'=>$request['password']])){
        $cookie = Cookie::make('auth', $request['username'], 120);
        return response()->json(["message" => "Logged in!"], 201)->cookie($cookie);
      }
      return response()->json(["message" => "Wrong username or password!"], 401);
    }

    public function logout(){
      $cookie = Cookie::forget('auth');
      Auth::logout();
      return redirect()->route('main')->withCookie($cookie);
    }

}
