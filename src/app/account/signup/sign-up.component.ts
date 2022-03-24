import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { Router  } from '@angular/router';

import  swal  from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
//import { AccountService } from '../account-service/account.service';
import { FormControl } from '@angular/forms';



//import { patternValidator } from 'src/app/shared/helper/pattern-validator';
// import { whiteSpaceValidator } from 'src/app/shared/helper/white-space-validator';
// import { MustMatch } from 'src/app/shared/helper/must-match.validator';

declare var $:any

@Component ({
    templateUrl: 'sign-up.component.html',
    styleUrls:['../../../assets/css/custom.css', '../../../assets/css/home.css', '../../../assets/css/style.css'],
    encapsulation:  ViewEncapsulation.None

})
export class SignUpComponent implements OnInit {

    signupForm: any;
    rememberMe = false;
    submitted = false;
    massage = null;

    constructor(
      private formbulider: FormBuilder,
        //private _service: AccountService,
        //private _router: Router,
        private ngxUiLoaderService: NgxUiLoaderService) { }
        ngOnInit() {
         // this.loadScripts();
            this.signupForm = this.formbulider.group({
                username: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
                password: ['', [Validators.required,
              //     patternValidator(/\d/, { hasNumber: true }),
              //     patternValidator(/[A-Z]/, { hasCapitalCase: true }),
              //     patternValidator(/[a-z]/, { hasSmallCase: true }),
              //  // patternValidator(/[!@#$%^&*(),.?":{}|<>]/g,{hasSpecial:true}),
              //     patternValidator(/^(?=.*?[#?!@$%^&*-])./, { hasSpecial: true }),
                  //whiteSpaceValidator(/\s/g, { hasSpace: true }),
                  Validators.minLength(8),
                  Validators.maxLength(12)
                ]],
                isAgreeCheckbox: new FormControl(false, [Validators.requiredTrue]),
                confirmpassword: ['']
              }, {
               // validator: MustMatch('password', 'confirmpassword')
              });
        }


        get f() { return this.signupForm.controls; }

        onSignupFormSubmit() {
      //       this.submitted = true;
      //       if (this.signupForm.invalid) {
      //         return false;
      //     }
      //     this.ngxUiLoaderService.start();
      // //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value))
      //     let signinObj = this.signupForm.value;
      // //  console.log(signinObj)
      //     var signupObj = {
      //     email: signinObj.email,
      //     location: '',
      //     name: signinObj.username,
      //     password: signinObj.password,
      //     term: true,
      //     username: signinObj.username};

          // this._service.Signup(signupObj).subscribe(
          //   (data) => {
          //     this.ngxUiLoaderService.stop();
          //     const resp: any = data;
          //     if ( resp.code === '1002' ) {
          //       // swal({
          //       //   title: 'Signup Sucessfully',
          //       //   html: resp.errorMessages.join('<br />'),
          //       //   type: 'success'
          //       // })
          //     } else {
          //       // swal({
          //       //   title: 'Error',
          //       //   html: resp.message.join('<br />'),
          //       //   type: 'error'
          //       // })
          //     }
          //   }, (error) => {
          //   //  console.log(error);
          //     this.ngxUiLoaderService.stop();
          //   //  swal( "Error",error.message,"error")
          // }
          // );
       }

      //  checkValue(chk) {
      //    if (this.rememberMe) {
      //     this.rememberMe = false;
      //    } else {
      //     this.rememberMe = true;
      //    }
      //  }
}
