<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use MongoDB\Laravel\Eloquent\Model;

/**
 * @mixin Builder
 */
abstract class MongoModel extends Model
{
    protected $connection = 'mongodb';
    public $timestamps = true;
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
}
