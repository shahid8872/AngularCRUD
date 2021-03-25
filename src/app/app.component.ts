import { Component,OnInit } from '@angular/core';
import{ArticleService}from './article.service'
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NewProject';
  constructor(private articleService: ArticleService) { }

  users: any;
  user!: User;
  userName: any;
  userId: any;
  userNodeId: any;
  localUsers: any;
  firstName: any;
  id: any;
  lastName: any;
  balance: any;
  date: any;

  ngOnInit(): void {
    this.articleService.getLocalUsers().subscribe(data => {
      this.localUsers = data;
    });
  }

  localEdit(user: any): void {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.balance = user.balance;
    this.date = user.date;

  }

  localDeleteButton(user: any): void {
    // debugger
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.balance = user.balance;
    this.date = user.date;

    this.articleService.deleteLocal(user.id).subscribe(data => {
      console.log(data);
    });
  }

// Update Local User 

localUpdate() { debugger
  var params = {
    id : this.id,
    firstName : this.firstName,
    lastName : this.lastName,
    balance : this.balance,
    date: this.date
  };
  this.articleService.updateLocal(params).subscribe(data => {
    console.log(data);
  });
}

// Add new Local User 

localAdd() { 
  var params = {
    id : this.id,
    firstName : this.firstName,
    lastName : this.lastName,
    balance : this.balance,
    date: this.date
  };
  this.articleService.createLocal(params).subscribe(data => {
    console.log(data);
  });
}

// Delete Local User 

localDelete() {
  var params = {
    id : this.id,
    firstName : this.firstName,
    lastName : this.lastName,
    balance : this.balance,
    date: this.date
  };
  this.articleService.deleteLocal(params.id).subscribe(data => {
    console.log(data);
  });
}



}

