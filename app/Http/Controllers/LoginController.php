<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create()
    {
        // route menuju js/ react js
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {

        $validasi = [
            'required' => ':attribute tidak boleh kosong'
        ];

        $request->validate([
            'email' => "required",
            'password' => 'required'
        ], $validasi);

        if (Auth::attempt($request->only('email', 'password'), $request->remember)) {
            session()->regenerate();

            return redirect('/dashboard')->with([
                'message' =>  'Kamu berhasil login',
                'type' =>  'success'
            ]);
        }

        // ini adalah validasi error yang akan diterima oleh props di react 
        // ini akan dijadikan sebagai variabel {errors}
        throw ValidationException::withMessages([
            'email' => 'Email atau Password salah, coba lagi!!!'
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/')->with([
            'type' => 'success',
            'message' => 'Session telah dihapus, berhasil logout!!'
        ]);
    }
}
