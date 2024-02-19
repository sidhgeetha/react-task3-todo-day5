import React from "react";

const TaskCard = ({
  item,
  index,
  setTasks,
  setTitle,
  setDesc,
  setButton,
  setEditIndex,
}) => {
  const handleDelete = () => {
    console.log({ index });

    // tasks.splice(index, 1);

    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const handleEdit = () => {
    setButton("Modify");
    setTitle(item.title);
    setDesc(item.desc);
    setEditIndex(index);
  };

  const updateStatus = () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];

      newTasks[index] = { ...newTasks[index], status: true };
      return newTasks;
    });
  };

  return (
    <div key={index} class="card" style={{ margin: "1px" }}>
      <div class="card-body">
        <div
          style={{
            display: "flex",
            alignItems: " center",
          }}
        >
          <p style={{ margin: "0" }}>Title:</p>
          <p style={{ margin: "0" }} class="card-title">
            {" "}
            {item.title}{" "}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: " center",
            marginTop: "1em",
          }}
        >
          <p style={{ margin: "0" }}>Description:</p>
          <p style={{ margin: "0" }}  class="card-text">
            {item.desc}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: " center",
            justifyContent: "space-between",
            marginTop: "2em",
          }}
        >
          <h6>Status</h6>

          <div class="dropdown">
            <button
              class="btn  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ height: "2em", backgroundColor: "#bebebe" }}
            >
              {item.status == false ? "Not Completed" : "Completed"}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" onClick={updateStatus}>
                  {item.status == false ? "Completed" : "Not Completed"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="button-row"
          style={{
            display: "flex",
            alignItems: " center",
            justifyContent: "space-between",
            marginTop: "2em",
            justifyItems: "flex-end",
          }}
        >
          <a
            href="#"
            class="btn "
            onClick={handleEdit}
            style={{ backgroundColor: "#fdd85f" }}
          >
            Edit
          </a>
          <a href="#" class="btn btn-danger" onClick={handleDelete}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
