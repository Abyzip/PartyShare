import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  LogIn(login, passw) {
		if( login != "" &&
			passw != "")
		{
			this.http.get('http://localhost:8000/users?login=' + login).subscribe
			(data => {
				  
				if(JSON.parse(JSON.stringify(data["hydra:totalItems"])) == '0')
				{
					alert('This login does not exists');
				}
				else
				{
					var isCorrect=false;
					for(var i = 0 ; i < JSON.parse(JSON.stringify(data["hydra:totalItems"])) ; i++)
					{
						if(JSON.parse(JSON.stringify(data["hydra:member"][i]["login"])) == login)
						{
							isCorrect = true;
							if(JSON.parse(JSON.stringify(data["hydra:member"][i]["pwd"])) == passw)
							{
								alert('OK');
							}
							else
							{
								alert('This password is incorrect');
							}
						}
					}
					if(!isCorrect)
					{
						alert('This login does not exists');
					}
				}
			});
		}
		else
		{
			alert('Please enter a valid login and password');
		}
  }

  ngOnInit() {
  }

}
