import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import reactLogo from './img/reactLogo.png';

function App() {
  const [expr, setExpr] = useState('');
  return (
    <div className="App">
      <div className="Calculator">
        <form>
          <div className="Screen">
            <input type='text' value={expr}/>
          </div>

          <div className="Buttons">
            <div>
              
            <input type='button' onClick={e => setExpr('')} id='C' value='C' />
            <input type='button' id='op' onClick={e => setExpr(expr + e.target.value)} value='*' />
            <input type='button' id='op' onClick={e => setExpr(expr + e.target.value)} value='/' />
            <input type='button' onClick={e => setExpr(expr.slice(0 , -1))} value='⌫' id='del' />
            </div>
            <div>
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='7' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='8' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='9' />
            <input type='button' id='op' onClick={e => setExpr(expr + e.target.value)} value='+' />
            </div><div>
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='4' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='5' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='6' />
            <input type='button' id='op' onClick={e => setExpr(expr + e.target.value)} value='-' />
            </div><div>
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='1' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='2' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='3' />
            <input type='button' id='op' onClick={e => setExpr(expr + '**')} value='^' />
            </div><div>
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='0' />
            <input type='button' onClick={e => setExpr(expr + e.target.value)} value='.' />
            <input type='button' onClick={e => setExpr(eval(expr))} value='=' id='equal' />
            </div>
          </div>
        </form>
      </div>
      <div className="react">Created with React.JS <img src={reactLogo} alt="react logo"/></div>
      <div className="by">@Developed by <a href="https://github.com/neju050405">@neju050405</a></div>

    </div>
  );
}

export default App;
