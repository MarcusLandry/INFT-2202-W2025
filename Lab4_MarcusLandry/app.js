/*
Name:   Marcus Landry / 100646671
Date:   April 14, 2025
Course: Client Side Scripting
*/

import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mongoose from "mongoose";
import dotenv from "dotenv";
import hbs from "hbs";

// Load environment variables
dotenv.config({ path: './process.env' });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Connect to MongoDB
console.log('MongoDB URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));
hbs.registerPartials(join(__dirname, 'views/partials'));

// Register Handlebars helpers
hbs.registerHelper('formatDate', function(date, format) {
    if (!date) return '';
    const d = new Date(date);
    if (format === 'YYYY-MM-DD') {
        return d.toISOString().split('T')[0];
    }
    return d.toLocaleDateString();
});

hbs.registerHelper('eq', function(a, b) {
    return a === b;
});

// Import routes
import animalRoutes from './routes/animal.js';

// Use routes
app.use('/', animalRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
