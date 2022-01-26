import { Component, OnInit } from '@angular/core';

declare var iaam: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'iaam-ng';
    userProfile: any;
    access_token: any;


    ngOnInit() {
        this.initIAAM();
    }

    initIAAM() {
            iaam.initLoginFlow({ iaamgw_host: "<IAAM_GATEWAY_HOST>", client_id: "<CLIENT_ID>" })
            .then(() => {
                iaam.isLoggedIn((err:any, loggedIn: Boolean) => {
                    if(!err){
                        if (loggedIn) {
                            this.access_token = iaam.getAccessToken()
                            iaam.getProfile()
                                .then((profile: any) => {
                                    this.userProfile = profile
                                })
                        }
                        else {
                            iaam.login()
                        }
                    }
                    else{
                        // alert(err)
                    }
                })
            })
            .catch((err: any) => {
                // alert(err)
            })
    }
    onLogout() {
        iaam.logout();
    }

}


