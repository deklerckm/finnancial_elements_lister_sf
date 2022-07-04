import mongoose from 'mongoose';


const elementSchema = new mongoose.Schema({
    summary: {
        type: String,
        required: 'required field'
    },
    category: {
        type: String,
        enum: ['housing', 'travel', 'food', 'utilities', 'insurance', 'healthcare', 'financial', 'lifestyle', 'entertainment', 'miscellaneous', 'clothing'],
        default: 'miscellaneous',
        required: true
    },
    sum: {
        type: Number
    },
    currency: {
        type: String,
        enum: ['HUF', 'EUR'],
        default: 'HUF',
        required: 'required field'
    },
    paid: {
        type: Date
    }
})

elementSchema.index({ "$**": 'text' });

export default mongoose.model('Element', elementSchema)