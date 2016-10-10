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
    it('/createAddress', function() {
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
            assert.equal(data.body.callback, 'success');

            addressId = JSON.parse(data.body.contextWrites.to)['id'];
        });
    });

    it('/getAddress', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAddress')
        .send({args: { 
            apiKey, 
            addressId
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllAddresses', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllAddresses')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/deleteAddress', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteAddress')
        .send({args: { 
            apiKey, 
            addressId
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/verifyAddress', function() {
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
            // its ok
            assert.equal(data.body.callback, 'error');
        });
    });

    it('/createPostcard', function() {
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
            assert.equal(data.body.callback, 'success');

            cardId = JSON.parse(data.body.contextWrites.to)['id'];
        });
    });

    it('/retrievePostcard', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrievePostcard')
        .send({args: { 
            apiKey, 
            cardId
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllPostcards', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllPostcards')
        .send({args: { 
            apiKey
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/createLetter', function() {
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
            assert.equal(data.body.callback, 'success');

            letterId = JSON.parse(data.body.contextWrites.to)['id'];
        });
    });

    it('/retrieveLetter', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveLetter')
        .send({args: { 
            apiKey, 
            letterId
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllLetters', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllLetters')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/createBankAccount', function() {
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
            assert.equal(data.body.callback, 'success');

            bankAccount = JSON.parse(data.body.contextWrites.to)['id'];
        });
    });

    it('/retrieveBankAccount', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveBankAccount')
        .send({args: { 
            apiKey, 
            bankAccount
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/verifyBankAccount', function() {
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
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllBankAccounts', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllBankAccounts')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/createCheck', function() {
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
            assert.equal(data.body.callback, 'success');

            checkId = JSON.parse(data.body.contextWrites.to)['id'];
        });
    });

    it('/deleteBankAccount', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteBankAccount')
        .send({args: { 
            apiKey, 
            bankAccount
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/retrieveCheck', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveCheck')
        .send({args: { 
            apiKey, 
            checkId
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllChecks', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllChecks')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });


    it('/createAreaMailing', function() {
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
            assert.equal(data.body.callback, 'success');

            areaId = JSON.parse(data.body.contextWrites.to)['id'];
        });
    });

    it('/retrieveAreaMailing', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveAreaMailing')
        .send({args: { 
            apiKey, 
            areaId
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllAreaMailings', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllAreaMailings')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/retrieveRoutesByZipcode', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/retrieveRoutesByZipcode')
        .send({args: { 
            apiKey, 
            zipCode
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllRoutes', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllRoutes')
        .send({args: { 
            apiKey, 
            zipCodes: JSON.stringify([zipCode])
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllCountries', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllCountries')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getAllStates', function() {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAllStates')
        .send({args: { 
            apiKey, 
        }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });
});