import Element from '../models/element.js';

export const getElementMiddleware = async (req, res, next) => {
    const elementId = req.params.id;
    let element;

    try {
        element = await Element.findById(elementId);
        if (!element) {
            return res.status(404).json({ message: 'Cannot find element' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    res.element = element;
    next();
}