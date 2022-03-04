import { FC } from "react";
import { User } from "../../../types";
import styles from "./UserItem.styles.module.css";

interface UserItemProps {
  user: Omit<User, "id">;
}

const UserItem: FC<UserItemProps> = ({ user: { name, age } }) => (
  <div className={styles["user-item"]}>
    Name: {name}, Age: {age}
  </div>
);

export default UserItem;
