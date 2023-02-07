import { FC, useState, useEffect } from "react";
import getListUsers from "../API/getListUsers";
import Pagination from "../components/Pagination";
import UserList from "../components/UserList";
import { IUser } from "../interfaces";

const Landing: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getUsers = async (page: number) => {
    try {
      const data = await getListUsers(page);
      setUsers(data.data);
      setPage(page);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  return (
    <div>
      <UserList users={users} />
      <Pagination
        totalPages={totalPages}
        activePage={page}
        onSelectPage={getUsers}
      />
    </div>
  );
};

export default Landing;
