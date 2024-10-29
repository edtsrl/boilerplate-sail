<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin Builder
 */
abstract class SqlModel extends Model
{
    protected $connection = 'mysql';
    public $timestamps = true;
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];
}
