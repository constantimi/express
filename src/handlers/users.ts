import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export const getUsers = (
  request: Request<{}, {}, {}, {}>,
  response: Response<User[]>
) => {
  response.send([]);
};

export const getUserById = (
  request: Request<{}, {}, {}, {}>,
  response: Response<User>
) => {
  response.send();
};

export const createUser = (
  request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) => {
  response.status(201).send({
    id: 1,
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
  });
};
