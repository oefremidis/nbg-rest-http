import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnDestroy {

  service = inject(UsersService);

  users: any;


  ngOnInit(): void {
    // observable as local varialbe
    // const response = this.service.getUsers();
    // response.subscribe({
    //   next: value => console.log(value);
    // })

    // using subscribe
    this.service.getUsers().subscribe({
      next: response => this.users = response, 
      error: err => console.log(err), // delete a letter from url
      // complete: () => alert("Data Fetch completed...")
    })

    // using async
    // this.users = this.service.getUsers();

  }

  ngOnDestroy(): void {
    this.users.usnsubscribe();
  }

}
