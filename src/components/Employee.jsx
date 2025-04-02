import React, { use, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddEmployee, GetEmployee, UpdateEmployee } from '../services/EmployeeService';

const Employee = () => {

   const[name, setName] = useState('')
   const[department, setDepartment] = useState('')
   const[phone, setPhone] = useState('')

   useEffect(() => {
    if (id) {
        GetEmployee(id).then((response) => {
            setName(response.data.name);
            setDepartment(response.data.department);
            setPhone(response.data.phone);
        }).catch((error) => {
            console.error(error);
        });
    }
   }, [])
   
   const navigator = useNavigate();
   const { id } = useParams();

   function handleName(event) {
    setName(event.target.value);
   }
   function handleDepartment(event) { 
    setDepartment(event.target.value);
   }

   function handleSubmit(event) {
    event.preventDefault();

    const employee = {name, department, phone};
    console.log(employee);

    if(id){
        UpdateEmployee(id, employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch((error) => {
            console.error(error);
        });
    }else{
        AddEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch((error) => {   
            console.error(error);
        })
    }
   }
   
   function pageTitle() {  
    if (id) {
        return <h2 className='text-center'>Update Employee</h2>
    } else {
        return <h2 className='text-center'>Add Employee</h2>
    }
   }

  return (
    <>
    <div className="container mt-3"> 
        <br/>
        <div className="row">  
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {pageTitle()}
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">Employee Name</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Name'
                                name='name'
                                value={name} 
                                className="form-control" 
                                onChange={handleName} />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Employee Department</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Department'
                                name='department'
                                value={department} 
                                className="form-control" 
                                onChange={handleDepartment} />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Employee Phone Number</label>
                            <input 
                                type="text" 
                                placeholder='Enter Employee Phone Number'
                                name='phone'
                                value={phone} 
                                className="form-control" 
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button className="btn btn-success mt-1" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>   
        </div>
    </div>
    </>
  )
}


export default Employee;