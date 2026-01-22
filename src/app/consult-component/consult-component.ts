import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../services/user-service';
import { UserModel } from '../model/UserModel';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-consult-component',
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, FormsModule],
  templateUrl: './consult-component.html',
  styleUrl: './consult-component.css',
})
export class ConsultComponent {
  snackBar = inject(MatSnackBar)
  confirmDelete:boolean = false;
  searchTerm:string = "";
  userList: UserModel[] = [];
  columnsTable:string[] = ["id", "name", "cpf", "bithday", "email", "uf", "state","actions"]

  constructor(private userService:UserService, private router:Router){}

  ngOnInit(){
    this.searchUser()
  }

  searchUser(){
    this.userList = this.userService.getUsers(this.searchTerm);
  }

  prepareEdit(userId: string){
    this.router.navigate(['/register'], {queryParams:{id:userId}})
  }

  prepareDelete(userModel: UserModel){
    userModel.delete = true;
    this.confirmDelete = true;
  }

  deleteUser(userId:string){
    this.userService.delete(userId);
    this.confirmDelete = false
    this.showSnackBar("Deleted Successfully!", "OK")
    this.searchUser();
  }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message, action)
  }
}
