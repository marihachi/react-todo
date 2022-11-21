import { Container, Toolbar } from '@mui/material';
import { RecoilRoot } from 'recoil';
import Todo from './Todo';

export default function App() {
  return (
    <RecoilRoot>
      <Toolbar />
      <Container maxWidth="sm">
        <Todo />
      </Container>
    </RecoilRoot>
  );
}
