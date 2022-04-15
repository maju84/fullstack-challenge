const Hello = (props) => { 
  return (
    <div>      
      <p>Hello {props.name} your age is {props.age}</p>    
    </div>
  ); 
};

const App = () => {
  const age = 42;
  console.log('Hello from component.');
  return (
    <div>
      <p>Greetings now at {new Date().toString()}</p>
      <Hello name="Dude" age="23"/>
      <Hello name="Dave" age={age}/>
      <Hello />
    </div>);
};

export default App;
