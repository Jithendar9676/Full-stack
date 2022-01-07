import React, { useEffect, useState } from 'react'

function Curd() {
    var [data,setData]=useState([])
    var [id,setid]=useState("")
    var [Class,setClass]=useState()
    var [name,setname]=useState()
    var [totalgpa,settotalgpa]=useState()
    var [gpa,setgpa]=useState()

    useEffect(()=>{
        fetch('http://localhost:3004/student').then((res)=>{
            res.json().then((result)=>{
                console.log(result)
                setData(result)
    
            })
    
        })
    },[])

    function insertdata(){
        var items={id,Class,name,totalgpa,gpa}
        fetch(`http://localhost:3004/student`,{
            method:'post',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(items)


        })
        
    }
    return (
  

        <>
           <h1>Dispaly all the date from api</h1> 
           <br/>
           <table border="5px">
               <tr>
                   <th>ID</th>

                   <th>CLASS</th>
                   <th>NAME</th>
                   <th>TOTAL GPA</th>
                   <th>GPA</th>
                   <th>EDIT</th>
                   <th>DELETE</th>
               </tr>
          

           {
               data.map((student)=><tr>
                   <td>{student.id}</td>
                   <td>{student.Class}</td>
                   <td>{student.name}</td>
                   <td>{student.totalgpa}</td>
                   <td>{student.gpa}</td>
                   <td><button>edit</button></td>
                   <td><button>delete</button></td>
               </tr>)
            


           }
           </table>
           <h1>Insert Data</h1>
           <label htmlFor=''>id</label>
           <input type="number" value={id} onChange={(e)=>{setid(e.target.value)}}/>
           <label htmlFor=''>Class</label>
           <input type="text" value={Class} onChange={(e)=>{setClass(e.target.value)}} />
           <label htmlFor=''>name</label>
           <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
           <label htmlFor=''>totalgpa</label>
           <input type="number" value={totalgpa} onChange={(e)=>{settotalgpa(e.target.value)}} />
           <label htmlFor=''>gpa</label>
           <input type="number" value={gpa} onChange={(e)=>{setgpa(e.target.value)}}/>
           <button onClick={()=>{insertdata()}}>submit</button>
        </>

        
    )
}

export default Curd
