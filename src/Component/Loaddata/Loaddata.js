import React, { useEffect, useState } from 'react';
import Fakedata from '../Fakedata';
import ShowData from './ShowData';
const Loaddata = () => {
    const[loaddata,setdata]=useState()
    useEffect(()=>{
        setdata(Fakedata)
    },[])
    return (
        <div>
          <table className="table-striped" style={{width: "100%"}}>
              <thead>
                  <tr>
                      <th>Module Name</th>
                      <th>Activity Name</th>
                      <th>Create</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Approve</th>
                  </tr>
                  </thead>
                  {
                      loaddata?.map(data=>
                          <ShowData data={data}></ShowData>
                      )
                  }
          </table>
        </div>
    );
};

export default Loaddata;