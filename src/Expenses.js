import React from 'react'
import {useState} from 'react'

const ExpenseTracker =() => {

    const [expenses,setExpenses] = useState([]);
    const [date, setDate]=useState('')
    const [description , setDescription]=useState('');
    const [amount, setAmount] =useState('');
    
    const currentDate=()=>{
        const newDate=new Date();
        const year = newDate.getFullYear();
        let month=newDate.getMonth()+1;
        let day = newDate.getDate();

        if (month < 10) {
            month = `0${month}`;
          }
          if (day < 10) {
            day = `0${day}`;
          }
      
          return `${year}-${month}-${day}`;
          
        }
    const handleCreate =() =>{
        
        if(description!=='' && amount!=='' && date!==""){
        setExpenses([...expenses,{purpose:description,amount:parseFloat(amount),date:date}]);
        setDescription('');
        setDate('')
        setAmount('')
        }
    }

    const handleDelete =(index) =>{
        const updateExpense = [...expenses];
        updateExpense.splice(index, 1);
        setExpenses(updateExpense);
    }
    
  return (
    <div className='container'>
        <h1>Expense Tracker</h1>
        <hr></hr>
        
        <div className='inputData'>
            <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} max={currentDate()} placeholder='Enter Date'></input><br></br>
            <label>Category: </label>
            <select value={description} onChange={(e)=>setDescription(e.target.value)} required>
                <option value='' disabled>Select</option>
                <option value='Travel'>Travel</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='Food'>Food</option>
                <option value='Other'>Other</option>
            </select>
            <br></br>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter cost' required></input>
            <br></br>

            <button className='btn btn-primary' onClick={()=>handleCreate()}>Submit</button>
        </div>
        <br></br>

        {expenses.length>0 && (
          
            <div className='summary'>
              <table className='table table-bordered table-hover'>
                <tr>
                  <th>S.No</th>
                  <th>Expense</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Remove</th>
                </tr>
                {expenses.map((item,index)=>(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.purpose}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td><button className='btn btn-danger' onClick={()=>handleDelete(index)}>Delete</button></td>
                </tr>
                ))}
<h1>Total: {expenses.reduce((acc,item)=> acc+item.amount,0)}</h1>
              </table>
              </div>

       )}
    </div>
        
  )
}

export default ExpenseTracker;