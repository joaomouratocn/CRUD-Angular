import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserModel } from '../model/UserModel';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'
import {MatSnackBar} from '@angular/material/snack-bar'
import { BrasilApiService } from '../services/brasil-api-service';
import {City, State} from '../model/brasil.models'
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register-component',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, FormsModule, CommonModule, NgxMaskDirective],
  providers:[provideNgxMask()],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
  updateUser:boolean = false;
  userModel:UserModel = UserModel.newUser();
  snackBar = inject(MatSnackBar);
  states: State[] = []
  cities: City[] = []

  constructor(private userService:UserService, private actRoute:ActivatedRoute, private router:Router, private brasilApi:BrasilApiService){}

  ngOnInit(){
    this.loadUfs()
    this.actRoute.queryParamMap.subscribe( (query: any) => {
      const params = query['params']
      const id = params['id']
      if(id){
        let findedUser = this.userService.getUserById(id);
        if(findedUser){
          this.userModel = findedUser
          
          if(this.userModel.uf){
            const event = {value: this.userModel.uf}
            this.loadCities(event as MatSelectChange)
          }

          this.updateUser = true
        }
      }
    })
  }
  
  saveUser(){
    if(this.updateUser){
      this.userService.update(this.userModel);
      this.router.navigate(['/consult'])
      this.showSnackBar("Updated successfully", "OK")
    }else{
      this.userService.save(this.userModel);
      this.userModel = UserModel.newUser();
      this.showSnackBar("Saved succesfully", "OK")
    }
  }

  loadUfs(){
    this.brasilApi.listUfs().subscribe({
      next:stateList => this.states = stateList,
      error:erro => this.showSnackBar("Error load states", "Done")
    })
  }

  loadCities(event:MatSelectChange){
    const selected = event.value
    this.brasilApi.listCities(selected).subscribe({
      next:citiesList => this.cities = citiesList,
      error:erro => this.showSnackBar("Error load cities", "Done")
    })
  }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message, action)
  }
}
