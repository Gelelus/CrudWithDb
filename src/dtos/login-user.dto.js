const Joi = require('@hapi/joi');

const validationUserSchema = Joi.object({
    user: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
})

module.exports = validationUserSchema;