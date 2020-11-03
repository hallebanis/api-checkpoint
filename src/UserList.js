import {useState,useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import UserDetails from './UserDetails'
import axios from 'axios'


const UserList=()=>{
    const [listOfUser,setListOfUser]=useState([])
    const [error,setError]=useState(null)

    useEffect(()=>
  {
    axios.get('https://jsonplaceholder.typicode.com/users')
 .then((response) =>{
   setListOfUser(response.data)
 })
 .catch(function (error) {
  alert(error);
  setError(error)
 })
  }
  ,[])
 
  const handleView=()=>{
        console.log(listOfUser)
      return(listOfUser.map(elm=>{console.log(elm) ;
        return(<UserDetails key={elm.id} user={elm}/>)}))
      
  }

    return(
        <Accordion>
            {handleView()}
        </Accordion>
    )
};
export default UserList;