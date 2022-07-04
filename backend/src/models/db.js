import mongoose from 'mongoose';

console.log(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`);

mongoose.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, { authSource: process.env.MONGODB_AUTH_SOURCE }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connected');
})