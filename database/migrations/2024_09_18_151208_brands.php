<?php

use App\Models\Brand;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('brands', function(Blueprint $table){
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        $brands = ['Nike', 'Adidas', 'New Balance', 'Calvin klein', 'Ralph Lauren', 'Vans', 'Puma'];

        foreach ($brands as $brand){
            Brand::create([
                'name' => $brand,
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brands');
    }
};
