import Lead from "../models/lead.model.js";
import AppError from "../utils/appError.js";

const generate = async (req, res, next) => {
    const { fullName, email, phone, packages, chooseService } = req.body

    // Validate fields in the request body to avoid unwanted fields in the database.
    const VALID_FIELDS = ['fullName', 'email', 'phone', 'packages', 'chooseService'];
    const isValidOperation = Object.keys(req.body).every((field) => VALID_FIELDS.includes(field));
    if (!isValidOperation) {
        return res.status(400).send ({ error: 'Invalid fields' });
    }

    // Check if the required fields are empty
    if(!fullName || !email || !phone || !packages || !chooseService){
        return next(new AppError('Please fill in all fields', 400))
    }

    const leadExist = await Lead.findOne({ email })
    if(leadExist){
        return next(new AppError('Email already registered', 400))
    }

    const lead = await Lead.create({
        fullName,
        email,
        phone,
        packages,
        chooseService
    })

    if(!lead){
        return next(new AppError('User not registered, Server issue', 400))
    }
    
    await lead.save()

    return res.status(201).json({
        success: true,
        message: 'Successfully Submitted',
        lead
    })
}

export { generate }