import { FC } from "react";
import { User } from "../../../types";
import UserItem from "../user-item/UserItem.component";
import styles from "./UserList.styles.module.css";

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  const userList = !users.length ? (
    <div className={styles.empty}>No users</div>
  ) : (
    users.map(({ id, ...user }) => <UserItem key={id} user={user} />)
  );
  return <div className={styles["user-list"]}>{userList}</div>;
};

export default UserList;
