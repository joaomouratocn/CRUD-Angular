import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../services/user-service';
import { UserModel } from '../model/UserModel';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-consult-component',
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, FormsModule],
  templateUrl: './consult-component.html',
  styleUrl: './consult-component.css',
})
export class ConsultComponent {
  searchTerm:string = "";
  userList: UserModel[] = [];
  columnsTable:string[] = ["id", "name", "cpf", "bithday", "email"]

  constructor(private userService:UserService){}

  ngOnInit(){
    this.userList = this.userService.getUsers('');
  }

  searchUser(){
    this.userService.getUsers(this.searchTerm);
  }
}
