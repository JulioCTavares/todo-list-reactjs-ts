import { useState } from "react";
import * as S from "./App.styles";
import AddItem from "./Components/AddItem";
import ListItem from "./Components/ListItem";
import { Item } from './types/item';

const App = () => {
  const [list, setList] = useState<Item[]>([])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>To Do List</S.Header>
        <AddItem onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem 
            key={index}
            item={item}
            onChange={handleTaskChange} />
        ))}
      </S.Area>
    </S.Container>
  );
}

export default App;