import React from "react";

const Button = ({
  setTasks,
  setTitle,
  setDesc,
  buttonText,
  title,
  desc,
  editIndex,
}) => {
  const handleSubmit = () => {
    // if (title === "" && desc === "") {
      let task = {
        title: title,
        desc: desc,
        status: false,
      };

      console.log(task);

      setTasks((prevTasks) => [...prevTasks, task]);
      setTitle(" ");
      setDesc(" ");
    
  };

  const handleUpdate = () => {
    console.log(editIndex);

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[editIndex] = {
        ...newTasks[editIndex],
        title: title,
        desc: desc,
      };
      return newTasks;
    });
  };

  return (
    <div>
      <button
        type="button"
        className=" btn "
        style={{
          backgroundColor: " #fdd85f",
          alignItems: "center",
          width: "12em",
          fontWeight:"bold"
        }}
        onClick={
          buttonText == "Add" && title.trim() !== "" && desc.trim() !== ""
            ? handleSubmit
            : handleUpdate
        }
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
