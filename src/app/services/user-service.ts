import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';

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

    Object.assign(repo[index], userModel); 
    localStorage.setItem(UserService.REPO_USERS, JSON.stringify(repo))
  }

  getUserById(id:string){
    const repo = this.getStorage();
    let index = repo.findIndex(u => u.id === id);

    if(index === -1) return

    return repo[index];
  }

  delete(userId:string){
    const repo = this.getStorage();
    let newRepo = repo.filter(u=> u.id !== userId)
    localStorage.setItem(UserService.REPO_USERS, JSON.stringify(newRepo));
  }

  getUsers(name:string):UserModel[]{
    const users = this.getStorage()

    if(!name){
      return users
    }

    return users.filter(u=> u.name?.indexOf(name) !== -1);
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
