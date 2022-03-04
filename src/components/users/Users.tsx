import { FC, useState } from "react";
import { User } from "../../types";
import AddUser from "./add-user/AddUser.component";
import UserList from "./user-list/UserList.component";

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const handleAddUser = (u: User) => setUsers((prev) => [u, ...prev]);

  return (
    // <> is same as <React,Fragment>, to avoid div-soup (too many wrapping divs
    // = slows perfs because unnecessary DOM element to render)
    // similar to a wrapper component that only returns children: const Wrapper = ({children}) => children
    <>
      <AddUser onAddUser={handleAddUser} />
      <br />
      <UserList users={users} />
    </>
  );
};
export default Users;
