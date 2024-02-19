# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Task 3-day5-todo list ##

1. App .jsx to set state for tasks,title, description, button text,edit text,filter tasks, select option.
2. Created compoents for input values, button clicks, task card to store tasks adn update as array, totdocards for display task in cards.
3. Imported components input, button, and todo cards.
4. Input component => used passed props namely setTitle, setDesc,  and returned DOM for title adn description . Updated onChange event to store inout values in title adn description. 
5. Button component is referrign props form parent component namely  setTasks,
  setTitle,
  setDesc,
  buttonText,
  title,
  desc,
  editIndex, and handles onClick events like handle submit and handleUpdate

6. The setTasks function is called to update the state with the new task. It uses the functional form of setState to ensure that the update is based on the previous state. setTasks((prevTasks) => [...prevTasks, task]);
7. So, when the handleSubmit function is triggered, it effectively adds a new task to the tasks list with the provided title, desc, and a status set to false. Then, it resets the title and desc state variables to an empty string, presumably to clear the input fields for further entries.
8. Handleupdate event is  to make copy of prev array and that holds the index of task you wan tto edit ,handleUpdate function is responsible for updating that specific task in the array. return new updated array.


![Alt text](<Screenshot 2024-02-19 at 22.34.05.png>)