import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummyUsers';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users = DUMMY_USERS;

  
}
