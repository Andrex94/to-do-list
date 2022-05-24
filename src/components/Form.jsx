import { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        className=" input form-control"
        placeholder="Add Todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className=" btn btn-block btn-primary form-control"
      >
        ADD
      </button>
    </form>
  );
};

export default Form;
