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


    //initial IAAM on ngOnInit
    ngOnInit() {
        this.initIAAM();
    }

    //init IAAM and authen flow
    initIAAM() {
        try {
            iaam.initLoginFlow({ iaamgw_host: "<IAAM_GATEWAY_HOST>", client_id: "<CLIENT_ID>" }).then(() => {
                iaam.isLoggedIn((loggedIn: Boolean) => {
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
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    // logout function
    onLogout() {
        iaam.logout();
    }

}


