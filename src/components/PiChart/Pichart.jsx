

import React, { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";





const Pichart = () => {


    const data =[
        {
            id:1,
            name:"assignment1",
            mark:60
            
            
        },
        {
            id:2,
            name:"assignment2",
            mark:60
        },
        {
            id:3,
            name:"assignment3",
            mark:60
        },
        {
            id:4,
            name:"assignment4",
            mark:60
        },
        {
            id:5,
            name:"assignment5",
            mark: 60
        },
        {
            id:6,
            name:"assignment6",
            mark:60
        },
        {
            id:7,
            name:"assignment7",
            mark:60
        }
    ]
    ;
      //console.log(assingment)
      //console.log("da",data)
    
    return (
        <div className="w-full md:px-8 mt-28">
            <h1>All assignment Mark :</h1>
            <PieChart width={360} height={350}>
      <Pie
        dataKey="mark"
        startAngle={300}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
        </div>
    );
};

export default Pichart;


