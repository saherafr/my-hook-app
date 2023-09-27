import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText]=useState('');
  // truthy
  const [name, setName]=useState('susan');
  const codeExample = text || 'hello world';
  return <div>
    {/*{if some cond wont work}} */ }
    /* in short circuit overview if the first operand determines the outcome theres no need to evaluate the second operand */
    <h4>Falsey OR : {text || 'hello world'}</h4>
    <h4>Falsey AND : {text && 'hello world'}</h4>
    <h4>TRUTHY OR : {name || 'hello world'}</h4>
    <h4>TRUTHY AND : {name && 'hello world'}</h4>
    {codeExample}
  </div>
};
export default ShortCircuitOverview;
