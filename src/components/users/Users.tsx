import { FC, useState } from "react";
import { User } from "../../types";
import AddUser from "./add-user/AddUser.component";
import UserList from "./user-list/UserList.component";

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const handleAddUser = (u: User) => setUsers((prev) => [u, ...prev]);

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <br />
      <UserList users={users} />
    </div>
  );
};
export default Users;
