import React,{useState,useEffect} from 'react';
import View from './view'
import axios from 'axios'


function Crud() {
  
  const [Rows, setRows] = useState([])
  
  
  function traerCohorte(){
    axios.get('http://localhost:3001/cohort/all').then(res=>{
      console.log(res.data)
      const filas = res.data.map((data)=>{
        return {
          name:data.name,
          id:data._id,
          date:data.startDate
        }
      })
      return filas 
    }).then((data)=>{
      setRows(data)
    })
  }
  
  const editarCohorte = (name, data)=>{
    axios.put(`http://localhost:3001/cohort/${name}`,data).then((res)=>{
    console.log(res.data)
    })
  }
  

  useEffect(()=>{
    traerCohorte()
   // console.log(Rows)
  },[])




  return (
    <div>
      <View data={Rows} edit={editarCohorte}/>      
    </div>
  )
}

export default Crud