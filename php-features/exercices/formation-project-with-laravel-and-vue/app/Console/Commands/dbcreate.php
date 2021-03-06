<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class dbcreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:create {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new database based on the config file or with the provided parameter';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Configure the database
        $schemaName = $this->argument('name') ?: config('database.connections.mysql.database');

        $charset  = config('database.connections.mysql.charset', 'utf8mb4');

        $collation  = config('database.connections.mysql.collation', 'utf8mb4_general_ci');

        config(['database.connections.mysql.database' => null]); // empty the database

        // Launch database requests
        DB::statement("DROP DATABASE IF EXISTS $schemaName;");
        DB::statement("CREATE DATABASE IF NOT EXISTS $schemaName CHARACTER SET $charset COLLATE $collation;");

        echo "Database $schemaName created successfully";

        config(['database.connections.mysql.database' => $schemaName]);
    }
}
