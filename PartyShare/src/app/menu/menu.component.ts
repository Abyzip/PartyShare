import { Component, OnInit } from '@angular/core';
import { activatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

HomeTitle = "Accueil";
CategoryTitle = "Catégorie";
UploadPartitionTitle = "Déposer une partition";
LoginTitle = "Connexion";

  constructor(private http:HttpClient) { 
  }

  ngOnInit() {
  }

}
