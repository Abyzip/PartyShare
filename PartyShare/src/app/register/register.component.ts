import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  Register(log, passw, mail) {
		if( log != "" &&
			passw != "" &&
			email != "")
			{
				var LoginOK = false;
				var EmailOK = false;
				
				this.http.get('http://localhost:8000/users?login=' + log).subscribe
				(data => {
					if(JSON.parse(JSON.stringify(data["hydra:totalItems"])) == '0')
					{
						console.log(data);
						LoginOK:true;
					}
					else
					{
						alert('Login already used');
					}
				});
				
				if(LoginOK = true)
				{
						return this.http.post('http://localhost:8000/users', {
							  login: log,
							  pwd: passw,
							  email: mail,
							  type: "user"
							})
							  .subscribe(
								res => {
								  alert('Account created succesfully');
								},
								err => {
								  console.log("Error occured");
								}
							  );
							  
				}
			}
		else
		{
			alert('Please enter valid informaions');
		}
  
  }

  ngOnInit() {
	  
  }

}
