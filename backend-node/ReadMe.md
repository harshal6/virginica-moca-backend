# Backend for Virginia Moca Art Museum 

To run this application, you need to have nodejs and npm installed in your system.
npm will be automicatically installed on installation of nodejs. 

[Click here](https://nodejs.org/en/download/) to see the docs for installation if you haven't installed.

## Steps to run application 

1. Install dependencies 
``` npm i ```
or
``` npm install ```

2. Start the server usgin below command after all the dependencies are installed
``` npm run dev ``` - Development Server
``` npm start ``` - Normal Server

## Api Endpoints are below

## - Sign Up User

### Request

`GET /user/signup/`

    curl -i -H 'Accept: application/json' http://localhost:3000/user/signup/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

***

## - Register for an event

### Request

`GET /events/register`

    curl -i -H 'Accept: application/json' http://localhost:3000/events/register

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

***

## - Donations

### Request

`GET /donations/donate`

    curl -i -H 'Accept: application/json' http://localhost:3000/donations/donate

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

***

## - Membership

### Request

`GET /membership/register`

    curl -i -H 'Accept: application/json' http://localhost:3000/membership/register

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
    
    
