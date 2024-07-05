const Category = require('../models/oneWay');

exports.addCategory = async (req, res) => {
    const {from,to,date,time,van} = req.body;
    try {
        const newCategory = new Category({ from,to,date,time,van });
        await newCategory.save();
        res.json(newCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateCategory = async (req, res) => {
    const { from, to, date, time, van } = req.body;
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        category.from = from;
        category.to = to;
        category.date = date;
        category.time = time;
        category.van = van;
        await category.save();
        res.json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Category removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};