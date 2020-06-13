import React, {useState} from 'react';
import useStickyState from '../useStickyState';
import styled from 'styled-components';
import '../generalStyle.css';

const  HouseRentForm = ({data}) => {
  // here is where we keep track of the todo list
  const [apts,updateApts] = useStickyState(data,"HouseRentForm")

  // here is where we keep track of the values in the form
  const [name,setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [bedroom, setBedroom] = useState("")
  const [bathroom, setBathroom] = useState("")
  const [price, setPrice] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [comment, setComment] = useState("")

  // this is the action when the submit button is pushed
  const addApt = (event) => {
    console.log('adding apartment')
    console.dir(event)
    const apt = {id:apts.length, name:name, phone:phone, email:email,
                  address:address, bedroom:bedroom, bathroom:bathroom, price:price,
                  startDate:startDate, endDate:endDate, comment:comment,
                  complete:false}
    updateApts(apts.concat(apt))
    document.getElementById('name').value = ""
    setName("")
    document.getElementById('phone').value = ""
    setPhone("")
    document.getElementById('email').value = ""
    setEmail("")
    document.getElementById('address').value = ""
    setAddress("")
    document.getElementById('bedroom').value = ""
    setBedroom("")
    document.getElementById('bathroom').value = ""
    setBathroom("")
    document.getElementById('price').value = ""
    setPrice("")
    document.getElementById('startDate').value = ""
    setStartDate("")
    document.getElementById('endDate').value = ""
    setEndDate("")
    document.getElementById('comment').value = ""
    setComment("")

    event.preventDefault()
  }

  // these are called when the form elements are modified
  const updateName = event=> setName(event.target.value)
  const updatePhone = event => setPhone(event.target.value)
  const updateEmail = event => setEmail(event.target.value)
  const updateAddress = event => setAddress(event.target.value)
  const updateBedroom = event => setBedroom(event.target.value)
  const updateBathroom = event => setBathroom(event.target.value)
  const updatePrice = event => setPrice(event.target.value)
  const updateStartDate = event => setStartDate(event.target.value)
  const updateEndDate = event => setEndDate(event.target.value)
  const updateComment = event => setComment(event.target.value)

  // handle the action when an apt is clicked/completed
  let flipApt = apt => (event) => {
    apt.complete=!apt.complete
    let newApts = apts.map(x => (x.id===apt.id?apt:x))
    updateApts(newApts)
  }

  const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
   <>
     <ul>
       <CardsWrapper>
       {apts
         .filter(apt=>!apt.complete)
         .map(apt => (
           <div className='card'>
             <input className = 'close'
                    type="button"
                    onClick={flipApt(apt)}
                    value="close" />
             <img src={"no pic found"} />
             <div className='card-body'>
               <h2 className='card-title'>{`${apt.address}`}</h2>
             </div>
             <ul className='list-group list-group-flush'>
               <li className='list-group-item'>{<p>Contact Info:<br />{apt.name}<br />{apt.phone}<br />{apt.email}</p>}</li>
               <li className='list-group-item'>{`Housing Layout: ${apt.bedroom}b${apt.bathroom}b`}</li>
               <li className='list-group-item'>{`Lease Term: ${apt.startDate} - ${apt.endDate}`}</li>
               <li className='list-group-item'>{`Expected Price: $${apt.price} per month`}</li>
               <li className='list-group-item'>{`Extra Description: ${apt.comment}`}</li>
             </ul>
           </div>
         ))
       }
       </CardsWrapper>
     </ul>
     <form onSubmit={addApt}>
       <h2>House Rent Form</h2>
       renter name: <input type="text" id="name" name="renter name" onChange={updateName}/><br />
       renter phone number: <input type="text" id="phone" name="renter phone number" onChange={updatePhone} /><br />
       renter email address: <input type="email" id="email" name="renter email address" onChange={updateEmail} /><br />
       house address: <input type="text" id="address" name="house address" onChange={updateAddress} /><br />
       number of bedrooms: <input type="number" id="bedroom" name="number of bedrooms" onChange={updateBedroom} /><br />
       number of bathrooms: <input type="number" id="bathroom" name="number of bathrooms" onChange={updateBathroom} /><br />
       expected $ per month: <input type="number" id="price" name="expected $ per month" onChange={updatePrice} /><br />
       rental date starting from: <input type="text" id="startDate" name="rental date starting from" onChange={updateStartDate} /><br />
       ental date ending at: <input type="text" id="endDate" name="rental date ending at" onChange={updateEndDate} /><br />
       other comments you want to add: <input type="text" id="comment" name="other comments you want to add" onChange={updateComment} /><br />
       <input type="submit" value="submit" />
     </form>
   </>
 );
}

export default HouseRentForm;
