import React from 'react';
import Button from '@material-ui/core/Button'
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    // <button
    //   className="btn btn-danger"
    //   ref={buttonRef}
    //   onClick={showModal}
    // >
    
    // </button>

    
<Button size="small" color="primary" target="fill" onClick={showModal} ref={buttonRef}>
{triggerText}
</Button>
  );
};
export default Trigger;



