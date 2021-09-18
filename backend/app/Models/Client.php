<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
      'nom_prenom',
      'code_client',
      'email',
      'adresse',
      'code_postal',
      'numero_telephone'
    ];

}
