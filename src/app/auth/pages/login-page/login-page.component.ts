import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );

  public myForm: FormGroup = this.fb.group({
    email:    ['yefferson.barrial@gmail.com', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });


  login() {
    console.log( this.myForm.value );
    const { email, password } = this.myForm.value;
    this.authService.login( email, password )
      .subscribe({
        next: ( ) => {
          console.log('!Todo bien!');
        },
        error: ( errorMessage ) => {
          Swal.fire( 'Error', errorMessage, 'error' )
        }
      })
  }  


}
