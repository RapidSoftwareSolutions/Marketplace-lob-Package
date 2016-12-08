module.exports.do = (req, res) => { res.status(200).send({
    "package": "Lob",
    "tagline": "Lob API",
    "keywords": ["API", "check", "mail", "marketing", "paper", "physical", "postcards", "print", "smb"],
    "description": "This API enables developers to send real-life mail (postcards, checks etc.) to their customers via an automated API.",
    "image": "http://logo.clearbit.com/lob.com",
    "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-lob-Package",
    "accounts": {
        "domain": "lob.com",
        "credentials": ["apiKey"]
    },
    "blocks": [{
        "name": "createAddress",
        "description": "Creates a new address object.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "description",
            "type": "String",
            "info": "Address description.",
            "required": false
        }, {
            "name": "name",
            "type": "String",
            "info": "Either name or company is required, you may also add both. The total string for name must be no longer than 50 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.",
            "required": false
        }, {
            "name": "company",
            "type": "String",
            "info": "Either name or company is required, you may also add both. The total string for company must be no longer than 200 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.",
            "required": false
        }, {
            "name": "addressLine1",
            "type": "String",
            "info": "The total string must be no longer than 200 characters.",
            "required": true
        }, {
            "name": "addressLine2",
            "type": "String",
            "info": "The total string must be no longer than 200 characters.",
            "required": false
        }, {
            "name": "addressCountry",
            "type": "String",
            "info": "Must be a 2 letter country short-name code (ISO 3166). Defaults to US.",
            "required": false
        }, {
            "name": "addressCity",
            "type": "String",
            "info": "Required if address_country is US, otherwise optional. The total string must be no longer than 200 characters.",
            "required": false
        }, {
            "name": "addressState",
            "type": "String",
            "info": "Required and must be a 2 letter state short-name code if address_country is US, otherwise optional and the total string can not be any longer than 200 characters.",
            "required": false
        }, {
            "name": "addressZip",
            "type": "String",
            "info": "Required and must follow the ZIP format of 12345 or ZIP+4 format of 12345-1234 if address_country is US, otherwise optional and the total string can not be any longer than 40 characters.",
            "required": false
        }, {
            "name": "phone",
            "type": "String",
            "info": "The total string must be no longer than 40 characters.",
            "required": false
        }, {
            "name": "email",
            "type": "String",
            "info": "The total string must be no longer than 100 characters.",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. See Metadata for more information.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAddress",
        "description": "Retrieves the details of an existing address. You need only supply the unique customer identifier that was returned upon address creation.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "addressId",
            "type": "String",
            "info": "The identifier of the address to be retrieved.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteAddress",
        "description": "Permanently deletes a customer. It cannot be undone.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "addressId",
            "type": "String",
            "info": "The identifier of the address to be deleted.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllAddresses",
        "description": "Returns a list of your addresses. The addresses are returned sorted by creation date, with the most recently created addresses appearing first.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "limit",
            "type": "String",
            "info": "How many results to return, default=10, max 100, must be an integer",
            "required": false
        }, {
            "name": "offset",
            "type": "String",
            "info": "Return requested # of items starting with the value, default=0, must be an integer",
            "required": false
        }, {
            "name": "include",
            "type": "String",
            "info": "Request that the response include the total count by specifying include[]=total_count",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "JSON Object. Filter by metadata key-value pair.",
            "required": false
        }, {
            "name": "dateCreated",
            "type": "JSON",
            "info": "JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: \u00272012-01-01\u0027, lt: \u00272012-01-31T12:34:56Z\u0027 } where gt is \u203a, lt is \u2039, gte is \u2265, and lte is \u2264",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "verifyAddress",
        "description": "Validates a given address.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "name",
            "type": "String",
            "info": "Either name or company is required, you may also add both. The total string for name must be no longer than 50 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.",
            "required": false
        }, {
            "name": "addressLine1",
            "type": "String",
            "info": "The total string must be no longer than 200 characters.",
            "required": true
        }, {
            "name": "addressLine2",
            "type": "String",
            "info": "The total string must be no longer than 200 characters.",
            "required": false
        }, {
            "name": "addressCity",
            "type": "String",
            "info": "Required if address_country is US, otherwise optional. The total string must be no longer than 200 characters.",
            "required": false
        }, {
            "name": "addressState",
            "type": "String",
            "info": "Required and must be a 2 letter state short-name code if address_country is US, otherwise optional and the total string can not be any longer than 200 characters.",
            "required": false
        }, {
            "name": "addressZip",
            "type": "String",
            "info": "Required and must follow the ZIP format of 12345 or ZIP+4 format of 12345-1234 if address_country is US, otherwise optional and the total string can not be any longer than 40 characters.",
            "required": true
        }, {
            "name": "addressCountry",
            "type": "String",
            "info": "Must be a 2 letter country short-name code (ISO 3166). Defaults to US.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "unverified",
            "required": false
        }, {
            "name": "success",
            "info": "verified",
            "required": false
        }]
    }, {
        "name": "createPostcard",
        "description": "Create a new postcard.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "description",
            "type": "String",
            "info": "Optional.",
            "required": false
        }, {
            "name": "cardTo",
            "type": "String",
            "info": "Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID",
            "required": true
        }, {
            "name": "cardFrom",
            "type": "String",
            "info": "Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.",
            "required": false
        }, {
            "name": "front",
            "type": "File",
            "info": "A 4.25x6.25, 6.25x9.25, or 6.25x11.25 image to use as the front of the postcard. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Postcard Examples Appendix.",
            "required": true
        }, {
            "name": "back",
            "type": "File",
            "info": "Either message or back is required, choose one. A 4.25x6.25, 6.25x9.25, or 6.25x11.25 image to use as the back of the postcard, supplied as a URL, local file, or HTML string. This allows you to customize your back design, but we will still insert the recipient address for you. Follow the templates provided here: 4x6 template, 6x9 template, 6x11 template. For HTML examples, please see Postcard Examples Appendix..",
            "required": false
        }, {
            "name": "data",
            "type": "JSON",
            "info": "Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters and Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.",
            "required": false
        }, {
            "name": "message",
            "type": "String",
            "info": "Either message or back is required, choose one. Max of 350 characters to be included on the back of postcard. If included, we will generate the back based off to, from, and message arguments.",
            "required": false
        }, {
            "name": "size",
            "type": "String",
            "info": "Specifies the size of the postcard. Must be either 4x6, 6x9, or 6x11. Defaults to 4x6. Only 4x6 postcards can be sent to international destinations.",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and  Nested objects are not supported. See Metadata for more information.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "retrievePostcard",
        "description": "Retrieves the postcard with a given ID. You need only supply the unique postcard ID that was returned upon postcard creation.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "postcardId",
            "type": "String",
            "info": "The identifier of the postcard to be retrieved.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllPostcards",
        "description": "Returns a list of postcards. The returned postcards are sorted by creation date, with the most recently created postcards appearing first.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "limit",
            "type": "String",
            "info": "How many results to return, default=10, max 100, must be an integer",
            "required": false
        }, {
            "name": "offset",
            "type": "String",
            "info": "Return requested # of items starting with the value, default=0, must be an integer",
            "required": false
        }, {
            "name": "include",
            "type": "String",
            "info": "Request that the response include the total count by specifying include[]=total_count",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "JSON Object. Filter by metadata key-value pair, e.g.",
            "required": false
        }, {
            "name": "dateCreated",
            "type": "JSON",
            "info": "JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: \u00272012-01-01\u0027, lt: \u00272012-01-31T12:34:56Z\u0027 } where gt is \u203a, lt is \u2039, gte is \u2265, and lte is \u2264",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createLetter",
        "description": "Create a new letter.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "description",
            "type": "String",
            "info": "Optional",
            "required": false
        }, {
            "name": "letterTo",
            "type": "String",
            "info": "Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.",
            "required": true
        }, {
            "name": "letterFrom",
            "type": "String",
            "info": "Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.",
            "required": true
        }, {
            "name": "color",
            "type": "String",
            "info": "Boolean. Set this key to true to if you would like to print in color. Set to false if you would like to print in black and white.",
            "required": true
        }, {
            "name": "file",
            "type": "File",
            "info": "File can be an HTML string or an 8.5x11 PDF (uploaded file or URL). For design specifications, please see our PDF and HTML templates. For domestic destinations, the file limit is 60 pages single-sided or 120 pages double-sided. For international destinations, the file limit is 6 pages single-sided or 12 pages double-sided. PDFs that surpass the file limit will error, while HTML that renders more pages than the file limit will be trimmed. See pricing for extra costs incurred.",
            "required": true
        }, {
            "name": "data",
            "type": "JSON",
            "info": "Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.",
            "required": false
        }, {
            "name": "doubleSided",
            "type": "String",
            "info": "Boolean that defaults to true. Use false to force single-sided printing.",
            "required": false
        }, {
            "name": "addressPlacement",
            "type": "String",
            "info": "Specifies the location of the address information that will show through the double-window envelope. Options are top_first_page and insert_blank_page. Defaults to top_first_page, meaning we will print address information at the top of your provided first page. To see how this will impact your letter design, view our letter template. If you pass insert_blank_page, a blank address page will be inserted at the beginning of your file and you will be charged for the extra page.",
            "required": false
        }, {
            "name": "returnEnvelope",
            "type": "String",
            "info": "Boolean. Set this key to true and specify the perforated_page if you would like to include a return envelope with your letter. See pricing for extra costs incurred.",
            "required": false
        }, {
            "name": "perforatedPage",
            "type": "String",
            "info": "Required if return_envelope is true. Number of the page that should be perforated for use with return_envelope. Must be greater than or equal to 1. To see how perforation will impact your letter design, view our perforation guide.",
            "required": false
        }, {
            "name": "extraService",
            "type": "String",
            "info": "Add an extra service to your letter. Options are certified or registered. Certified provides tracking and delivery confirmation for domestic destinations. Registered provides tracking and confirmation for international addresses. See pricing for extra costs incurred.",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and Nested objects are not supported. See Metadata for more information.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "retrieveLetter",
        "description": "Retrieves the letter with a given ID. You need only supply the unique letter ID that was returned upon letter creation.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "letterId",
            "type": "String",
            "info": "The identifier of the letter to be retrieved.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllLetters",
        "description": "Returns a list of letters. The letters are returned sorted by creation date, with the most recently created letters appearing first.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "limit",
            "type": "String",
            "info": "How many results to return, default=10, max 100, must be an integer",
            "required": false
        }, {
            "name": "offset",
            "type": "String",
            "info": "Return requested # of items starting with the value, default=0, must be an integer",
            "required": false
        }, {
            "name": "include",
            "type": "String",
            "info": "Request that the response include the total count by specifying include[]=total_count",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "JSON Object. Filter by metadata key-value pair.",
            "required": false
        }, {
            "name": "dateCreated",
            "type": "JSON",
            "info": "JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: \u00272012-01-01\u0027, lt: \u00272012-01-31T12:34:56Z\u0027 } where gt is \u203a, lt is \u2039, gte is \u2265, and lte is \u2264",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createCheck",
        "description": "Create a new check.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "description",
            "type": "String",
            "info": "Optional",
            "required": false
        }, {
            "name": "checkTo",
            "type": "String",
            "info": "Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.",
            "required": true
        }, {
            "name": "checkFrom",
            "type": "String",
            "info": "Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.",
            "required": true
        }, {
            "name": "bankAccount",
            "type": "String",
            "info": "Must be a bank account ID. Only verified bank accounts may be used.",
            "required": true
        }, {
            "name": "amount",
            "type": "String",
            "info": "The payment amount to be sent in dollars. Must be less than 1000000.",
            "required": true
        }, {
            "name": "memo",
            "type": "String",
            "info": "Max of 40 characters to be included on the memo line of the check.",
            "required": false
        }, {
            "name": "checkNumber",
            "type": "String",
            "info": "Checks will default starting at 10000 and increment accordingly.",
            "required": false
        }, {
            "name": "logo",
            "type": "File",
            "info": "This can be a URL or local file. The image must be a square, have color model of RGB or CMYK, be at least 100px X 100px, and have a transparent background. The accepted file types are PNG and JPEG. If supplied, the logo is printed in grayscale and placed in the upper-left corner of the check.",
            "required": false
        }, {
            "name": "message",
            "type": "String",
            "info": "Either message or check_bottom, choose one. Max of 400 characters to be included at the bottom of the check page.",
            "required": false
        }, {
            "name": "checkBottom",
            "type": "File",
            "info": "Either message or file, choose one. This can be a local file or a URL to a 1 page 8.5x11 PDF, PNG, or JPEG, or an HTML string. This will be printed on the bottom of the check page in black \u0026 white. You must follow this template.",
            "required": false
        }, {
            "name": "attachment",
            "type": "File",
            "info": "A document to include with the check. This can be a local file or a URL to an 8.5 x11 PDF, PNG, or JPEG, or an HTML string. This will be printed double-sided in black \u0026 white and will be included in the envelope after the check page. If a PDF is provided, it must be 6 pages or fewer. If HTML is provided that renders to more than 6 pages, it will be trimmed. Please follow these design guidelines. See pricing for extra costs incurred.",
            "required": false
        }, {
            "name": "data",
            "type": "JSON",
            "info": "Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and  Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.",
            "required": false
        }, {
            "name": "mailType",
            "type": "String",
            "info": "A string designating the mail postage type. Options are usps_first_class or ups_next_day_air. Defaults to usps_first_class. See pricing for extra costs incurred for ups_next_day_air.",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and  Nested objects are not supported. See Metadata for more information.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "retrieveCheck",
        "description": "Retrieves the check with a given ID. You need only supply the unique ID that was returned upon check creation.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "checkId",
            "type": "String",
            "info": "The identifier of the check to be retrieved.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllChecks",
        "description": "Returns a list of checks. The returned checks are sorted by creation date, with the most recently created checks appearing first.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "limit",
            "type": "String",
            "info": "How many results to return, default=10, max 100, must be an integer",
            "required": false
        }, {
            "name": "offset",
            "type": "String",
            "info": "Return requested # of items starting with the value, default=0, must be an integer",
            "required": false
        }, {
            "name": "include",
            "type": "String",
            "info": "Request that the response include the total count by specifying include[]=total_count",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "JSON Object. Filter by metadata key-value pair",
            "required": false
        }, {
            "name": "dateCreated",
            "type": "JSON",
            "info": "JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: \u00272012-01-01\u0027, lt: \u00272012-01-31T12:34:56Z\u0027 } where gt is \u203a, lt is \u2039, gte is \u2265, and lte is \u2264",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createBankAccount",
        "description": "Create a new bank account. Bank accounts created in live mode will need to be verified via micro deposits before being able to send live checks. The deposits will appear in the bank account in 2-3 business days and have the description \"VERIFICATION\".",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "description",
            "type": "String",
            "info": "Optional",
            "required": false
        }, {
            "name": "routingNumber",
            "type": "String",
            "info": "The bank\u0027s routing number",
            "required": true
        }, {
            "name": "accountNumber",
            "type": "String",
            "info": "The account number at the bank",
            "required": true
        }, {
            "name": "accountType",
            "type": "String",
            "info": "The type of entity that holds the account. Must be either company or individual.",
            "required": true
        }, {
            "name": "signatory",
            "type": "String",
            "info": "The signatory associated with your account. This name will be printed on checks created with the bank account. If you prefer to use a custom signature image on your checks instead, please create your bank account from the Dashboard.",
            "required": true
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and  Nested objects are not supported. See Metadata for more information.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "retrieveBankAccount",
        "description": "Retrieves the bank account with a given ID. You need only supply the unique ID that was returned upon bank account creation.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "bankAccountId",
            "type": "String",
            "info": "The identifier of the bank account to be retrieved.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "deleteBankAccount",
        "description": "Permanently deletes a bank account. It cannot be undone.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "bankAccountId",
            "type": "String",
            "info": "The identifier of the bank account to be deleted.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "verifyBankAccount",
        "description": "Verify a bank account in order to create a check.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "bankAccountId",
            "type": "String",
            "info": "Bank account id to verify",
            "required": false
        }, {
            "name": "amounts",
            "type": "JSON",
            "info": "JSON Array. In live mode, an array containing the two micro deposits (in cents) placed in the bank account. In test mode, no micro deposits will be placed - use any two integers between 1 and 100",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "unverified",
            "required": false
        }, {
            "name": "success",
            "info": "verified",
            "required": false
        }]
    }, {
        "name": "getAllBankAccounts",
        "description": "Returns a list of bank accounts. The bank accounts are returned sorted by creation date, with the most recently created bank account appearing first.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "limit",
            "type": "String",
            "info": "How many results to return, default=10, max 100, must be an integer",
            "required": false
        }, {
            "name": "offset",
            "type": "String",
            "info": "Return requested # of items starting with the value, default=0, must be an integer",
            "required": false
        }, {
            "name": "include",
            "type": "String",
            "info": "Request that the response include the total count by specifying include[]=total_count",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "JSON Object. Filter by metadata key-value pair.",
            "required": false
        }, {
            "name": "dateCreated",
            "type": "JSON",
            "info": "JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: \u00272012-01-01\u0027, lt: \u00272012-01-31T12:34:56Z\u0027 } where gt is \u203a, lt is \u2039, gte is \u2265, and lte is \u2264",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "createAreaMailing",
        "description": "Create a new mailing for a specific zip or delivery routes",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "description",
            "type": "String",
            "info": "Optional",
            "required": false
        }, {
            "name": "routes",
            "type": "JSON",
            "info": "JSON Array. Must enter a zip code or delivery route. This can be an array of zip codes or delivery routes.",
            "required": true
        }, {
            "name": "targetType",
            "type": "String",
            "info": "A string designating the target recipients. Options are all and residential. Defaults to all.",
            "required": false
        }, {
            "name": "front",
            "type": "File",
            "info": "A 6.25x11.25 image that will be the front of the postcard. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Area Examples Appendix.",
            "required": true
        }, {
            "name": "back",
            "type": "File",
            "info": "A 6.25x11.25 image that will be the back of the postcard. Follow this template when creating your artwork. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Area Examples Appendix.",
            "required": true
        }, {
            "name": "data",
            "type": "JSON",
            "info": "Optiona: Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and  Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters \u0022 and  Nested objects are not supported. See Metadata for more information.",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "retrieveAreaMailing",
        "description": "Retrieves the area mailing with a given ID. You need only supply the unique ID that was returned upon area mail creation.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "areaId",
            "type": "String",
            "info": "The identifier of the area mail to be retrieved.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllAreaMailings",
        "description": "Returns a list of area mailings. The area mailings are returned sorted by creation date, with the most recently created area mail appearing first.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "limit",
            "type": "String",
            "info": "How many results to return, default=10, max 100, must be an integer",
            "required": false
        }, {
            "name": "offset",
            "type": "String",
            "info": "Return requested # of items starting with the value, default=0, must be an integer",
            "required": false
        }, {
            "name": "include",
            "type": "String",
            "info": "Request that the response include the total count by specifying include[]=total_count",
            "required": false
        }, {
            "name": "metadata",
            "type": "JSON",
            "info": "JSON obejct. Filter by metadata key-value pair.",
            "required": false
        }, {
            "name": "dateCreated",
            "type": "JSON",
            "info": "JSON object. Filter by ISO-8601 date or datetime, e.g. { gt: \u00272012-01-01\u0027, lt: \u00272012-01-31T12:34:56Z\u0027 } where gt is \u203a, lt is \u2039, gte is \u2265, and lte is \u2264",
            "required": false
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "retrieveRoutesByZipcode",
        "description": "Retrieves the delivery routes for the zip code or zip-route requested.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "zipCode",
            "type": "String",
            "info": "The zip codes or zip-routes to filter by.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllRoutes",
        "description": "Filters by the zip codes or zip-routes requested.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }, {
            "name": "zipCodes",
            "type": "JSON",
            "info": "JSON Array. The zip codes or zip-routes to filter by.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllCountries",
        "description": "Returns a list of all currently supported countries. You can use these when submitting addresses, jobs, and verification requests.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }, {
        "name": "getAllStates",
        "description": "Returns a list of all US states. You can use these when submitting addresses, jobs, and verification requests.",
        "args": [{
            "name": "apiKey",
            "type": "credentials",
            "info": "Api Key.",
            "required": true
        }],
        "callbacks": [{
            "name": "error",
            "info": "error"
        }, {
            "name": "success",
            "info": "success"
        }]
    }]
});}
