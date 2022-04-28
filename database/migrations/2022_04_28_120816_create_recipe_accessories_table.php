<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_accessories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("recipe_id");
            $table->foreign("recipe_id")->references("id")->on("recipes");
            $table->unsignedBigInteger("accessory_id");
            $table->foreign("accessory_id")->references("id")->on("accessories");
            $table->integer('amount');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipe_accessories');
    }
};
