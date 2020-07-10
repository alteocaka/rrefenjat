import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;


  Roles: any = ['User', 'Admin'];

  constructor(private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      email: ['', Validators.required],
      photoUrl: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.authService.signUp()
        .subscribe(data => {
          console.log(data);
        });
  }

}
