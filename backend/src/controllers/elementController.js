import '../models/db.js';
import Element from '../models/element.js';

const getElements = async (req, res) => {
    const { limit = 10, page = 0, searchString, category, summary } = req.query;
    const skip = page * limit;

    let query = {};
    if (searchString) {
        query = { $text: { $search: searchString } };
    }
    if (category) {
        query.$or = category.split(',').map(cat => ({ category: cat }));
    };
    if (summary) query.summary = {
        $regex: summary,
        $options: 'i'
    };


    let count;
    let elements;
    try {
        elements = await Element
            .find(query)
            .limit(+limit)
            .skip(skip);

        count = await Element.find(query).countDocuments().exec();

    } catch (error) {
        res.status(500).json({ message: error })
    }

    res.status(200).json({ nodes: elements, aggregate: { count } });
}

const getElement = async (req, res) => {
    res.status(200).json(res.element);
}

const createElement = async (req, res) => {
    const newElement = new Element({
        summary: req.body.summary,
        category: req.body.category,
        sum: req.body.sum,
        currency: req.body.currency,
        paid: req.body.paid,
    })

    try {
        await newElement.save();
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

    res.status(200).json(newElement);
}

const deleteElement = async (req, res) => {
    try {
        res.element.remove();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

    res.status(200).json(res.element);
}

const updateElement = async (req, res) => {
    const properties = ['summary', 'category', 'sum', 'currency', 'paid'];

    for (let i = 0; i < properties.length; i++) {
        const propertyKey = properties[i];

        if (req.body[propertyKey]) {
            res.element[propertyKey] = req.body[propertyKey];
        }
    }

    let updatedSubscriber;

    try {
        updatedSubscriber = await res.element.save();
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

    res.status(200).json(updatedSubscriber);
}

export { getElements, getElement, createElement, deleteElement, updateElement };