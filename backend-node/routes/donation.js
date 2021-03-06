var express = require('express');
var router = express.Router();

var neonCrm = require('../api/neonApi');
const getUser = require('../middleware/getUser');
let neon = new neonCrm.Client('virginiamocasandbox', process.env.API);

router.post('/donate', getUser, (req, res, next) => {
    var user = req.user;
    console.log(user)
    console.log(user)
    req.body.accountId = user['Account ID'];
    var date = new Date();
    console.log(date.toUTCString());
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = yyyy + '-' + mm + '-' + dd;
    var data = {
        "accountId": user['Account ID'],
        "donorName": user['First Name'] + ' ' + user['Last Name'],
        "amount": req.body.amount,
        "date": today,
        "acknowledgee": {
            "accountId": user['Account ID'],
            "address": {
                "addressLine1": req.body.address,
                "addressLine2": req.body.address2,
                "city": req.body.city,
                "isPrimaryAddress": true,
                "phone1": req.body.phone,
                "phone1Type": "Home",
                "state": {
                    "code": req.body.state
                },
                "startDate": mm + '/' + dd + '/' + yyyy,
                "endDate": mm + '/' + dd + '/' + parseInt(yyyy + 1),
                "zipCode": req.body.zip,
            },
            "email": user['Email 1'],
            "name": user['First Name'] + ' ' + user['Last Name'],
        },
        "anonymousType": "No",
        "sendAcknowledgeEmail": true,
        "timestamps": {
            "createdBy": user['First Name'] + ' ' + user['Last Name'],
        },
        "payments": [{
            "amount": req.body.amount,
            "creditCardOnline": {
                "billingAddress": {
                    "addressLine1": req.body.address,
                    "addressLine2": req.body.address2,
                    "city": req.body.city,
                    "stateProvinceCode": req.body.state,
                    "zipCode": req.body.zipCode,
                },
                "cardHolderEmail": user['Email 1'],
                "token": "string"
            },
            "tenderType": 3
        }]
    }
    neon.saveDonation(data).then((result) => {
        res.json(result.data);
    }).catch((err) => {
        res.status(401).json(err);
    });
})

module.exports = router;