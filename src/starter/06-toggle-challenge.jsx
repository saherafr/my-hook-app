import { useState } from "react";
const Message = () => {
  return <div className='alert alert-danger'>ALERT!!!</div>
}
;
const ToggleChallenge = () => {
  const [isToggled, setIsToggled]=useState(false);
  // const toggleAlert = () => {
  // if(isToggled){
  //   setIsToggled(false);
  //   return;}
  // setIsToggled(true);

  // };
  return (
    <div>
      <button className="btn" onClick={()=> setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <Message />}
      </div>
  );
};

export default ToggleChallenge;
