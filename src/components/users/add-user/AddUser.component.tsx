import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { InputError, User } from "../../../types";
import Button from "../../UI/button/Button.component";
import Card from "../../UI/card/Card.component";
import ErrorModal from "../../UI/error-modal/ErrorModal.component";
import styles from "./AddUser.styles.module.css";

interface AddUserProps {
  onAddUser(user: User): void;
}

const AddUser: FC<AddUserProps> = ({ onAddUser }) => {
  // const nameRef = useRef<HTMLInputElement | null>(null);
  // const ageRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState<InputError | null>();
  const minAge = 0;
  const maxAge = 110;

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setName(value);
  const handleAgeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setAge(value);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // using refs instead of state slices to retrieve input values
    // fine to use only refs for READING data
    // this is UNCONTROLLED (by React) BEHAVIOR because we use the browser internal input APIs for I/O
    // const name = nameRef.current?.value;
    // const age = ageRef.current?.value;

    if (!name?.trim())
      return setError({
        title: "Invalid Name",
        message: "please enter non-empty name",
      });
    if (!age?.trim())
      return setError({
        title: "Invalid Age",
        message: "please enter non-empty age",
      });
    if (!parseInt(age))
      return setError({ title: "Invalid Age", message: "please a number" });
    if (+age < minAge || +age > maxAge) {
      return setError({
        title: "Invalid Age",
        message: `Age must be between ${minAge} and ${maxAge}`,
      });
    }

    onAddUser({
      id: (Date.now() * Math.random()).toString(36),
      name,
      age: +age,
    });

    // setName("");
    // setAge("");

    // manipulating the DOM directly without using React (AVOID = this is a hack!!)
    // this is UNCONTROLLED (by React) BEHAVIOR because we use the browser internal input APIs for I/O
    // nameRef.current!.value = "";
    // ageRef.current!.value = "";
  };
  const closeModal = () => setError(null);

  return (
    // <> is same as <React,Fragment>, to avoid div-soup (too many wrapping divs
    // = slows perfs because unnecessary DOM element to render)
    // similar to a wrapper component that only returns children: const Wrapper = ({children}) => children
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            id="user-name"
            value={name}
            onChange={handleNameChange}
            // ref={nameRef}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={handleAgeChange}
            value={age}
            min={minAge}
            max={maxAge}
            // ref={ageRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
