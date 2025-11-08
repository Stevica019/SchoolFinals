<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cars', function (Blueprint $table) {

            $table->string('transimissionType')->after('year');
            $table->string('engineType')->after('transmissionType');
            $table->string('seats')->after('engineType');
            $table->string('doors')->after('seats');
        });
    }

    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn('transimissionType');
            $table->dropColumn('engineType');
            $table->dropColumn('seats');
            $table->dropColumn('doors');
        });
    }
};
