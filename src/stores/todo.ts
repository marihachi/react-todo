import { atom, useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

export type TodoItem = {
  id: string;
  text: string;
};

const todoState = atom<TodoItem[]>({
  key: 'todoState',
  default: [],
});

export function useTodoStore() {
  const [items, setItems] = useRecoilState(todoState);

  function addItem(text: string) {
    const newItems = [...items];
    const item: TodoItem = {
      id: uuid(),
      text: text
    };
    newItems.push(item);
    setItems(newItems);
    return item;
  }

  function removeItemAt(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  function clearItems() {
    setItems([]);
  }

  return {
    items,
    addItem,
    removeItemAt,
    clearItems
  };
}
