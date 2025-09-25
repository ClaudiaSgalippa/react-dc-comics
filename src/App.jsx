import MyHeader from "./components/MyHeader.jsx"
import MyJumbotron from "./components/MyJumbotron.jsx"
import MyMainContent from "./components/MyMainContent.jsx"
import MyMainInfo from "./components/MyMainInfo.jsx"
import MyNavbar from "./components/MyNavbar.jsx"
import MyFooter from "./components/MyFooter.jsx"
import './App.css'

function App() {

  return (
    <>
        <MyHeader />
        <MyJumbotron />
        <MyMainContent />
        <MyMainInfo />
        <MyNavbar />
        <MyFooter />
    </>
  )
}

export default App