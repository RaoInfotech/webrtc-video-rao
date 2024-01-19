import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  loginForm: any;
  callParam:any;
  returnUrl:any;
  constructor(public authService: AuthService, public router: Router, public route:ActivatedRoute) {}

  ngOnInit() {

      // Perform your login logic, and then navigate to the dashboard or returnUrl
      // For example, navigating to the dashboard:

    this.loginForm = {
      email: '',
      password: ''
    };
    this.backToPreviousPage();
  }

  backToPreviousPage() {
    const { redirect } = window.history.state;
  //  this.router.navigateByUrl(redirect || '/dashboard');
    // this.router.navigate(this.returnUrl, { queryParams: { call: this.callParam } });
  }

}