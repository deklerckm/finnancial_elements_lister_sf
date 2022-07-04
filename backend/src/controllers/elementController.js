import '../models/db.js';
import Element from '../models/element.js';

const listElements = async (req, res) => {

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


    try {
        const elements = await Element
            .find(query)
            .limit(+limit)
            .skip(skip);

        const count = await Element.find(query).countDocuments().exec();

        res.json({ nodes: elements, aggregate: { count } });
    } catch (error) {
        res.status(400).json({ message: error })
    }
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
        res.json(newElement);
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export { listElements, createElement };