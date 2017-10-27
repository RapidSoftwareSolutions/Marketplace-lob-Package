[settings]:https://github.com/RapidSoftwareSolutions/Marketplace-lob-Package/blob/master/instructions/settings.png?raw=true
[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Lob/functions?utm_source=RapidAPIGitHub_LobFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Lob Package
This API enables developers to send real-life mail (postcards, checks etc.) to their customers via an automated API.
* Domain: [lob.com](https://lob.com)
* Credentials: apiKey

## How to get credentials:
1. Log in or sign up at the to [Lob Dashboard](https://dashboard.lob.com).
2. Go to account settings by clicking your name in the top right hand corner.

 ![Account settings][settings]

3. Select the _*API KEYS*_ tab.
4. Copy and save your credentials.

## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```

## Lob.createAddress
Creates a new address object.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Api Key.
| description   | String     | Address description.
| name          | String     | Either name or company is required, you may also add both. The total string for name must be no longer than 50 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.
| company       | String     | Either name or company is required, you may also add both. The total string for company must be no longer than 200 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.
| addressLine1  | String     | The total string must be no longer than 200 characters.
| addressLine2  | String     | The total string must be no longer than 200 characters.
| addressCountry| String     | Must be a 2 letter country short-name code (ISO 3166). Defaults to US.
| addressCity   | String     | Required if address_country is US, otherwise optional. The total string must be no longer than 200 characters.
| addressState  | String     | Required and must be a 2 letter state short-name code if address_country is US, otherwise optional and the total string can not be any longer than 200 characters.
| addressZip    | String     | Required and must follow the ZIP format of 12345 or ZIP+4 format of 12345-1234 if address_country is US, otherwise optional and the total string can not be any longer than 40 characters.
| phone         | String     | The total string must be no longer than 40 characters.
| email         | String     | The total string must be no longer than 100 characters.
| metadata      | Array      | Must be an Array with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. [See Metadata for more information](https://lob.com/docs#metadata). 

## Lob.getAddress
Retrieves the details of an existing address. You need only supply the unique customer identifier that was returned upon address creation.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| Api Key.
| addressId| String     | The identifier of the address to be retrieved.

## Lob.deleteAddress
Permanently deletes a customer. It cannot be undone.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| Api Key.
| addressId| String     | The identifier of the address to be deleted.

## Lob.getAllAddresses
Returns a list of your addresses. The addresses are returned sorted by creation date, with the most recently created addresses appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| limit      | Number     | How many results to return, default=10, max 100, must be an integer
| offset     | Number     | Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Request that the response include the total count by specifying include[]=total_count
| metadata   | Array      | Filter by metadata key-value pair.
| dateCreated| JSON       | JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

## Lob.verifyAddress
Validates a given address.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Api Key.
| name          | String     | Either name or company is required, you may also add both. The total string for name must be no longer than 50 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.
| addressLine1  | String     | The total string must be no longer than 200 characters.
| addressLine2  | String     | The total string must be no longer than 200 characters.
| addressCity   | String     | Required if address_country is US, otherwise optional. The total string must be no longer than 200 characters.
| addressState  | String     | Required and must be a 2 letter state short-name code if address_country is US, otherwise optional and the total string can not be any longer than 200 characters.
| addressZip    | String     | Required and must follow the ZIP format of 12345 or ZIP+4 format of 12345-1234 if address_country is US, otherwise optional and the total string can not be any longer than 40 characters.
| addressCountry| String     | Must be a 2 letter country short-name code (ISO 3166). Defaults to US.

## Lob.createPostcard
Create a new postcard.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| description| String     | An internal description that identifies this resource.
| cardTo     | String     | Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID
| cardFrom   | String     | Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| front      | File       | A 4.25x6.25, 6.25x9.25, or 6.25x11.25 image to use as the front of the postcard. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Postcard Examples Appendix.
| back       | File       | Either message or back is required, choose one. A 4.25x6.25, 6.25x9.25, or 6.25x11.25 image to use as the back of the postcard, supplied as a URL, local file, or HTML string. This allows you to customize your back design, but we will still insert the recipient address for you. Follow the templates provided here: 4x6 template, 6x9 template, 6x11 template. For HTML examples, please see Postcard Examples Appendix..
| merge_variables       | JSON       | Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters and Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| message    | String     | Either message or back is required, choose one. Max of 350 characters to be included on the back of postcard. If included, we will generate the back based off to, from, and message arguments.
| size       | String     | Specifies the size of the postcard. Must be either 4x6, 6x9, or 6x11. Defaults to 4x6. Only 4x6 postcards can be sent to international destinations.
| metadata   | Array      | Must be an Array with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. [See Metadata for more information](https://lob.com/docs#metadata).

## Lob.retrievePostcard
Retrieves the postcard with a given ID. You need only supply the unique postcard ID that was returned upon postcard creation.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Api Key.
| postcardId| String     | The identifier of the postcard to be retrieved.

## Lob.getAllPostcards
Returns a list of postcards. The returned postcards are sorted by creation date, with the most recently created postcards appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| limit      | Number     | How many results to return, default=10, max 100, must be an integer
| offset     | Number     | Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Request that the response include the total count by specifying include[]=total_count
| metadata   | Array      | Filter by metadata key-value pair, e.g.
| dateCreated| JSON       | JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

## Lob.createLetter
Create a new letter.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| Api Key.
| description     | String     | An internal description that identifies this resource.
| letterTo        | String     | Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| letterFrom      | String     | Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| color           | Boolean.     |  Set this key to true to if you would like to print in color. Set to false if you would like to print in black and white.
| file            | File       | File can be an HTML string or an 8.5x11 PDF (uploaded file or URL). For design specifications, please see our PDF and HTML templates. For domestic destinations, the file limit is 60 pages single-sided or 120 pages double-sided. For international destinations, the file limit is 6 pages single-sided or 12 pages double-sided. PDFs that surpass the file limit will error, while HTML that renders more pages than the file limit will be trimmed. See pricing for extra costs incurred.
| merge_variables            | JSON       | Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| doubleSided     | String     | Boolean that defaults to true. Use false to force single-sided printing.
| addressPlacement| String     | Specifies the location of the address information that will show through the double-window envelope. Options are top_first_page and insert_blank_page. Defaults to top_first_page, meaning we will print address information at the top of your provided first page. To see how this will impact your letter design, view our letter template. If you pass insert_blank_page, a blank address page will be inserted at the beginning of your file and you will be charged for the extra page.
| returnEnvelope  | Boolean     |  Set this key to true and specify the perforated_page if you would like to include a return envelope with your letter. [See pricing for extra costs incurred](https://lob.com/pricing/letters#compare).
| perforatedPage  | String     | Required if return_envelope is true. Number of the page that should be perforated for use with return_envelope. Must be greater than or equal to 1. To see how perforation will impact your letter design, [view our perforation guide](https://s3-us-west-2.amazonaws.com/lob-assets/letters-perf-template.pdf).
| extraService    | String     | Add an extra service to your letter. Options are certified or registered. Certified provides tracking and delivery confirmation for domestic destinations. Registered provides tracking and confirmation for international addresses. [See pricing](https://lob.com/pricing/letters#compare) for extra costs incurred.
| metadata        | Array      | Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and Nested objects are not supported. [See Metadata for more information](https://lob.com/docs#metadata).

## Lob.retrieveLetter
Retrieves the letter with a given ID. You need only supply the unique letter ID that was returned upon letter creation.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Api Key.
| letterId| String     | The identifier of the letter to be retrieved.

## Lob.getAllLetters
Returns a list of letters. The letters are returned sorted by creation date, with the most recently created letters appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| limit      | Number     | How many results to return, default=10, max 100, must be an integer
| offset     | Number     | Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Request that the response include the total count by specifying include[]=total_count
| metadata   | Array      | Filter by metadata key-value pair.
| dateCreated| JSON       | JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

## Lob.createCheck
Create a new check.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| description| String     | An internal description that identifies this resource.
| checkTo    | String     | Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| checkFrom  | String     | Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| bankAccount| String     | Must be a bank account ID. Only verified bank accounts may be used.
| amount     | Number     | The payment amount to be sent in dollars. Must be less than 1000000.
| memo       | String     | Max of 40 characters to be included on the memo line of the check.
| checkNumber| String     | Checks will default starting at 10000 and increment accordingly.
| logo       | File       | This can be a URL or local file. The image must be a square, have color model of RGB or CMYK, be at least 100px X 100px, and have a transparent background. The accepted file types are PNG and JPEG. If supplied, the logo is printed in grayscale and placed in the upper-left corner of the check.
| message    | String     | Either message or check_bottom, choose one. Max of 400 characters to be included at the bottom of the check page.
| checkBottom| File       | Either message or file, choose one. This can be a local file or a URL to a 1 page 8.5x11 PDF, PNG, or JPEG, or an HTML string. This will be printed on the bottom of the check page in black & white. You must follow this template.
| attachment | File       | A document to include with the check. This can be a local file or a URL to an 8.5 x11 PDF, PNG, or JPEG, or an HTML string. This will be printed double-sided in black & white and will be included in the envelope after the check page. If a PDF is provided, it must be 6 pages or fewer. If HTML is provided that renders to more than 6 pages, it will be trimmed. Please follow these [design guidelines](https://s3-us-west-2.amazonaws.com/lob-assets/check-attachment-template.pdf). See [pricing](https://lob.com/pricing/checks#compare) for extra costs incurred.
| merge_variables       | JSON       | Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| mailType   | String     | A string designating the mail postage type. Options are usps_first_class or ups_next_day_air. Defaults to usps_first_class. See [pricing](https://lob.com/pricing/checks#compare) for extra costs incurred for ups_next_day_air.
| metadata   | Array      | Must be an Array with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. [See Metadata for more information](https://lob.com/docs#metadata).

## Lob.retrieveCheck
Retrieves the check with a given ID. You need only supply the unique ID that was returned upon check creation.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| Api Key.
| checkId| String     | The identifier of the check to be retrieved.

## Lob.getAllChecks
Returns a list of checks. The returned checks are sorted by creation date, with the most recently created checks appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| limit      | Number     | How many results to return, default=10, max 100, must be an integer
| offset     | Number     | Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Request that the response include the total count by specifying include[]=total_count
| metadata   | Array      | Filter by metadata key-value pair
| dateCreated| JSON       | JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

## Lob.createBankAccount
Create a new bank account. Bank accounts created in live mode will need to be verified via micro deposits before being able to send live checks. The deposits will appear in the bank account in 2-3 business days and have the description "VERIFICATION".

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Api Key.
| description  | String     | An internal description that identifies this resource.
| routingNumber| String     | The bank's routing number
| accountNumber| String     | The account number at the bank
| accountType  | String     | The type of entity that holds the account. Must be either company or individual.
| signatory    | String     | The signatory associated with your account. This name will be printed on checks created with the bank account. If you prefer to use a custom signature image on your checks instead, please create your bank account from the Dashboard.
| metadata     | Array      | Must be an Array with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. [See Metadata for more information](https://lob.com/docs#metadata).

## Lob.retrieveBankAccount
Retrieves the bank account with a given ID. You need only supply the unique ID that was returned upon bank account creation.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Api Key.
| bankAccountId| String     | The identifier of the bank account to be retrieved.

## Lob.deleteBankAccount
Permanently deletes a bank account. It cannot be undone.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Api Key.
| bankAccountId| String     | The identifier of the bank account to be deleted.

## Lob.verifyBankAccount
Verify a bank account in order to create a check.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Api Key.
| bankAccountId| String     | Bank account id to verify
| amounts      | JSON       | JSON Array. In live mode, an array containing the two micro deposits (in cents) placed in the bank account. In test mode, no micro deposits will be placed - use any two integers between 1 and 100

## Lob.getAllBankAccounts
Returns a list of bank accounts. The bank accounts are returned sorted by creation date, with the most recently created bank account appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| limit      | Number     | How many results to return, default=10, max 100, must be an integer
| offset     | Number     | Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Request that the response include the total count by specifying include[]=total_count
| metadata   | Array      | Filter by metadata key-value pair.
| dateCreated| JSON       | JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

## Lob.createAreaMailing
Create a new mailing for a specific zip or delivery routes

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| description| String     | An internal description that identifies this resource.
| routes     | JSON       | JSON Array. Must enter a zip code or delivery route. This can be an array of zip codes or delivery routes.
| targetType | String     | A string designating the target recipients. Options are all and residential. Defaults to all.
| front      | File       | A 6.25x11.25 image that will be the front of the postcard. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Area Examples Appendix.
| back       | File       | A 6.25x11.25 image that will be the back of the postcard. Follow this template when creating your artwork. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Area Examples Appendix.
| merge_variables       | JSON       | Optiona: Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| metadata   | Array      | Must be an Array with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. [See Metadata for more information](https://lob.com/docs#metadata).

## Lob.retrieveAreaMailing
Retrieves the area mailing with a given ID. You need only supply the unique ID that was returned upon area mail creation.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Api Key.
| areaId| String     | The identifier of the area mail to be retrieved.

## Lob.getAllAreaMailings
Returns a list of area mailings. The area mailings are returned sorted by creation date, with the most recently created area mail appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Api Key.
| limit      | Number     | How many results to return, default=10, max 100, must be an integer
| offset     | Number     | Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Request that the response include the total count by specifying include[]=total_count
| metadata   | Array      | Filter by metadata key-value pair.
| dateCreated| JSON       | JSON object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

## Lob.retrieveRoutesByZipcode
Retrieves the delivery routes for the zip code or zip-route requested.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| Api Key.
| zipCode| String     | The zip codes or zip-routes to filter by.

## Lob.getAllRoutes
Filters by the zip codes or zip-routes requested.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Api Key.
| zipCodes| JSON       | JSON Array. The zip codes or zip-routes to filter by.

## Lob.getAllCountries
Returns a list of all currently supported countries. You can use these when submitting addresses, jobs, and verification requests.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Api Key.

## Lob.getAllStates
Returns a list of all US states. You can use these when submitting addresses, jobs, and verification requests.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Api Key.
