

import './App.css';
import Filter from './Filter';
import JobCard from './JobCard';

function App() {

  
  

  // useEffect(() => {
  //   fetch("")
  //   .then((response) =>response)
  //   .then((e)=>e.json())
  //   .then((e)=> setData(e))
  
  // },[])
  return (
    <div className="App">
    <Filter/>
    <JobCard/>
    </div>
  );

}

export default App;
