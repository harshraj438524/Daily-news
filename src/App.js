import './App.css';
import Navbar from './components/NavBar';
import News from './components/News';
// import Jsx from './components/Jsx';
import { Routes, Route } from "react-router-dom"
function App() {
  return(
 <div>
   <Navbar />
   {/* <News/> */}
  <Routes>
        <Route path="/" element={<News  category='business' /> }/>
        <Route path="/entertainment" element={<News category="entertainment"/>}/>
        <Route path="/general" element={<News  category='general'/> } />
        <Route path="/health" element={<News  category='health'/> } />
        <Route path="/science" element={ <News  category='science'/> } />
        <Route path="/sports" element={  <News  category='sports' /> } />
        <Route path="/technology" element={ <News  category='technology'/> } />
    </Routes>

 {/* <Jsx/> */}
 
 
 </div>
  )
}

export default App;
