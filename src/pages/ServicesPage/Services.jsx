import React, { useState } from "react";
import { Service } from "../../components/Service/Service";
import "./Services.css"
import { CONSULTATION_ROUTE } from "../../utils/constants";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export function Services(){

   const servicesArr = [{id:1,url:"img/service7.png",title:"Банкротство ",text:"Поможем вам решить вопросы связанные с банкротством."},
    {id:2,url:"img/service9.png",title:"Арбитражные споры",text:"Минимизируем ваши риски и обеспечим успешное разрешение спора."},
    {id:3,url:"img/service6.png",title:"Семейное право",text:"Поможем разобраться в юридических нюансах и добьёмся максимально благоприятного результата."},
    {id:4,url:"img/service2.png",title:"Договорное право",text:"Защитим ваши интересы и обеспечим надежную правовую основу для вашего бизнеса или личных сделок."},
    {id:6,url:"img/service8.png",title:"Сопровождение сделок",text:"Поможем вам в сопровождении сделок с недвижимостью."}
   ];

    const S1 = useMediaQuery({ maxWidth: 1200 });
    const S2 = useMediaQuery({ maxWidth: 992 });
    const S3 = useMediaQuery({ maxWidth: 500 });

    return(
        <div className="ServicesDiv">
            
            <h1 style = {{textAlign:S3 ? "center" :"start"}}>Мои услуги</h1>
            <div className="firstServiceBlock" >
                {servicesArr.map((e) => 
                    <Service  key = {e.id} Url = {e.url} Title={e.title} Text = {e.text}/>)}
            </div>
        </div>
    );
}