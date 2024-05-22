// fetches static page
// export default async function Home() {
//   const res = await fetch('https://sum-server.100xdevs.com/todos')
//   const data = await res.json();
//   const todos = data.todos;
//   return <div>
//     {todos.map((todo: any) => <div key={todo.id}>
//       {todo.title}
//       {todo.description}
//     </div>)}
//   </div>
// }

// Clear cache every 10 seconds
// export default async function Home() {
//   const res = await fetch('https://sum-server.100xdevs.com/todos', {
//     next: { revalidate: 10 }
//   });
//   const data = await res.json();
//   const todos = data.todos;
//   return <div>
//     {todos.map((todo: any) => <div key={todo.id}>
//       {todo.title}
//       {todo.description}
//     </div>)}
//   </div>
// }

// Clear cache in a next action
import revalidate from "../lib/action/action1";

export default async function Home() {
  const res = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })
  const data = await res.json();
  const todos = data.todos;
  revalidate();
  return <div>
    {todos.map((todo: any) => <div key={todo.id}>
      {todo.title}
      {todo.description}
    </div>)}
  </div>
}