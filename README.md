[settings]:https://github.com/RapidSoftwareSolutions/Marketplace-lob-Package/blob/master/instructions/settings.png?raw=true

# Lob Package
This API enables developers to send real-life mail (postcards, checks etc.) to their customers via an automated API.
* Domain: lob.com
* Credentials: apiKey

## How to get credentials: 
0. Go to [Lob Dashboard](https://dashboard.lob.com).
1. Go to account settings.
 
 ![Account settings][settings]

2. Switch to _*API KEYS*_.
3. Copy and save your credentials.

## TOC: 
* [createAddress](#createAddress)
* [getAddress](#getAddress)
* [deleteAddress](#deleteAddress)
* [getAllAddresses](#getAllAddresses)
* [verifyAddress](#verifyAddress)
* [createPostcard](#createPostcard)
* [retrievePostcard](#retrievePostcard)
* [getAllPostcards](#getAllPostcards)
* [createLetter](#createLetter)
* [retrieveLetter](#retrieveLetter)
* [getAllLetters](#getAllLetters)
* [createCheck](#createCheck)
* [retrieveCheck](#retrieveCheck)
* [getAllChecks](#getAllChecks)
* [createBankAccount](#createBankAccount)
* [retrieveBankAccount](#retrieveBankAccount)
* [deleteBankAccount](#deleteBankAccount)
* [verifyBankAccount](#verifyBankAccount)
* [getAllBankAccounts](#getAllBankAccounts)
* [createAreaMailing](#createAreaMailing)
* [retrieveAreaMailing](#retrieveAreaMailing)
* [getAllAreaMailings](#getAllAreaMailings)
* [retrieveRoutesByZipcode](#retrieveRoutesByZipcode)
* [getAllRoutes](#getAllRoutes)
* [getAllCountries](#getAllCountries)
* [getAllStates](#getAllStates)
 
<a name="createAddress"/>
## Lob.createAddress
Creates a new address object.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: Api Key.
| description   | String     | Optional: Address description.
| name          | String     | Optional: Either name or company is required, you may also add both. The total string for name must be no longer than 50 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.
| company       | String     | Optional: Either name or company is required, you may also add both. The total string for company must be no longer than 200 characters. If both name and company are provided, they will be printed on two separate lines above the rest of the address.
| addressLine1  | String     | Required: The total string must be no longer than 200 characters.
| addressLine2  | String     | Optional: The total string must be no longer than 200 characters.
| addressCountry| String     | Optional: Must be a 2 letter country short-name code (ISO 3166). Defaults to US.
| addressCity   | String     | Optional: Required if address_country is US, otherwise optional. The total string must be no longer than 200 characters.
| addressState  | String     | Optional: Required and must be a 2 letter state short-name code if address_country is US, otherwise optional and the total string can not be any longer than 200 characters.
| addressZip    | String     | Optional: Required and must follow the ZIP format of 12345 or ZIP+4 format of 12345-1234 if address_country is US, otherwise optional and the total string can not be any longer than 40 characters.
| phone         | String     | Optional: The total string must be no longer than 40 characters.
| email         | String     | Optional: The total string must be no longer than 100 characters.
| metadata      | JSON       | Optional: Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters and  Nested objects are not supported. See Metadata for more information.

<a name="getAddress"/>
## Lob.getAddress
Retrieves the details of an existing address. You need only supply the unique customer identifier that was returned upon address creation.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| Required: Api Key.
| addressId| String     | Required: The identifier of the address to be retrieved.

<a name="deleteAddress"/>
## Lob.deleteAddress
Permanently deletes a customer. It cannot be undone.

| Field    | Type       | Description
|----------|------------|----------
| apiKey   | credentials| Required: Api Key.
| addressId| String     | Required: The identifier of the address to be deleted.

<a name="getAllAddresses"/>
## Lob.getAllAddresses
Returns a list of your addresses. The addresses are returned sorted by creation date, with the most recently created addresses appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| limit      | String     | Optional: How many results to return, default=10, max 100, must be an integer
| offset     | String     | Optional: Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Optional: Request that the response include the total count by specifying include[]=total_count
| metadata   | JSON       | Optional: JSON Object. Filter by metadata key-value pair.
| dateCreated| JSON       | Optional: JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

<a name="verifyAddress"/>
## Lob.verifyAddress
Validates a given address.

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: Api Key.
| name          | String     | Optional
| addressLine1  | String     | Optional
| addressLine2  | String     | Optional
| addressCity   | String     | Optional
| addressState  | String     | Optional
| addressZip    | String     | Optional
| addressCountry| String     | Optional

<a name="createPostcard"/>
## Lob.createPostcard
Create a new postcard.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| description| String     | Optional.
| cardTo         | String     | Required: Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID
| cardFrom       | String     | Optional: Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| front      | String     | Required: A 4.25x6.25, 6.25x9.25, or 6.25x11.25 image to use as the front of the postcard. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Postcard Examples Appendix.
| back       | String     | Optional: Either message or back is required, choose one. A 4.25x6.25, 6.25x9.25, or 6.25x11.25 image to use as the back of the postcard, supplied as a URL, local file, or HTML string. This allows you to customize your back design, but we will still insert the recipient address for you. Follow the templates provided here: 4x6 template, 6x9 template, 6x11 template. For HTML examples, please see Postcard Examples Appendix..
| data       | JSON       | Optional: Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters and Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| message    | String     | Optional: Either message or back is required, choose one. Max of 350 characters to be included on the back of postcard. If included, we will generate the back based off to, from, and message arguments.
| size       | String     | Optional: Specifies the size of the postcard. Must be either 4x6, 6x9, or 6x11. Defaults to 4x6. Only 4x6 postcards can be sent to international destinations.
| metadata   | JSON       | Optional: Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. See Metadata for more information.

### `cardFrom` and `cardTo` field format: 
As JSON Object: 
```json
"cardFrom": {
	"name": "TEST",
	"address_line1": "123 Test Stree",
	"address_city": "Mountain View",
	"address_state": "CA",
	"address_zip": 94041,
	"address_country": "US"
}
```
As addressId:
```json
{
	"cardFrom": "addressidstring"
}
```

<a name="retrievePostcard"/>
## Lob.retrievePostcard
Retrieves the postcard with a given ID. You need only supply the unique postcard ID that was returned upon postcard creation.

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: Api Key.
| postcardId| String     | Required: The identifier of the postcard to be retrieved.

<a name="getAllPostcards"/>
## Lob.getAllPostcards
Returns a list of postcards. The returned postcards are sorted by creation date, with the most recently created postcards appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| limit      | String     | Optional: How many results to return, default=10, max 100, must be an integer
| offset     | String     | Optional: Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Optional: Request that the response include the total count by specifying include[]=total_count
| metadata   | JSON       | Optional: JSON Object. Filter by metadata key-value pair, e.g.
| dateCreated| JSON       | Optional: JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

<a name="createLetter"/>
## Lob.createLetter
Create a new letter.

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| Required: Api Key.
| description     | String     | Optional
| letterTo        | String     | Required: Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| letterFrom      | String     | Required: Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| color           | String     | Required: Boolean. Set this key to true to if you would like to print in color. Set to false if you would like to print in black and white.
| file            | String     | Required: File can be an HTML string or an 8.5x11 PDF (uploaded file or URL). For design specifications, please see our PDF and HTML templates. For domestic destinations, the file limit is 60 pages single-sided or 120 pages double-sided. For international destinations, the file limit is 6 pages single-sided or 12 pages double-sided. PDFs that surpass the file limit will error, while HTML that renders more pages than the file limit will be trimmed. See pricing for extra costs incurred.
| data            | JSON       | Optional: Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| doubleSided     | String     | Optional: Boolean that defaults to true. Use false to force single-sided printing.
| addressPlacement| String     | Optional: Specifies the location of the address information that will show through the double-window envelope. Options are top_first_page and insert_blank_page. Defaults to top_first_page, meaning we will print address information at the top of your provided first page. To see how this will impact your letter design, view our letter template. If you pass insert_blank_page, a blank address page will be inserted at the beginning of your file and you will be charged for the extra page.
| returnEnvelope  | String     | Optional: Boolean. Set this key to true and specify the perforated_page if you would like to include a return envelope with your letter. See pricing for extra costs incurred.
| perforatedPage  | String     | Optional: Required if return_envelope is true. Number of the page that should be perforated for use with return_envelope. Must be greater than or equal to 1. To see how perforation will impact your letter design, view our perforation guide.
| extraService    | String     | Optional: Add an extra service to your letter. Options are certified or registered. Certified provides tracking and delivery confirmation for domestic destinations. Registered provides tracking and confirmation for international addresses. See pricing for extra costs incurred.
| metadata        | JSON       | Optional: Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and Nested objects are not supported. See Metadata for more information.

### `letterFrom` and `letterTo` field format: 
As JSON Object: 
```json
"letterFrom": {
	"name": "TEST",
	"address_line1": "123 Test Stree",
	"address_city": "Mountain View",
	"address_state": "CA",
	"address_zip": 94041,
	"address_country": "US"
}
```
As addressId:
```json
{
	"letterFrom": "addressidstring"
}
```

<a name="retrieveLetter"/>
## Lob.retrieveLetter
Retrieves the letter with a given ID. You need only supply the unique letter ID that was returned upon letter creation.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Required: Api Key.
| letterId| String     | Required: The identifier of the letter to be retrieved.

<a name="getAllLetters"/>
## Lob.getAllLetters
Returns a list of letters. The letters are returned sorted by creation date, with the most recently created letters appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| limit      | String     | Optional: How many results to return, default=10, max 100, must be an integer
| offset     | String     | Optional: Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Optional: Request that the response include the total count by specifying include[]=total_count
| metadata   | JSON       | Optional: JSON Object. Filter by metadata key-value pair.
| dateCreated| JSON       | Optional: JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

<a name="createCheck"/>
## Lob.createCheck
Create a new check.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| description| String     | Optional
| checkTo    | String     | Required: Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| checkFrom  | String     | Required: Must either be an address ID or an JSON object with correct address parameters. If an JSON object is used, an address will be created for you and returned with an ID.
| bankAccount| String     | Required: Must be a bank account ID. Only verified bank accounts may be used.
| amount     | String     | Required: The payment amount to be sent in dollars. Must be less than 1000000.
| memo       | String     | Optional: Max of 40 characters to be included on the memo line of the check.
| checkNumber| String     | Optional: Checks will default starting at 10000 and increment accordingly.
| logo       | String     | Optional: This can be a URL or local file. The image must be a square, have color model of RGB or CMYK, be at least 100px X 100px, and have a transparent background. The accepted file types are PNG and JPEG. If supplied, the logo is printed in grayscale and placed in the upper-left corner of the check.
| message    | String     | Optional: Either message or check_bottom, choose one. Max of 400 characters to be included at the bottom of the check page.
| checkBottom| String     | Optional: Either message or file, choose one. This can be a local file or a URL to a 1 page 8.5x11 PDF, PNG, or JPEG, or an HTML string. This will be printed on the bottom of the check page in black & white. You must follow this template.
| attachment | String     | Optional: A document to include with the check. This can be a local file or a URL to an 8.5 x11 PDF, PNG, or JPEG, or an HTML string. This will be printed double-sided in black & white and will be included in the envelope after the check page. If a PDF is provided, it must be 6 pages or fewer. If HTML is provided that renders to more than 6 pages, it will be trimmed. Please follow these design guidelines. See pricing for extra costs incurred.
| data       | JSON       | Optional: Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| mailType   | String     | Optional: A string designating the mail postage type. Options are usps_first_class or ups_next_day_air. Defaults to usps_first_class. See pricing for extra costs incurred for ups_next_day_air.
| metadata   | JSON       | Optional: Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. See Metadata for more information.


### `checkTo` and `checkFrom` field format: 
As JSON Object: 
```json
"checkFrom": {
	"name": "TEST",
	"address_line1": "123 Test Stree",
	"address_city": "Mountain View",
	"address_state": "CA",
	"address_zip": 94041,
	"address_country": "US"
}
```
As addressId:
```json
{
	"checkFrom": "addressidstring"
}
```

<a name="retrieveCheck"/>
## Lob.retrieveCheck
Retrieves the check with a given ID. You need only supply the unique ID that was returned upon check creation.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| Required: Api Key.
| checkId| String     | Required: The identifier of the check to be retrieved.

<a name="getAllChecks"/>
## Lob.getAllChecks
Returns a list of checks. The returned checks are sorted by creation date, with the most recently created checks appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| limit      | String     | Optional: How many results to return, default=10, max 100, must be an integer
| offset     | String     | Optional: Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Optional: Request that the response include the total count by specifying include[]=total_count
| metadata   | JSON       | Optional: JSON Object. Filter by metadata key-value pair
| dateCreated| JSON       | Optional: JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

<a name="createBankAccount"/>
## Lob.createBankAccount
Create a new bank account. Bank accounts created in live mode will need to be verified via micro deposits before being able to send live checks. The deposits will appear in the bank account in 2-3 business days and have the description "VERIFICATION".

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: Api Key.
| description  | String     | Optional
| routingNumber| String     | Required: The bank's routing number
| accountNumber| String     | Required: The account number at the bank
| accountType  | String     | Required: The type of entity that holds the account. Must be either company or individual.
| signatory    | String     | Required: The signatory associated with your account. This name will be printed on checks created with the bank account. If you prefer to use a custom signature image on your checks instead, please create your bank account from the Dashboard.
| metadata     | JSON       | Optional: Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. See Metadata for more information.

<a name="retrieveBankAccount"/>
## Lob.retrieveBankAccount
Retrieves the bank account with a given ID. You need only supply the unique ID that was returned upon bank account creation.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: Api Key.
| bankAccountId| String     | Required: The identifier of the bank account to be retrieved.

<a name="deleteBankAccount"/>
## Lob.deleteBankAccount
Permanently deletes a bank account. It cannot be undone.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: Api Key.
| bankAccountId| String     | Required: The identifier of the bank account to be deleted.

<a name="verifyBankAccount"/>
## Lob.verifyBankAccount
Verify a bank account in order to create a check.

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: Api Key.
| bankAccountId| String     | Bank account id to verify
| amounts      | JSON       | Required: JSON Array. In live mode, an array containing the two micro deposits (in cents) placed in the bank account. In test mode, no micro deposits will be placed - use any two integers between 1 and 100

<a name="getAllBankAccounts"/>
## Lob.getAllBankAccounts
Returns a list of bank accounts. The bank accounts are returned sorted by creation date, with the most recently created bank account appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| limit      | String     | Optional: How many results to return, default=10, max 100, must be an integer
| offset     | String     | Optional: Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Optional: Request that the response include the total count by specifying include[]=total_count
| metadata   | JSON       | Optional: JSON Object. Filter by metadata key-value pair.
| dateCreated| JSON       | Optional: JSON Object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

<a name="createAreaMailing"/>
## Lob.createAreaMailing
Create a new mailing for a specific zip or delivery routes

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| description| String     | Optional
| routes     | JSON       | Required: JSON Array. Must enter a zip code or delivery route. This can be an array of zip codes or delivery routes.
| targetType | String     | Optional: A string designating the target recipients. Options are all and residential. Defaults to all.
| front      | String     | Required: A 6.25x11.25 image that will be the front of the postcard. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Area Examples Appendix.
| back       | String     | Required: A 6.25x11.25 image that will be the back of the postcard. Follow this template when creating your artwork. This can be a URL, local file, or an HTML string. Supported file types are PDF, PNG, and JPEG. For HTML examples, please see Area Examples Appendix.
| data       | JSON       | Optiona: Must be an JSON object with up to 40 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. For parameters that accept HTML strings, you can provide optional data variables that will be merged with your HTML. To add a variable, insert double curly braces into your HTML like so: {{variable_name}}.
| metadata   | JSON       | Optional: Must be an JSON object with up to 20 key-value pairs. Keys must at most 40 characters and values must be at most 500 characters. Neither can contain the characters " and  Nested objects are not supported. See Metadata for more information.

<a name="retrieveAreaMailing"/>
## Lob.retrieveAreaMailing
Retrieves the area mailing with a given ID. You need only supply the unique ID that was returned upon area mail creation.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: Api Key.
| areaId| String     | Required: The identifier of the area mail to be retrieved.

<a name="getAllAreaMailings"/>
## Lob.getAllAreaMailings
Returns a list of area mailings. The area mailings are returned sorted by creation date, with the most recently created area mail appearing first.

| Field      | Type       | Description
|------------|------------|----------
| apiKey     | credentials| Required: Api Key.
| limit      | String     | Optional: How many results to return, default=10, max 100, must be an integer
| offset     | String     | Optional: Return requested # of items starting with the value, default=0, must be an integer
| include    | String     | Optional: Request that the response include the total count by specifying include[]=total_count
| metadata   | JSON       | Optional: JSON obejct. Filter by metadata key-value pair.
| dateCreated| JSON       | Optional: JSON object. Filter by ISO-8601 date or datetime, e.g. { gt: '2012-01-01', lt: '2012-01-31T12:34:56Z' } where gt is ›, lt is ‹, gte is ≥, and lte is ≤

<a name="retrieveRoutesByZipcode"/>
## Lob.retrieveRoutesByZipcode
Retrieves the delivery routes for the zip code or zip-route requested.

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| Required: Api Key.
| zipCode| String     | Required: The zip codes or zip-routes to filter by.

<a name="getAllRoutes"/>
## Lob.getAllRoutes
Filters by the zip codes or zip-routes requested.

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Required: Api Key.
| zipCodes| JSON       | Required: JSON Array. The zip codes or zip-routes to filter by.

<a name="getAllCountries"/>
## Lob.getAllCountries
Returns a list of all currently supported countries. You can use these when submitting addresses, jobs, and verification requests.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: Api Key.

<a name="getAllStates"/>
## Lob.getAllStates
Returns a list of all US states. You can use these when submitting addresses, jobs, and verification requests.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: Api Key.

