const express = require('express');
const router = express.Router();
const responseSchema = require('./../helpers/ResponseSchema');
const validator = require('validate.js');
const empty = require('../helpers/Empty');
const User = require('../sequelize/models').users;
const UserPlan = require('../sequelize/models').user_plans;
const Plans = require('../sequelize/models').plans;
const Service = require('../sequelize/models').services;
const Roles = require('../sequelize/models').roles;
const Urbanism = require('../sequelize/models').urbanisms;
const RoleModels = require('../sequelize/models').role_modules;
const Cities = require('../sequelize/models').ciudades;
const States = require('../sequelize/models').estados;
const CompanyData = require('../sequelize/models').company_data;
const EmailTemplate = require('../sequelize/models').email_templates;
const bcrypt = require('bcryptjs')
const CONFIG = require('../config');
const PER_PAGE = CONFIG.PER_PAGE
const SERVER_IP = CONFIG.SERVER_IP
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const qs = require('qs');
const Modules = require('../sequelize/models').modules;
var mailer = require('./../helpers/Email')
    //****************************************************   [       ENDPOINTS DE USUARIOS        ]************************************************************************** */

router.get('/document/:name', async(req, res) => {
    res.sendFile(req.params.name, { "root": './documents/user_document' });
})

router.get('/', async(req, res) => {

    var page = empty(req.query.page) ? 1 : (+req.query.page < 1 ? 1 : +req.query.page)
    var search = empty(req.query.search) ? null : req.query.search

    let foundedUsers = await User.findAll({
        where: search == null ? {} : {
            [Op.or]: [{
                name: {
                    [Op.like]: "%" + search + "%"
                }
            }]
        },
        include: [{
                model: UserPlan,
                attributes: ['id', 'status', 'start_date'],
                include: {
                    model: Plans,
                    as: 'plan',
                    include: {
                        model: Service,
                        as: 'service'
                    }
                }
            },
            {
                model: Roles,
                as: 'client_role',
                include: {
                    model: RoleModels,
                    as: 'role_modules',
                    attributes: ['id'],
                    include: {
                        model: Modules,
                        as: 'modules'
                    }
                }
            },
            {
                model: Urbanism,
                as: 'urbanism',
                attributes: ['id', 'name', 'households_qty', 'latitude', 'longitude'],
                include: {
                    model: Cities,
                    as: 'ciudad',
                    attributes: ['id_ciudad', 'ciudad'],
                    include: {
                        model: States,
                        as: 'estado'
                    }
                }
            }
        ],
        offset: PER_PAGE * (page - 1),
        limit: PER_PAGE,
        attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email', 'urbanism_id', 'document_img'],
    });



    return responseSchema(
        res, {
            data: foundedUsers,
            error: false,
            message: 'OK'
        },
        200
    )
})

router.get('/:id', async(req, res) => {

    let foundedUser = await User.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'name', 'lastname', 'dni', 'address', 'address_alt', 'phone', 'email', 'document_img'],
        include: [{
                model: UserPlan,
                attributes: ['id', 'status', 'start_date'],
                include: {
                    model: Plans,
                    as: 'plan',
                    include: {
                        model: Service,
                        as: 'service'
                    }
                }
            },
            {
                model: Roles,
                as: 'client_role',
                include: {
                    model: RoleModels,
                    as: 'role_modules',
                    attributes: ['id'],
                    include: {
                        model: Modules,
                        as: 'modules'
                    }
                }
            },
            {
                model: Urbanism,
                as: 'urbanism',
                attributes: ['id', 'name', 'households_qty', 'latitude', 'longitude'],
                include: {
                    model: Cities,
                    as: 'ciudad',
                    attributes: ['id_ciudad', 'ciudad'],
                    include: {
                        model: States,
                        as: 'estado'
                    }
                }
            }
        ]
    })

    if (empty(foundedUser)) {

        return responseSchema(
            res, {
                data: null,
                error: true,
                message: 'USER_NOT_FOUND'
            },
            200
        )
    }

    return responseSchema(
        res, {
            data: foundedUser,
            error: false,
            message: 'OK'
        },
        200
    )
})


//**************************************************[  REGISTRO DE USUARIO   ]********************************************************************************* */

router.post('/register', async(req, res) => {

    var body = qs.parse(req.body)
    var file = qs.parse(req.files)

    var types = ['NATURAL', 'JURIDICA']

    var constraints = {

        name: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        lastname: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        dni: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        address: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        address_alt: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        phone: {
            presence: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        email: {
            presence: true,
            email: true,
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        // password: {
        //     presence: true,
        //     length: {
        //         minimum: 1,
        //         maximum: 255,
        //     }
        // },
        urbanism_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        },
        type: {
            presence: true,
            inclusion: {
                within: types,
                message: "Only accepted values: NATURAL or JURIDICA"
            }
        },
        plan_id: {
            presence: true,
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        }
    };

    var imgConstrain = {
        presence: true,
        img: {
            presence: true
        },
    }

    var validation = validator(body, constraints);
    var imgValidation = validator(file, imgConstrain)

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }

    if (!empty(imgValidation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", imgValidation);
    }

    if (body.type == "LEGAL") {
        if (!(
                file.img.mimetype == 'image/png'
            )) {
            return responseSchema(res, 'ERR_FILE_TYPE', null)
        }

    } else {
        if (!(
                file.img.mimetype == 'image/jpeg' ||
                file.img.mimetype == 'image/png'
            )) {
            return responseSchema(res, 'ERR_FILE_TYPE', null)
        }
    }

    try {
        var foundedEmail = await User.findOne({
            where: { email: body.email },
        })

        if (!empty(foundedEmail)) {
            return responseSchema(res, 'EMAIL_REGISTERED', 400)
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {
        var foundedDni = await User.findOne({
            where: { dni: body.dni },
        })

        if (!empty(foundedDni)) {
            return responseSchema(res, 'DNI_REGISTERED', 400)
        }

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

    try {

        var user = body

        user.name = fixStringToLowerCase(user.name)
        user.lastname = fixStringToLowerCase(user.lastname)
        user.email = fixStringToLowerCase(user.email);

        user.role = 3

        // CREACION Y ENCRIPTACION DE LA CONTRASENA
        var password = generatePassword(7)
        const passwordHash = bcrypt.hashSync(password, 10);
        user.password = passwordHash

        let name = user.name + user.lastname + user.dni
        let url = await saveImage(file.img, name)

        user.document_img = url
        user.active = 0

        try {

            let createdUser = await User.create(user, { returning: true })

            await UserPlan.create({
                plan_id: user.plan_id,
                client_id: createdUser.id,
                status: 0,
                start_date: null
            })

            var companyData = await getCompanyData()
            var emailTemplate = await getPasswordEmailTemplate()

            companyData.logo = companyData.logo.replace(' ', '')

            var logo = `<img src="cid:imagename"  height="90">`

            var template = emailTemplate.text
            template = template.replace('##logo##', logo)
            template = template.replace('##mail.support##', companyData.support_email)

            mailer({
                from: "no-reply@ptve.net",
                to: req.body.email,
                subject: 'Registro Pacific-telecom',
                html: `Bienvenido a pacific telecom ${req.body.name} ${req.body.lastname} tu usuario para entrar a la plataforma es ${req.body.email} y tu contrasena es
                 ${password}` + template,
                attachments: [{
                    path: companyData.logo,
                    cid: 'imagename'
                }],
            })

        } catch (err) {
            console.log(err)
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
})


router.post('/test/email', async(req, res) => {

    var companyData = await getCompanyData()
    var emailTemplate = await getPasswordEmailTemplate()
    var template = emailTemplate.text
    companyData.logo = companyData.logo.replace(' ', '')
    var logo = `<img src="cid:imagename"  height="90">`
    template = template.replace('##logo##', logo)
    template = template.replace('##mail.support##', companyData.support_email)

    mailer({
        from: "no-reply@ptve.net",
        to: req.body.email,
        subject: 'Registro Pacific-telecom',
        html: template,
        attachments: [{
            path: companyData.logo,
            cid: 'imagename'
        }],
    })

    return responseSchema(
        res, {
            error: false,
            message: 'OK'
        },
        201
    )

})


//**************************************************[  CAMBIO DE CONTRASENA   ]***************************************************************** */

router.patch('/admin_password_change/:id', async(req, res) => {

    try {

        var constraints = {
            new_password: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            }
        }

        var validation = validator(req.body, constraints);

        if (!empty(validation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
        }

        const passwordHash = bcrypt.hashSync(req.body.new_password, 10);

        await User.update({ password: passwordHash }, { where: { id: req.params.id } })

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
})


router.patch('/client_password_change/:id', async(req, res) => {

    try {

        var constraints = {
            current_password: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            },
            new_password: {
                presence: true,
                length: {
                    minimum: 1,
                    maximum: 255,
                }
            }
        }


        var validation = validator(req.body, constraints);

        if (!empty(validation)) {
            return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
        }

        try {

            var foundedUser = await User.findOne({
                where: { id: req.params.id },
            })

        } catch (error) {
            return responseSchema(res, 'ERR_FAILED', 500)
        }

        if (empty(foundedUser)) {
            return responseSchema(res, 'USER_NOT_REGISTERED', 400)
        }

        const verified = bcrypt.compareSync(req.body.current_password, foundedUser.dataValues.password);

        if (!verified) {
            return responseSchema(res, {
                    error: false,
                    message: 'CURRENT_PASSWORD_DO_NOT_MATCH'
                },
                400
            );
        } else {

            const passwordHash = bcrypt.hashSync(req.body.new_password, 10);

            await User.update({ password: passwordHash }, { where: { id: req.params.id } })
        }

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
})

//**************************************************[   REGISTRO ADMINISTRADOR  ]************************************************************** */


router.patch('/:id', async(req, res) => {

    var constraints = {

        name: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        lastname: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        address: {

            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        address_alt: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        phone: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        email: {
            length: {
                minimum: 1,
                maximum: 255,
            }
        },
        urbanism_id: {
            numericality: {
                onlyInteger: true,
                greatenThan: 0
            }
        }
    };

    var validation = validator(req.body, constraints);

    if (!empty(validation)) {
        return responseSchema(res, "ERR_VALIDATION_FAILED", validation);
    }
    try {
        var foundedEmail = await User.findOne({
            where: { email: req.body.email },
        })

        if (!empty(foundedEmail)) {

            if (foundedEmail.id == req.params.id) {

                await updateUser(req.body, req.params.id)

                return responseSchema(
                    res, {
                        data: req.body,
                        error: false,
                        message: 'OK'
                    },
                    200
                )
            } else {

                return responseSchema(
                    res, {
                        error: true,
                        message: 'EMAIL_ALREADY_IN_USE'
                    },
                    200
                )

            }

        }

        await updateUser(req.body, req.params.id)

        return responseSchema(
            res, {
                data: req.body,
                error: false,
                message: 'OK'
            },
            201
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
})


router.delete('/:id', async(req, res) => {

    try {

        await User.destroy({
            where: { id: req.params.id },
            paranoid: false
        })

        return responseSchema(
            res, {
                error: false,
                message: 'OK'
            },
            200
        )

    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }

});

//************************************************   [    Functions    ]***************************************************************** */ 
var updateUser = async(user, id) => {
    try {
        await User.update(user, { where: { id: id } })
        return true
    } catch (error) {
        console.log(error)
        return responseSchema(res, 'ERR_FAILED', 500)
    }
}

var saveImage = async(image, name) => {
    return new Promise(async function(resolve, reject) {

        var logoPath = '/user/document/'
        var filePathName = './documents/'

        var urlExtencion = image.mimetype.replace('image/', '.')

        image.mv(filePathName + 'user_document/' + name + urlExtencion, function(
            err,
            res
        ) {
            if (err) {
                console.log(err)
                return reject()
            } else {
                var url = SERVER_IP + logoPath + name + urlExtencion
                return resolve(url)
            }
        })
    })
}

const generatePassword = ((length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    result = result.replace(' ', '')

    return result;
})

const getCompanyData = (async() => {

    const result = await CompanyData.findOne({ where: { id: 1 }, attributes: ['logo', 'url', 'name', 'dni', 'phone', 'alt_phone', 'sales_email', 'support_email', 'operations_email'] })

    return result.dataValues;
})

const getPasswordEmailTemplate = (async() => {

    const result = await EmailTemplate.findOne({ where: { id: 1 }, attributes: ['name', 'text', 'status'] })

    return result.dataValues;
})

function fixStringToLowerCase(str) {
    var splitStr = str.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0) + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')
}


module.exports = router;