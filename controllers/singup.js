import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";

import SingupModel from '../models/singup.js';

const router = express.Router();


export const sign = (async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const record = new SingupModel({
            name: name,
            email: email,
            password: password
        }
        )
        const results = await record.save();
        res.json({
            data: results,
            status: 200,
            message: "Suucess"
        })
    } catch (error) {
        res.json({
            error: error
            , status: 400,
            message: "Not Succsefuuly"
        })
    }


})

export const login = (async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await SingupModel.findOne({ name: name });
        const isPassword = await SingupModel.findOne({ password: password });

        if (!user || !isPassword) {
            res.json({
                status: false,
                msg: "Invalid login or password"
            });
        }

        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: "5h",
        });
        res.json({
            status: true,
            user: user,
            msg: "Login successfully !!",
            token: token
        });

    } catch (error) {
        res.json({
            error: error,
            msg: "not Suucess",
            status: 500

        })
    }

})

export default router;
