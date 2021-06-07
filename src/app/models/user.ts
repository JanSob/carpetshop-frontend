export class User {

// the fields match with the json data that comes back from the REST-endpoint.


  constructor(public username: string,
              public password: string
  ) {
    this.password=password;
    this.username=username;
  }
}
