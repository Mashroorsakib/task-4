import React, { useEffect, useState } from 'react';
import "./Showdata.css";
import Fakedata from '../Fakedata';

const ShowData = (props) => {
    const [data,setdata]=useState({
        moduleName:"",
        activityName:"",
        isCreate:"",
        isView:"",
        isEdit:"",
        isDelete:"",
        isApprove:"",
        id:""
    })
 //   const { moduleName, activityName, isCreate, isView, isEdit, isDelete, isApprove,id} = props.data;
   useEffect(()=>{
          const user = {moduleName:props.data.moduleName,activityName:props.data.activityName,isCreate:props.data.isCreate,isView:props.data.isView,isEdit:props.data.isEdit,isDelete:props.data.isDelete,isApprove:props.data.isApprove}
          setdata(user)
        },[])
   
  
    
  
    return (
        <tbody>
        <tr>
            <td className="table-data">{data.moduleName }</td>
            <td className="table-data">{data.activityName }</td>
            <td className="table-data">{!data.isCreate ? <input  type="checkbox" id={props.data.id} />: "checked"}</td>
            <td className="table-data">{!data.isView ? <input  type="checkbox" id={props.data.id} />: "checked"}</td>
            <td className="table-data">{!data.isEdit ? <input  type="checkbox" id={props.data.id} />: "checked"}</td>
            <td className="table-data">{!data.isDelete ? <input  type="checkbox" id={props.data.id} name="vehicle1" value="Bike"/>: "checked"}</td>
            <td className="table-data">{!data.isApprove ? <input  type="checkbox" id={props.data.id} name="vehicle1" value="Bike"/>:"checked"}</td>
        </tr>
        </tbody>
    );
};

export default ShowData;