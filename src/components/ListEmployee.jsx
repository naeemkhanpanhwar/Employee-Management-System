import React from 'react'
import { useEffect, useState } from 'react';
import { DeleteEmployee, ListEmployees } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const ListEmployee = () => {
    
    const [employees, setEmployees] = useState([])

    function getAllEmployees() {
      ListEmployees().then((response) => {
        setEmployees(response.data);
      }).catch((error) => {
        console.error(error);
      });
    }
    useEffect(() => {
      getAllEmployees();
      }, [])

      const navigator = useNavigate();
      const { id } = useParams();

      function addNewEmployee() { 
        navigator('/add-employee');
      }

      function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
      }

      function deleteEmployee(id) { 
        console.log(id);
        DeleteEmployee(id).then((response) => {
          getAllEmployees();
        }).catch((error) => {
          console.error(error);
        });
        navigator(`/delete-employee/${id}`)
      }
      return (
        <div className="container mt-4">
          <h2 className="mb-3 text-center">Employees List</h2>
          <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.ID}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}
                      style={{marginRight: '10px'}}>Update</button>
                    <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default ListEmployee;