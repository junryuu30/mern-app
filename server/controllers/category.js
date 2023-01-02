import Category from '../models/Category.js';
import { createError } from '../utils/error.js';

export const createCategory = async (req, res, next) => {
  const newCategory = new Category({
     categoryName: req.body.categoryName,
     user: req.user.id,
  });
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.categoryId).exec();
    if (!category) return next(createError({ status: 404, message: 'Category not found' }));
    if (category.user.toString() !== req.user.id) return next(createError({ status: 401, message: "It's not your category." }));

    const updatedCategory = await Category.findByIdAndUpdate(req.params.categoryId, {
     categoryName: req.body.categoryName,
    }, { new: true });
    return res.status(200).json(updatedCategory);
  } catch (err) {
    return next(err);
  }
};

export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export const getCurrentUserCategory = async (req, res, next) => {
  try {
    const categories = await Category.find({ user: req.user.id });
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (category.user === req.user.id) {
      return next(createError({ status: 401, message: "It's not your category." }));
    }
    await Category.findByIdAndDelete(req.params.categoryId);
    return res.json('Category Deleted Successfully');
  } catch (err) {
    return next(err);
  }
};

export const deleteAllCategory = async (req, res, next) => {
  try {
    await Category.deleteMany({ user: req.user.id });
    res.json('All Category Deleted Successfully');
  } catch (err) {
    next(err);
  }
};