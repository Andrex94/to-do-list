const Todos = ({ todos, onClick }) => {
  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i}>
          {todo.text}{" "}
          <span>
            <button className="btn btn-sm btn-danger" onClick={onClick}>
              DELETE
            </button>
          </span>
        </div>
      ))}
    </>
  );
};

export default Todos;
