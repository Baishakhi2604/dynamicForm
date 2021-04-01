# Dynamic Form!

Render Dynamic Form Using Metadata from Database Using MEAN

Problem Statement::
Create a simple MERN stack application that creates a metadata-driven dynamic form using react. The metadata is stored in a mongo DB. Metadata means, how the form will be rendered is be stored in a database, like Google Form does. If you change the JSON from the DB, the structure of the form changes. Similarly, once someone submits the forms, the Mongo table is updated with those dynamic column names. Assume, that you are creating an application like Google Form (excluding the form creation part)


## URL
http://localhost:4200 (Frontend)
http://localhost:3000 (API)

## API

>GET | Get request to fetch the schema
``
http://localhost:3000/v1/dynamicform/getschema
``

>POST | Post request to set the metadata of the form 
``
http://localhost:3000/v1/dynamicform/insertschema
``

>POST | Post request to send the rendered form to database
``
http://localhost:3000/v1/dynamicform/insertvalues
``

# Quick Start

>  Install Angular and Yarn
 ```
npm install -g @angular/cli yarn 
 ```
 ### In backend folder:
 >copy .env.example to .env
 ```
yarn
yarn dev 
 ```
 ### In frontend folder:
 ```
npm i
ng start 
 ```

Make a POST request to '/insertschema' using POSTMAN to insert the metadata to database. 
>use sample.json
```
{
    "formName" : "AccountsHead",
    "formDesc" : "This is test description",
    "data" : [ 
        {
            "fieldname" : "AccountHeadName",
            "fieldplaceholder" : "Account Head Name",
            "fieldlabel" : "Account Head Name",
            "fieldrules" : [ 
                {
                    "required" : true,
                    "message" : "This field is required"
                }
            ],
            "fieldtype" : "number"
        }, 
        {
            "fieldname" : "Account",
            "fieldplaceholder" : "Account Head Name",
            "fieldlabel" : "Account Head Name",
            "fieldrules" : [ 
                {
                    "required" : true,
                    "message" : "This field is required"
                }
            ],
            "fieldtype" : "text"
        }, 
        {
            "fieldname" : "Account1",
            "fieldplaceholder" : "Account Head Name",
            "fieldlabel" : "Account Head Name",
            "fieldrules" : [ 
                {
                    "required" : true,
                    "message" : "This field is required"
                }
            ],
            "fieldtype" : "textarea"
        }, 
        {
            "fieldname" : "AccountType2",
            "fieldplaceholder" : "Account Type",
            "fieldlabel" : "Account Type",
            "fieldrules" : [],
            "fieldtype" : "select",
            "options" : [ 
                "Assets", 
                "Liabilities", 
                "xyz"
            ]
        }, 
        {
            "fieldname" : "AccountType",
            "fieldplaceholder" : "Account Type",
            "fieldlabel" : "Account Type",
            "fieldrules" : [],
            "fieldtype" : "multiselect",
            "options" : [ 
                "Assets", 
                "Liabilities", 
                "xyz"
            ]
        }
    ]
}
```
# Files
### Main Frontend Files:
frontend\src\app
### Main Backend Files:
backend\src\api
```