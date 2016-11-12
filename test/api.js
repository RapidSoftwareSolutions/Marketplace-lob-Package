let assert = require('chai').assert;
let request = require('supertest-as-promised');
let app = require('../index');


let apiKey = 'test_c23ff3822cdccbe7606ff5fd30185ef614a',
    description = 'Test',
    name = 'Test',
    company = 'RapidApi',
    email = 'test@api.com',
    phone = '5555555555',
    addressLine1 = 'Address1',
    addressLine2 = 'Address2',
    addressCity  = 'Mountain View',
    addressState = 'CA',
    addressZip = '94085',
    addressCountry = 'US',
    front = '<html style="padding: 1in; font-size: 50;">Front HTML for {{name}}</html>',
    back = '<html style="padding: 1in; font-size: 20;">Back HTML for {{name}}</html>',
    routingNumber = 322271627,
    accountNumber = 123456789,
    signatory = 'John Doe',
    accountType = 'company',
    zipCode = '94158-C001',
    amount = 22.50,
    cardId,
    letterId,
    areaId,
    bankAccount,
    checkId,
    addressId;

describe('/Lob Package', function() {
    it('/createAddress', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createAddress')
        .send({args: { 
            apiKey, 
            description, 
            name, 
            company, 
            email, 
            phone, 
            addressLine1, 
            addressLine2, 
            addressCity,
            addressState,
            addressZip,
            addressCountry 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);

            addressId = data.body.contextWrites.to.id;
        });
    });

    it('/getAddress', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAddress')
        .send({args: { 
            apiKey, 
            addressId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllAddresses', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllAddresses')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/deleteAddress', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteAddress')
        .send({args: { 
            apiKey, 
            addressId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/verifyAddress', function(done) {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/verifyAddress')
        .send({args: { 
            apiKey, 
            description, 
            name, 
            company, 
            email, 
            phone, 
            addressLine1, 
            addressLine2, 
            addressCity,
            addressState,
            addressZip,
            addressCountry 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/createPostcard', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createPostcard')
        .send({args: { 
            apiKey, 
            description, 
            cardTo: addressId,
            cardFrom: addressId,
            back,
            front,
            data: JSON.stringify({name: 'Harry'})
        }})
        .expect(200)
        .then((data) => {
            cardId = data.body.contextWrites.to.id;
            
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/retrievePostcard', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrievePostcard')
        .send({args: { 
            apiKey, 
            postcardId: cardId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(JSON.stringify(data.body));
        });
    });

    it('/getAllPostcards', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllPostcards')
        .send({args: { 
            apiKey
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/createLetter', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createLetter')
        .send({args: { 
            apiKey, 
            description, 
            letterTo: addressId,
            letterFrom: addressId,
            file: front,
            color: true,
            data: JSON.stringify({name: 'Harry'})
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);

            letterId = data.body.contextWrites.to.id;
        });
    });

    it('/retrieveLetter', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveLetter')
        .send({args: { 
            apiKey, 
            letterId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllLetters', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllLetters')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/createBankAccount', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createBankAccount')
        .send({args: { 
            apiKey, 
            description, 
            routingNumber,
            accountNumber,
            signatory,
            accountType
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);

            bankAccount = data.body.contextWrites.to.id;
        });
    });

    it('/retrieveBankAccount', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveBankAccount')
        .send({args: { 
            apiKey, 
            bankAccountId: bankAccount
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/verifyBankAccount', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/verifyBankAccount')
        .send({args: { 
            apiKey, 
            bankAccountId: bankAccount,
            amounts: JSON.stringify([100, 200])
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllBankAccounts', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllBankAccounts')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/createCheck', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createCheck')
        .send({args: { 
            apiKey, 
            description, 
            checkTo: addressId,
            checkFrom: addressId,
            bankAccount,
            checkBottom: back,
            amount,
            data: JSON.stringify({name: 'Harry'})
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);

            checkId = data.body.contextWrites.to.id;
        });
    });

    it('/deleteBankAccount', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteBankAccount')
        .send({args: { 
            apiKey, 
            bankAccountId: bankAccount
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/retrieveCheck', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveCheck')
        .send({args: { 
            apiKey, 
            checkId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllChecks', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllChecks')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });


    it('/createAreaMailing', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createAreaMailing')
        .send({args: { 
            apiKey, 
            description, 
            front,
            back,
            routes: JSON.stringify(['94158-C001', '94107-C031']),
            targetType: 'all',
            data: JSON.stringify({city: 'Oakland'})
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);

            areaId = data.body.contextWrites.to.id;
        });
    });

    it('/retrieveAreaMailing', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveAreaMailing')
        .send({args: { 
            apiKey, 
            areaId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllAreaMailings', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllAreaMailings')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/retrieveRoutesByZipcode', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveRoutesByZipcode')
        .send({args: { 
            apiKey, 
            zipCode
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllRoutes', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllRoutes')
        .send({args: { 
            apiKey, 
            zipCodes: JSON.stringify([zipCode])
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllCountries', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllCountries')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAllStates', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllStates')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });
});