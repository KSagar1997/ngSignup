import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  signupForm= new FormGroup({ 
    name : new FormControl("", [Validators.required, Validators.minLength(2)]),
    email : new FormControl("",[Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(6)]),
    year : new FormControl(""),
  })

  signupSubmit(){
    // console.log(this.signupForm.get("name"));
    console.log(this.signupForm.value);

    this.http.post("https://atologistinfotech.com/api/register.php",this.signupForm.value).subscribe({
      next: () => alert('SingUp Successful'),
      error: () =>console.log("somethig went wrong")
   });
    

    //  subscribe isn't deprecated, only the variant you're using is deprecated. In the future, subscribe will only take one argument: either the next handler (a function) or an observer object.
    // subscribe(res=>{
    //   alert('SIGNIN SUCCESFUL');
    //   this.signUpForm.reset()
    // },err=>{
    //   alert("Something went wrong")
    // })

    

  }

  get name():FormControl { 
    return this.signupForm.get("name") as FormControl;
  }
  get email():FormControl { 
    return this.signupForm.get("email") as FormControl
  }
  get password():FormControl { 
    return this.signupForm.get("password") as FormControl
  }
  get year():FormControl { 
    return this.signupForm.get("year") as FormControl
  }
}
