import { useState } from 'react'
import bgImage from './assets/images/bgImage.jpg'
import profilePic from './assets/images/profilePic.png'
import Profile from './components/Profile'

function App() {
  const [info, setInfo] = useState([
    {
      profile: profilePic,
      background: bgImage,
      Name: "Shashank Malhotra",
      age: 19,
      place: "Earth",
      followers: '7k',
      likes: "7k",
      following: "7k"
    }
  ]);
  return (
    <div>
      <Profile info={info[0]} />
    </div>
  )
}

export default App
