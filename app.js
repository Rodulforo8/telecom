const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql')
const app = express();
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors');
const bcrypt = require('bcryptjs')
const fileUpload = require('express-fileupload');

//*******************************************[ SWAGGER DOCS ] ********************************************************** */
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//********************************************   [ ROUTES ]  ********************************************************* */
var locations = require('./routes/LocationsController');
app.use('/location', locations);

var urbanismoSector = require('./routes/UrbanismsController');
app.use('/urbanism', urbanismoSector)

var plans = require('./routes/PlansController');
app.use('/plans', plans)

var users = require('./routes/UserController');
app.use('/user', users)

var auth = require('./routes/AuthenticationController');
app.use('/auth', auth)

var banks = require('./routes/BanksControllers');
app.use('/banks', banks)

var paymentReports = require('./routes/PaymentReportsController');
app.use('/payment_report', paymentReports)

var services = require('./routes/ServicesControllers');
app.use('/services', services)

var failureReports = require('./routes/FailureReportsControllers');
app.use('/failure_reports', failureReports)

var userPlansController = require('./routes/UserPlansControllers');
app.use('/user_plan', userPlansController)

var modulesController = require('./routes/ModulesControllers');
app.use('/modules', modulesController)

var installationPackages = require('./routes/InstallationPackagesController');
app.use('/installation_packages', installationPackages)

var internetServerConfiguration = require('./routes/InternetServerConfigurationController');
app.use('/internet_server_configuration', internetServerConfiguration)

var companyController = require('./routes/CompanyController');
app.use('/company_data', companyController)

var emailTemplaeController = require('./routes/ServerEmailConfigController');
app.use('/server_email_config', emailTemplaeController)

var serverEmailConfigController = require('./routes/EmailTemplateController');
app.use('/email_template', serverEmailConfigController)

var networkInterfaceController = require('./routes/NetworkInterfacesController');
app.use('/network_interface', networkInterfaceController)

var networkEquipmentController = require('./routes/NetworkEquipmentsController');
app.use('/network_equipment', networkEquipmentController)


app.listen('3000'), () => {}
console.log('Server running in port 3000')
module.exports = app;