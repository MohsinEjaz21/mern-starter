interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  quotes?: string;
  address?: {
    street: string,
    city: string,
  };
}

export default User;
