import React from 'react';
import userPhoto from '../../assets/images/preloader.gif'
import photo_men2 from '../../assets/images/men2.png'
import Axios from 'axios';

/*import s from './News.module.css';*/

const Friends = () => { 
    //debugger
  // const getData =()=>{
  //  Axios.get('http://localhost:5000/server/dataBase')
  //  .then (response => {return response.dataB.name    })
 const getBase=()=>{
//debugger
const instance = Axios.create ({
    withCredentials : true,
    baseURL : `http://localhost:5000`,
 //   baseURL : `https://joke-api-strict-cors.appspot.com/jokes/random`,
 //   headers: {'API-Key':'2c9de507f2c54aa1' }
 headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  }

}) 

  //debugger
    instance.get('/auth') 
 // Axios.get('http://localhost:5000/dataBase')
      .then (response =>  {  return  response.random  }) 
             
        } 
       
    return (    
    
        <div>  Friends  
            <div> 
                    <button onClick={getBase} > DataBase</button> 
                
            </div>
        <div><input type="text" placeholder={'Enter your Password'}/></div>
        <div><button> Save</button></div>
                
        <textarea name="заполните страницу" placeholder={'Enter text'} ></textarea>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn-qDyY-WAKn01oK4J6GpTIbXwkBoICZnAdg&usqp=CAU' 
            width={200} alt='net1' />
            <div>
            <div>< input type="file"  width={150} /> </div>
                <img src={ photo_men2} width={150}  alt='net2' />
                
                < img  src={userPhoto} width={150} alt="net33" />
            </div>
            <img src={userPhoto} width={200} alt="net3"/>
            <div>
     {/*       return  response.data             )
           
    const instance = Axios.create ({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': '8nqK2b_StWRrxcv'}
})
export const usersAPI = {
    getUsers (curentPage=1, pageSize=10) {
return  instance.get(`users?page=${curentPage}&count=${pageSize}`)
  .then(response =>  {
        return  response.data  })
  },
                
           */}
            </div>
        </div>

    </div>)
}
export default Friends