/**
 * Name: Marcus Landry
 * Student ID: 100646671
 * Date Completed: April 14, 2025
 * 
 * Controller functions for handling animal-related routes.
 */

import Animal from '../model/Animal.js';

/**
 * Renders the home page
 */
export const getHome = async (req, res) => {
    try {
        res.render('index', { 
            title: 'Zoo Animal Management System',
            pageTitle: 'Welcome to Zoo Animal Management'
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

/**
 * Gets all animals and renders the all-animals page
 */
export const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find().sort({ createdAt: -1 });
        console.log('Fetched animals:', animals);  // Added logging
        res.render('animals/all-animals', { 
            title: 'All Animals',
            pageTitle: 'Animal List',
            animals 
        });
    } catch (error) {
        console.error('Error fetching animals:', error);  // Added error logging
        res.status(500).send('Server Error');
    }
};

/**
 * Renders the entry form page
 */
export const getEntryForm = (req, res) => {
    res.render('animals/entry-form', { 
        title: 'Add New Animal',
        pageTitle: 'New Animal Entry Form'
    });
};

/**
 * Creates a new animal record
 */
export const createAnimal = async (req, res) => {
    try {
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.redirect('/animals');
    } catch (error) {
        res.status(400).render('animals/entry-form', {
            title: 'Add New Animal',
            pageTitle: 'New Animal Entry Form',
            error: error.message
        });
    }
};

/**
 * Gets a single animal and renders the edit form
 */
export const getEditForm = async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) {
            return res.status(404).send('Animal not found');
        }
        res.render('animals/edit-animal', { 
            title: 'Edit Animal',
            pageTitle: 'Edit Animal Details',
            animal 
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

/**
 * Updates an existing animal record
 */
export const updateAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!animal) {
            return res.status(404).send('Animal not found');
        }
        res.redirect('/animals');
    } catch (error) {
        res.status(400).render('animals/edit-animal', {
            title: 'Edit Animal',
            pageTitle: 'Edit Animal Details',
            animal: { ...req.body, _id: req.params.id },
            error: error.message
        });
    }
};

/**
 * Deletes an animal record
 */
export const deleteAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id);
        if (!animal) {
            return res.status(404).send('Animal not found');
        }
        res.redirect('/animals');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
