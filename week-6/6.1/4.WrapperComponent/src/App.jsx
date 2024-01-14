function App() {
  return (
    <>
      {/* <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent2 />} /> */}
      <CardWrapper> hi there </CardWrapper>
      <CardWrapper> hello there </CardWrapper>
    </>
  )
}

// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }

// function TextComponent2() {
//   return <div>
//     hello there
//   </div>
// }

// function CardWrapper({ innerComponent }) {
//   return (
//     <div style={{ border: "2px solid black", padding: "10px", margin: "5px" }}>
//       {innerComponent}
//     </div>
//   )
// }

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "5px" }}>
      {children}
    </div>
  )
}

export default App