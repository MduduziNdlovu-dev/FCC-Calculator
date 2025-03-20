import { useState } from 'react';


import './App.css'

function App() {

  return (
    <>
    <div >
      <div className='calculator'>
        <div id='display' className='display'>
          <div className='prev-op'>
            123
          </div>
          <div className='current-op'>
            123
          </div>
        </div>
        <div className='btn-section'>
          
          {/* operation section */}
          <div id='history' className='operator'>history</div>
          <div id='unitM' className='operator'>Unit Calc</div>
          <div id='scientific' className='operator'>Scientific</div>
          <div id='delete' className='operator red'>Delete</div>

          {/* 5 row */}
          <button id='clear' className='num'>clear</button>
          <button id='parentheses' className='num'>()</button>
          <button id='percent' className='num'>%</button>
          <button id='divide' className='btn '>/</button>
          {/* 4 row */}
          <button id='seven' className='num'>7</button>
          <button id='eight' className='num'>8</button>
          <button id='nine' className='num'>9</button>
          <button id='multiply' className='btn '>x</button>
          {/* 3 row */}
          <button id='four' className='num'>4</button>
          <button id='five' className='num'>5</button>
          <button id='six' className='num'>6</button>
          <button id='subtract' className='btn '>-</button>
          {/* 2 row */}
          <button id='one' className='num'>1</button>
          <button id='two' className='num'>2</button>
          <button id='three' className='num'>3</button>
          <button id='add' className='btn '>+</button>
          {/* 1 row */}
          <button id='neg-op' className='neg-op'>+/-</button>
          <button id='zero' className='num'>0</button>
          <button id='decimal' className='num'>.</button>
          <button id='equals' className='btn equal'>=</button>
        </div>
      </div>

      
    </div>
      
    </>
  )
}

export default App
