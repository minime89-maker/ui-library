import React from 'react'
import Dropdown from './lib/components/Dropdowns/Dropdown'
import InputOutline from './lib/components/Inputs/InputOutlined'
import './lib/style/main.css'


function App() {

  const onChange = (e) => {
    console.log(e.target.value)
  }


  return (
    <div>
     <h1 className="text-red-50">Hello!</h1>
     <br/>
     <InputOutline />
     <br />
     <Dropdown
    id='player'
    value='player'
    onChange={onChange} 
    standard
    />
    </div>
  );
}

export default App;


// package.json on the end
// "bugs": {
//   "url": "https://github.com/minime89-maker/ui-library/issues"
// },
// "homepage": "https://github.com/minime89-maker/ui-library#readme"