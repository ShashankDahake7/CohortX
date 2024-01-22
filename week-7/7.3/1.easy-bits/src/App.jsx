// import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"
// import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./atoms";

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <MainApp />
//       </RecoilRoot>
//     </div>
//   )
// }

// function MainApp() {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsCount = useRecoilValue(jobsAtom);
//   const notificationsCount = useRecoilValue(notificationsAtom);
//   const messagingAtomCount = useRecoilValue(messagingAtom);
//   // const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom); // just to show useRecoilState()

//   return (
//     <div>
//       <RecoilRoot>
//         <button>Home</button>
//         <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
//         <button>Jobs ({jobsCount})</button>
//         <button>Messaging ({messagingAtomCount})</button>
//         <button>Notifications ({notificationsCount})</button>
//         <ButtonUpdater />
//       </RecoilRoot>
//     </div>
//   )
// }

// function ButtonUpdater() {
//   const setMessagingAtomCount = useSetRecoilState(messagingAtom);

//   return (
//     <div>
//       <button onClick={() => {
//         setMessagingAtomCount(c => c + 1);
//       }}>Me</button>
//     </div>
//   )
// }

// export default App


import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms";
// import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // UGLY WAY!!
  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsCount + notificationsCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsCount, notificationsCount, messagingAtomCount])

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App;