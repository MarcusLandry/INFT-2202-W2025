import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    zoo: {
        type: String,
        required: [true, 'Zoo name is required']
    },
    scientificName: {
        type: String,
        required: [true, 'Scientific name is required']
    },
    commonName: {
        type: String,
        required: [true, 'Common name is required']
    },
    givenName: {
        type: String,
        required: [true, 'Given name is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ['Male', 'Female', 'Unknown']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: 0
    },
    isTransportable: {
        type: Boolean,
        required: [true, 'Transportable status is required']
    }
}, {
    timestamps: true
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
