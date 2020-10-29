<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id(); // bigInt unsigned (> 0)
            $table->string('name');
            $table->string('slug');
            $table->bigInteger('parent_id')->unsigned();
            $table->timestamps(); // created_at and updated_at field in database
            $table->foreign('parent_id')->references('id')->on('categories'); // create intern foreign key
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
