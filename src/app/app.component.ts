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
        try {
            iaam.initLoginFlow({ iaamgw_host: "https://iaamclient.iaam.cloud", client_id: "6b749ebf-f9bd-4d0b-9ce2-88c6cc4a19fb" }).then(() => {
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
    onLogout() {
        iaam.logout();
    }

}


