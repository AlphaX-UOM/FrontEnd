import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './userdetails.css';
import { DoubleArrowSharp } from '@material-ui/icons';
const URL = 'https://alphax-api.azurewebsites.net/api/users/'

const Table = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['First Name', 'Last Name', 'dob', 'email', 'address', 'contact', 'role']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id, firstName, lastName, dob, email, address, contact, role }) => {
            return (
                <tr key={id}>

                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{dob}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{contact}</td>
                    <td>{role}</td>

                </tr>
            )
        })
    }

    return (
        <>
            <h4 id='title'>User Details</h4>
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