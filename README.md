# iaam-ng-demo
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Step1: Register Client
````
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "client_name": "Angular-Demo",
  "postlogout_urls": "https://localhost:4200",
  "redirect_uris": "https://localhost:4200",
  "logo_uri": "https://localhost:4200/logo.png",
  "scope": "openid,email,profile,uma_protection,offline_access",
  "grant_types": "authorization_code,client_credentials"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("<IAAM_REGISER_API>", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
````

### response schema
```
{
    "status": "OK",
    "message": "'Angular-Demo' registered successfully",
    "data": {
        "oxd_id": "",
        "op_host": "",
        "client_id": "",
        "client_name": "",
        "client_secret": "",
        "client_registration_access_token": "",
        "client_registration_client_uri": "",
        "client_id_issued_at": 0,
        "client_secret_expires_at": 0
    }
}
```

## Step2: Import IAAM SDK
In the Angular project, insert script `<script  src="https://iaamclient.iaam.cloud/iaamgw/libs/sdk/1.2/iaam.min.js" ></script>` in index.html file

## Step3: init IAAM
In the main commponent, add initail IAAM script
```
declare var iaam: any;
```

## Features
- initLoginFlow(config)


## Development server

Run `ng serve --ssl` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.
