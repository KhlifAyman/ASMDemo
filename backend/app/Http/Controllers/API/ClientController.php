<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Client;


class ClientController extends Controller
{

    public function getAll(){
      $data = Client::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['nom_prenom'] = $request['nom_prenom'];
      $data['email'] = $request['email'];
      $data['numero_telephone'] = $request['numero_telephone'];
      $data['code_postal'] = $request['code_postal'];
      $data['code_client'] = $request['code_client'];
      $data['adresse'] = $request['adresse'];
      Client::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Client::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Client::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['nom_prenom'] = $request['nom_prenom'];
        $data['email'] = $request['email'];
        $data['numero_telephone'] = $request['numero_telephone'];
        $data['code_postal'] = $request['code_postal'];
        $data['code_client'] = $request['code_client'];
        $data['adresse'] = $request['adresse'];
      Client::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}
