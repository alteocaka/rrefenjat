import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private returnUrl: string;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){

    const formData = new FormData();
    formData.append('email', this.form.get('email').value);
    formData.append('password', this.form.get('password').value);

    this.authService.signIn()
        .subscribe(data => console.log(data));
  }

}
