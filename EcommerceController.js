const mongoose = require('mongoose');
require('dotenv').config();
const apiModel = require('../allModels/EcommerceModel');
const dbConnect = require('../DbConnect/dbConnect');

dbConnect();

const EcommerceController = {

    addData: async (req, res) => {
        try {
            const { name, description, category, price } = req.body;
            const newProduct = new apiModel({ name, description, category, price });
            await newProduct.save();
            res.status(201).send({ message: "Data posted successfully", newProduct });
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },
    getData: async (req, res) => {
        try {
            const getProducts = await apiModel.find();
            res.send(getProducts);
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },

    getDataById: async (req, res) => {
        try {
            const { id } = req.params;
            const getById = await apiModel.findById(id);
            const isValidId = mongoose.Types.ObjectId.isValid(id);
            if (!isValidId) {
                return res.status(400).send({ message: "Invalid ID" });
            }
            if (!getById) {
                res.status(404).send({ message: "invalid id data not found" });
            }
            res.status(200).send(getById);
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },

    putData: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, category, price } = req.body;
            const isValidId = mongoose.Types.ObjectId.isValid(id);
            if (!isValidId) {
                return res.status(400).send({ message: "Invalid ID" });
            }
            const putData = await apiModel.findByIdAndUpdate(
                id,
                { name, description, price, category },
                { new: true }
            )
            if (!putData) {
                res.status(404).send({ message: "data not found" });
            }
            res.status(200).send(putData);
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },

    deleteData: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, category, price } = req.body;
            const isValidId = mongoose.Types.ObjectId.isValid(id);
            if (!isValidId) {
                return res.status(400).send({ message: "Invalid ID" });
            }
            const deleteData = await apiModel.findByIdAndDelete(
                id,
                { name, description, price, category }
            )
            if (!deleteData) {
                res.status(404).send({ message: "data not found" });
            }
            res.status(200).send(deleteData);
        } catch (err) {
            res.status(500).send({ message: "server error", error: err.message });
        }
    },


}

module.exports = EcommerceController;
