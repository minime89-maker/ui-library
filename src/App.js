import React, {useState} from 'react'
import Breadcrumbs from './lib/components/Breadcrumbs/Breadcrumbs'
import Dropdown from './lib/components/Dropdowns/Dropdown'
import Box from './lib/components/Grid/Box'
import Item from './lib/components/Grid/Item'
import InputOutlined from './lib/components/Inputs/InputOutlined'
import Links from './lib/components/Links/Link'
import './lib/style/main.css'
import Checkbox from './lib/components/Checkboxes/Checkbox'
import Alert from './lib/components/Alerts/Alert'
import Block from './lib/components/Block/Block'


function App() {
  const [isOpen, setIsOpen] = useState(['Mario', 'Luigi', 'Kong'])

  const selected = isOpen => {
    console.log(isOpen)
  }

  const onChange = (e) => {
    console.log(e.target.value)
  }


  return (
    <div>
     <h1 className="text-red-50">Hello!</h1>
     <br/>
     <Block className='flex'>
        <Alert />
        <InputOutlined />
     </Block>
    
   
     <InputOutlined />
     <br />
     <Dropdown
    id='player'
    value='player'
    onChange={onChange} 
    standard
    />
    <Box>
      <Item>
        <div style={{background: 'red'}}>1</div>
      </Item>
      <Item>
        <div style={{background: 'blue'}}>2</div>
      </Item>
      <Item>
        <div style={{background: 'green'}}>3</div>
      </Item>
    </Box>
    <Links label='Google' style={{textDecoration: 'underline'}}/>
    <br />
    <Breadcrumbs links={[
      {
        label: 'link 1',
        href: ''
      },
      {
        label: 'link 2',
        href: ''
      },
      {
        label: 'link 3',
        href: ''
      },
    ]}/>
    <Checkbox />
    </div>
  );
}

export default App;


// package.json on the end
// "bugs": {
//   "url": "https://github.com/minime89-maker/ui-library/issues"
// },
// "homepage": "https://github.com/minime89-maker/ui-library#readme"