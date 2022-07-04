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

const insertInitElements = async () => {

    try {
        await Element.insertMany([
            {
                "id": "34567",
                "summary": "albérlet és rezsi április",
                "category": "housing",
                "sum": 175000,
                "currency": "HUF",
                "paid": "2022-04-20T12:56:00Z"
            },
            {
                "id": "34568",
                "summary": "reggeli szendvics",
                "category": "food",
                "sum": 750,
                "currency": "HUF",
                "paid": "2022-04-21T10:21:00Z"
            },
            {
                "id": "34569",
                "summary": "vonaljegy Oktogontól Nyugatiba",
                "category": "travel",
                "sum": 350,
                "currency": "HUF",
                "paid": "2022-04-21T10:54:00Z"
            },
            {
                "id": "34570",
                "summary": "vonatjegy haza",
                "category": "travel",
                "sum": 1250,
                "currency": "HUF",
                "paid": "2022-04-21T11:16:00Z"
            },
            {
                "id": "34571",
                "summary": "ruha a megnyitóra",
                "category": "clothing",
                "sum": 12000,
                "currency": "HUF",
                "paid": "2022-04-22T20:26:00Z"
            },
            {
                "id": "34572",
                "summary": "pizza az Oktogonnál",
                "category": "food",
                "sum": 3400,
                "currency": "HUF",
                "paid": "2022-04-23T10:55:00Z"
            },
            {
                "id": "34573",
                "summary": "havi bérlet",
                "category": "travel",
                "sum": 3450,
                "currency": "HUF",
                "paid": "2022-04-24T13:28:00Z"
            }
        ])
    } catch (error) {
        console.log('erroooor', error);
    }
}

// insertInitElements();

export { listElements, createElement };