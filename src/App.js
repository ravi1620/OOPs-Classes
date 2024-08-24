import "./App.css";
import SSCStudent from "./classes/SSCStudent";


function App() {

  
 

  
  let dharmaraj= new SSCStudent("bheem","Male","Yelder son of Pandu Raju");    
let bheem= new SSCStudent("bheem","Male","Yelder son of Pandu Raju");
 
  let arjun= new SSCStudent("arjun","Male","Yelder son of Pandu Raju"); 
  let nakul= new SSCStudent("nakul","Male","Yelder son of Pandu Raju");
  let sahadev= new SSCStudent("sahadev","Male","Yelder son of Pandu Raju");


  dharmaraj.outPut();
  bheem.outPut();

  arjun.outPut();
  nakul.outPut();
  sahadev.outPut();

  return (
    <div className="App">
<h1 className="h1"><u>OOPs-Classes</u></h1>

    </div>
  );
}

export default App;
