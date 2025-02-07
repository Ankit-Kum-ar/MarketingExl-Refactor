import { Schema, model } from "mongoose"

const leadSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your full name'],
        trim: true,
        maxlength: [50, 'Full name cannot exceed 50 characters'],
        minlength: [5, 'Full name must be at least 5 characters long'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true,
        lowercase: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please fill in a valid email address',
        ]
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone number'],
        trim: true,
        unique: true,
        match: [
            /^(\+)?([ 0-9]){10,14}$/,
            'Please fill in a valid phone number',
        ],
        minlength: [10, 'Phone number must be 10 digits'],
        maxlength: [10, 'Phone number must be 10 digits']
    },
    packages: {
        type: String,
        required: [true, 'Please choose a package'],
        enum: {
            values: ['Standard', 'Premium', 'Entreprises'],
            message: '{VALUE} is not supported'
        }
    },
    chooseService: {
        type: String,
        required: [true, 'Please choose a service'],
        enum: {
            values: ['Social Media Management', 'SEO and SEM', 'Email and WhatsApp Marketing'],
            message: '{VALUE} is not supported'
        }
    },
    forgortPasswordToken: String,
    forgortPasswordExpire: Date
}, {
    timestamps: true
})


const Lead = model('Lead', leadSchema)
export default Lead