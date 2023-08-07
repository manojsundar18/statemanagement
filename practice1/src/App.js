import logo from './logo.svg';
import './App.css';
import State from './State';
import Effect from './Effect'
import Child from './Child';
import Ref from './Ref';
import Reducer from './Reducer';
import Callback from './Callback';
import Memo from './Memo';
import MyComponent from './Mycomponent';




function App() {
  return (
    <div className="App">
     <State/>
     <br/>
     <Effect />
     <br/>
     <Child/>
     <br/>
     <Ref/>
     <br/>
     <Reducer/>
     <br/>
     <Callback/>
     <br/>
     <Memo/>
     <br/>
     <MyComponent/>
    </div>
  );
}

export default App;
