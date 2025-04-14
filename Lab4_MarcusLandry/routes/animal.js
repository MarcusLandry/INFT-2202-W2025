import express from 'express';
import {
    getHome,
    getAllAnimals,
    getEntryForm,
    createAnimal,
    getEditForm,
    updateAnimal,
    deleteAnimal
} from '../controllers/animalController.js';

const router = express.Router();

// GET routes
router.get('/', getHome);
router.get('/animals', getAllAnimals);
router.get('/animals/new', getEntryForm);
router.get('/animals/edit/:id', getEditForm);

// POST routes
router.post('/animals', createAnimal);
router.post('/animals/edit/:id', updateAnimal);
router.post('/animals/delete/:id', deleteAnimal);

export default router;
