import { useEffect, useState } from "react";

const useOption = () => {
  const storedItems = JSON.parse(localStorage.getItem('task'))
  const [name, setName] = useState("");
  const [task, setTask] = useState(storedItems);
  const [select, setSelect] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [num, setNum] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    setNum(1 + num);
    setName(name);
    !name.length || name.startsWith(" ")
      ? setCheckName(true)
      : update();
    setName("");
  };
  const handleDelete = (id) => {
    setTask(
      task.filter((e, i) => {
        return i != id;
      })
    );
    setCheckName(false);
  }
  const update = () => {
    setTask([...task, name]);
    setCheckName(false);
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task))
    num && !task.length ? setSelect(true) : setSelect(false);
  }, [num, task]);

  const rndm = () => {
    setPopUp(true);
    setText(task[Math.floor(Math.random() * task.length)]);
    setSelect(false);
    setCheckName(false);
  };

  const Random = () => {
    setNum(1 + num);
    task.length ? rndm() : undefined;
  };
  const removeAll = () => {
    setTask([])
  }
  return { name, setName, task, setTask, select, checkName, popUp, setPopUp, text, handleClick, handleDelete, Random, removeAll, handleChange }
}
export default useOption

