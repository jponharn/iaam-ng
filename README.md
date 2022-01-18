# iaam-ng-demo

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

fetch("https://iaamclient.iaam.cloud/api/register_client", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
````

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve --ssl` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

