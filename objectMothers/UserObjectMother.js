import { UserBuilder } from '../builders/UserBuilder.js';

export class UserObjectMoter {
  static createValidUser() {
    const builder = new UserBuilder();
    return builder
      .with('email', 'seth.reyes+113926@kueski.com')
      .with('password', 'Test1234')
      .build();
  }

  static createUserWithInvalidPassword() {
    const builder = new UserBuilder();
    return builder
      .with('email', 'seth.reyes+113926@kueski.com')
      .with('password', 'INVALID_PASSWORD')
      .build();
  }
}
