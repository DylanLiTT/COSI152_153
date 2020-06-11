import React, {useState} from 'react';

const  HouseRentForm = ({data}) => {
  // here is where we keep track of the todo list
  const [items,updateItems] = useState(data)

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
  const addItem = (event) => {
    console.log('adding item ')
    console.dir(event)
    const item = {id:items.length, name:name, phone:phone, email:email,
                  address:address, bedroom:bedroom, bathroom:bathroom, price:price,
                  startDate:startDate, endDate:endDate, comment:comment,
                  complete:false}
    updateItems(items.concat(item))
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
  const updatePrice = event => setPhone(event.target.value)
  const updateStartDate = event => setStartDate(event.target.value)
  const updateEndDate = event => setEndDate(event.target.value)
  const updateComment = event => setComment(event.target.value)

  // handle the action when an item is clicked/completed
  let flipItem = item => (event) => {
    item.complete=!item.complete
    let newitems = items.map(x => (x.id===item.id?item:x))
    updateItems(newitems)
  }

  return (
   <>
     <h1> Rent House Form </h1>
     <ul>
       {items
          .filter(item=>!item.complete)
          .map(item => (

         <li key={item.id}>
           <input type="checkbox"
                  onChange={flipItem(item)}
                  name={"complete"+item.id}
                  value={!item.complete} />
                  {item.name} : {item.phone}
         </li>
       ))}
     </ul>
     <form onSubmit={addItem}>
       renter name: <input type="text" id="name" name="renter name" onChange={updateName}/><br />
       renter phone number: <input type="number" id="phone" name="renter phone number" onChange={updatePhone} /><br />
       renter email address: <input type="email" id="email" name="renter email address" onChange={updateEmail} /><br />
       house address: <input type="text" id="address" name="house address" onChange={updateAddress} /><br />
       number of bedrooms: <input type="number" id="bedroom" name="number of bedrooms" onChange={updateBedroom} /><br />
       number of bathrooms: <input type="number" id="bathroom" name="number of bathrooms" onChange={updateBathroom} /><br />
       expected $ per month: <input type="number" id="price" name="expected $ per month" onChange={updatePrice} /><br />
       rental date starting from: <input type="text" id="startDate" name="rental date starting from" onChange={updateStartDate} /><br />
       ental date ending at: <input type="text" id="endDate" name="rental date ending at" onChange={updateEndDate} /><br />
       other comments you want to add: <input type="text" id="comment" name="other comments you want to add" onChange={updateComment} /><br />
       <input type="submit" value="add item to housing rent" />
     </form>
   </>
 );
}

export default HouseRentForm;
