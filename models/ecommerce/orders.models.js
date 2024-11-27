import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    contomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems:{
        type: [orderItemSchema]
    },
    addtess: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
        default: 'PENDING'
    }
}, {timestamps: true});

export const Order = mongoose.model('Order', orderSchema);