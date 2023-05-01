import style from'./App.module.css'
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";

function App() {
  return (
    <div className={style.App}>
    <Header/>
      <Body/>
    </div>
  )
}


export default App
