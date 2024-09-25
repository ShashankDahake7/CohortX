import { atomFamily } from "recoil";
import { TODOS } from "./todos";

// All todos re-renders if any one todo changes
// export const todosAtom = atom({
//     key: "atom",
//     default: TODOS
// });

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});