import { FC } from "react";
import { IUser } from "../interfaces";

const UserCard: FC<IUser> = (userData) => {
  const { email, first_name, last_name, avatar } = userData;

  return (
    <div className="shadow rounded flex items-center mb-4 overflow-hidden">
      <img className="w-24" src={avatar} />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-bold">
          {first_name} {last_name}
        </h3>
        <p className="text-slate-500">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
