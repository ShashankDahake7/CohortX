import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atom';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      <br />
      {currentTodo.description}
      <br />
      <br />
    </>
  )
}

export default App