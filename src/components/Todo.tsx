import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, List, ListItem, ListItemText, ListSubheader, Paper, Stack, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { TodoItem, useTodoStore } from '../stores/todo';

export default function RenderTodo() {
  const [text, setText] = useState('');
  const todoStore = useTodoStore();

  function textChangeEvent(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function addTodoEvent() {
    todoStore.addItem(text);
    setText('');
  }

  function renderListItem(item: TodoItem, index: number) {
    return (
      <ListItem
        key={item.id}
        secondaryAction={
          <IconButton onClick={() => todoStore.removeItemAt(index)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText>
          {item.text}
        </ListItemText>
      </ListItem>
    );
  }

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>
          <TextField label="内容" variant="standard" value={text} onChange={textChangeEvent} />
          <Button onClick={addTodoEvent}>この内容で追加</Button>
        </Stack>
      </Paper>
      <Paper sx={{ p: 1 }}>
        <List subheader={<ListSubheader>やること一覧</ListSubheader>}>
          {(todoStore.items.map((item, index) => renderListItem(item, index)))}
        </List>
      </Paper>
    </Stack>
  );
}
