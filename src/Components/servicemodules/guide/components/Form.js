import React from 'react';
import './Form.css';
import FormSearch from './formsearch';
import guide from '../../../../images/guide-img/img/img-2.svg';

const Form = () => {

  
 
  return (
    <>
      <div className='form-container-g'>
        
        <div className='form-content-left-g'>
          <img className='form-img-g' src={guide} alt='toure gude' />
        </div>
        <FormSearch/>
      </div>
    </>
  );
};

export default Form;
