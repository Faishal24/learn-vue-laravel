<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Message;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::factory()
            ->count(5)
            ->has(Message::factory()->count(3))
            ->create();
    }
}
