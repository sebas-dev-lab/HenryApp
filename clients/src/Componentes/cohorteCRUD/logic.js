import React,{useState,useEffect} from 'react';
import View from './view'
import axios from 'axios'


function Crud() {
  
  const [Rows, setRows] = useState([])
  
  
  function traerCohorte(){
    axios.get('http://localhost:3001/cohort/all').then(res=>{
      const filas = res.data.map((data)=>{
        return {
          name:data.name,
          id:data.id
        }
      })
      return filas 
    }).then((data)=>{
      setRows(data)
    })
  }
  
  

  useEffect(()=>{
    traerCohorte()
   // console.log(Rows)
  },[])




  return (
    <div>
      <View data={Rows}/>
      
    </div>
  )
}

export default Crud