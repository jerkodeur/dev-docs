<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOffersUsers extends Migration
{
    /**
     * Run the migrations.
     * Many to many tables
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers_users', function (Blueprint $table) {
            $table->foreignId('offers_id')->references('id')->on('offers');
            $table->foreignId('users_id')->references('id')->on('users');
            $table->primary(['offers_id', 'users_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers_users');
    }
}
