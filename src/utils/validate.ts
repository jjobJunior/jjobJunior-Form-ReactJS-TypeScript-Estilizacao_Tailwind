import { User } from "../types/User";

type Error = {
  [Key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatorio!";
  }

  if (!data.email) {
    errors["email"] = "O email é obrigatorio!";
  }

  if (!data.agree) {
    errors["agree"] = "É necessário concordar com os termos!";
  }
  
  return errors;
};
