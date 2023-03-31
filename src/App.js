import './App.css';
function App() {
  let  question =[
    { 
      statement: "what is the capital of pakistan",
    option:["Lahore","Islamabad","Karachi","Peshawar"],
    ans:"Islamabad"
  
  },
  { 
    statement: "what is the capital of China",
  option:["beijing","shingai","hongkong","beunus aires"],
  ans:"Islamabad"

},
{ 
  statement: "what is the capital of India",
option:["Mumbai","Kolkata","Delhi","Ambdabad"],
ans:"Delhi"

},
{ 
  statement: "what is the capital of England",
option:["manchester","London","Chelsea","Newcastle"],
ans:"London"

},
{ 
  statement: "what is the capital of America",
option:["NewYork","Washington","Georgia","san andreas"],
ans:"Washington"

},
  ];
  return (
    <div className="container ny5" >

      <img className='center'  style={{backgroundColor:"white"}} src="logo192.png" alt="Italian Trulli" ></img>
      <h1>Welcome to Online Quiz

      </h1>
      <ol>
        {
          question.map(question=>{
            return(
              <div>

                <li style={{backgroundColor:"yellow"}}>{question.statement}</li>
                <ul>
                  {
                    question.option.map(
                      options=><li style={{backgroundColor:"white",textAlign:'inherit'}}>{options}</li>)
                    
                  }
                      
                </ul>
              </div>

            )
          
        
        
        })
        }
     
      </ol>
     
    </div>
  );
}

export default App;
