import { IGetListUsersResponse } from "../interfaces";

interface IGetListUserProps {
  page: number;
}

const getListUsers = async (page: number) => {
  try {
    const data = await fetch(`https://reqres.in/api/users?page=${page}`);
    const response = await data.json();

    return response as IGetListUsersResponse;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getListUsers;
