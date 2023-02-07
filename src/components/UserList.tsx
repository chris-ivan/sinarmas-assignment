import { FC } from "react";
import { IUser } from "../interfaces";
import UserCard from "./UserCard";

interface IUserList {
  users: IUser[];
}

const UserList: FC<IUserList> = ({ users }) => {
  return (
    <div className="p-8">
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
