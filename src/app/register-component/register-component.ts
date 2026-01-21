import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserModel } from '../model/UserModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  userModel:UserModel = UserModel.newUser();
  
  saveUser(){
    
  }
}
