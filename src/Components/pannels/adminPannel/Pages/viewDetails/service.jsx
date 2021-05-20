



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './userdetails.css';
import { DoubleArrowSharp } from '@material-ui/icons';
import { InputLabel } from '@material-ui/core';
const URL = ''

const Table = () => {
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        fetch(
          `https://alphax-api.azurewebsites.net/api/users/`
        )
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
             
  
          
                setEmployees(responseData);
                console.log("response data->"+responseData);
          });
      }, []);
    
    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['First Name', 'Last Name', 'dob', 'email', 'Bank Name','Account No','NIC','address', 'contact', 'role']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id, firstName, lastName, dob, email, bankName,accountNo,nic,address, contact, role }) => {
            if(role==="ServiceProvider")
            return (
                <tr key={id}>

                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{dob}</td>
                    <td>{email}</td>
                    <td>{bankName}</td>
                    <td>{accountNo}</td>
                    <td>{nic}</td>
                    <td>{address}</td>
                    <td>{contact}</td>
                    <td>{role}</td>

                </tr>
            )
        })
    }

    return (
        <>
           <InputLabel> <h4 id='title'>Service Provider Details</h4></InputLabel>    
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


export default Table