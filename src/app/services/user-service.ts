import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { U } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static REPO_USERS = "REPO_USERS"

  save(userModel:UserModel){
    const repo = this.getStorage()
    repo.push(userModel)
    localStorage.setItem(UserService.REPO_USERS, JSON.stringify(repo));
    console.log("Saved Succesfully!")
  }

  update(userModel:UserModel){
    const repo = this.getStorage();
    let index = repo.findIndex(u => u.id === userModel.id);

    if(index !== -1){
      console.log("User not found");
      return;
    }

    repo[index] = userModel;
    localStorage.setItem(UserService.REPO_USERS, JSON.stringify(repo))
  }

  delete(userModel:UserModel){
    const repo = this.getStorage();
    let newRepo = repo.filter(u=> u.id === userModel.id)
    localStorage.setItem(UserService.REPO_USERS, JSON.stringify(newRepo));
  }

  getUsers(name:string):UserModel[]{
    return this.getStorage();
  }

  private getStorage():UserModel[]{
    const repoUsers = localStorage.getItem(UserService.REPO_USERS);
    if(repoUsers){
      const users = JSON.parse(repoUsers);
      return users;
    }
    const users: UserModel[] = [];
    localStorage.setItem(UserService.REPO_USERS, JSON.stringify(users));
    return users;
  }
}
