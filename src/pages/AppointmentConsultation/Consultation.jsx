import React, { useState } from "react";
import "./Consultation.css";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { ChangeModalViewOpen, ChangeService } from "../../store/consReducer";
import { ModalView } from "../../components/ModalView/ModalV";
import { emailjs } from "@emailjs/browser";


export function Consultation(){

    const clear = () =>{
        setEmail("")
        setFio("")
        setMessage("")
        setNumber("")

        setFormValid(false)

        setFioDirty(false)
        setNumberDirty(false)
        setMessageDirty(false)
        setNumberDirty(false)

        setFioError("ФИО не может быть пустым");
        setNumberError("Телефон не может быть пустым");
        setEmailError("Email не может быть пустым")
        setMessageError("Сообщение не может быть пустым")

    }



    const [fio,setFio] = React.useState("");
    const [number,setNumber] = React.useState("");
    const [email,setEmail] = React.useState("")
    const {Service,ModalViewOpen} = useSelector(state => state.Cons)
    const [message,setMessage] = React.useState('')

    const [fioDirty,setFioDirty] = React.useState(false);
    const [numberDirty,setNumberDirty] = React.useState(false);
    const [emailDirty,setEmailDirty] = React.useState(false)
    const [messageDirty,setMessageDirty] = React.useState(false)

    const [clickCheckBox,setClickCheckBox] = React.useState(false)

    const [fioError,setFioError] = React.useState("ФИО не может быть пустым");
    const [numberError,setNumberError] = React.useState("Телефон не может быть пустым");
    const [emailError,setEmailError] = React.useState("Email не может быть пустым")
    const [messageError,setMessageError] = React.useState("Сообщение не может быть пустым")

    const [formValid,setFormValid] = React.useState(false)
    const [mailSend,setMailSend] = React.useState(false)

    const dispatch = useDispatch()

    React.useEffect(()=>{
        if(fioError || numberError || emailError  || messageError || !clickCheckBox){
            setFormValid(false);
        }
        else{
            setFormValid(true);
        }
    },[fioError,numberError,emailError,messageError,clickCheckBox]);



    const sendFeedback = async () => {
        const dataToSend = {
            name: fio,
            phone: number,
            email: email,
            type: Service,
            message: message
        }
        const data = {
            service_id: 'service_hxnqae9',
            template_id: 'template_rlh1nxn',
            user_id: 'ZFaZc2gXsXnV50YJ3',
            template_params: dataToSend
        }

        clear()

        try {  
            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            setMailSend(true)
            dispatch(ChangeModalViewOpen())
        } catch (error) {  
            console.error('Error details:', error);  
            console.error('Error message:', error.message); 
            setMailSend(false)
            dispatch(ChangeModalViewOpen())
        }  
    }

    
    const S1 = useMediaQuery({ maxWidth: 1050 });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };


    const submitHandler = (e) =>{
        e.preventDefault();
        setFio(e.target.fio.value);
        setNumber(e.target.number.value);
        setEmail(e.target.email.value);
        dispatch(ChangeService(e.target.service.value));
        setMessage(e.target.message.value);

        try {
            sendFeedback(); 
        } catch (error) {
            console.log(error.message);
        }

    }

    const fioHandler = (e) => {
        setFio(e.target.value)
        if(e.target.value.length < 8){
            setFioError("ФИО не может быть меньше 8 символов") 
            if(!e.target.value){
                setFioError("ФИО не может быть пустым") 
            }
        }
        else{
            setFioError('')
        }
    }

    const numberHandler = (e) => {
        setNumber(e.target.value)
        var phoneno = /^\+?([7-8]{1})\)?([0-9]{10})$/;
        if(!phoneno.test(e.target.value)) {
            setNumberError("Неверный формат номера телефона")
            if(!e.target.value){
                setNumberError("Телефон не может быть пустым");   
            }
        }
        else{
            setNumberError("")
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        var regEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        if(!regEmail.test(e.target.value)) {
            setEmailError("Неверный формат email")
            if(!e.target.value){
                setEmailError("Email не может быть пустым");   
            }
        }
        else{
            setEmailError('')
        }
    }

    const serviceHandler = (e) => {
        dispatch(ChangeService(e.target.value))
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
        if(e.target.value.length < 50){
            setMessageError("Сообщение не может быть меньше 50 символов") 
            if(!e.target.value){
                setMessageError("Сообщение не может быть пустым") 
            }
        }
        else{
            setMessageError('')
        }
        
    }

    const blureHandler = (e) => {
        switch(e.target.name){
            case "email":
                setEmailDirty(true)
                break;
            case "fio":
                setFioDirty(true)
                break;
            case "number":
                setNumberDirty(true)
                break;
            case "message":
                setMessageDirty(true)
                break;
            default:
                break;
        }
    }


   

    return(
        <div className="MainDivC"> 
            <div className="containerC">
                <div className= {S1 ? "firstDivC1050 firstDivC" : "firstDivC"} >
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            <h1>Записаться на консультацию</h1>
                        </ScrollAnimation>
                    <img src = "img/13.png" alt = "юриспруденция картинка" />
                </div>

                {ModalViewOpen ? <ModalView state = {ModalViewOpen}/> : undefined}

                <form  className = {S1 ? "formC formC1050" : "formC" } onSubmit={submitHandler}>
                        <input 
                            required
                            type="text" 
                            name = "fio"
                            onBlur={e => blureHandler(e)}
                            placeholder="ФИО" 
                            value = {fio} 
                            onChange={e => fioHandler(e)}/><br/>

                        {(fioError&&fioDirty )&& <div className="Error">{fioError}</div>}

                        <input 
                            required
                            type= "text" 
                            name = "number"
                            placeholder="Телефон" 
                            value = {number} 
                            onBlur={e => blureHandler(e)}
                            onChange={e => numberHandler(e)}/><br/>

                        {(numberError&&numberDirty)&& <div className="Error">{numberError}</div>}

                        <input 
                            required
                            type="email" 
                            name = "email"
                            placeholder="Email" 
                            value = {email} 
                            onBlur={e => blureHandler(e)}
                            onChange={e => emailHandler(e)}/><br/>

                        {(emailError&&emailDirty )&& <div className="Error">{emailError}</div>}

                        <select name = "service" 
                                required value = {Service} 
                                onBlur={e => blureHandler(e)}
                                onChange={e => serviceHandler(e)} 
                                placeholder = "Выберите услугу">
                            <option value="Банкротство">Банкротство</option>
                            <option value="Арбитражные споры">Арбитражные споры</option>
                            <option value="Семейное право">Семейное право</option>
                            <option value="Договорное право">Договорное право</option>
                            <option value="Сопровождение сделок с недвижимостью">Сопровождение сделок с недвижимостью</option>
                        </select><br/>

                        <textarea
                            required
                            name = "message"
                            style = {{height:"25%",padding:"2%"}}
                            wrap = "soft"
                            placeholder="Опишите суть обращения" 
                            value = {message} 
                            onBlur={e => blureHandler(e)}
                            onChange={e => messageHandler(e)}/><br/>

                        {(messageError&&messageDirty )&& <div className="Error">{messageError}</div>}

                        <label style = {{backgroundColor:"white",height:"auto",border:"0px",width:"100%",fontWeight:"300",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <div>
                                <input type="checkbox" style = {{marginRight:"2vw"}} onClick={() => setClickCheckBox(!clickCheckBox)} value= {clickCheckBox} autocomplete="off"/>
                                Я согласен (-на) на обработку персональных данных  
                            </div> 
                            
                        </label>

                        <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",border:"0px solid black",alignItems:"center"}}>
                            <button className="ButoonCons" type = "submit" disabled = {!formValid}  >Отправить</button>
                            <div onClick={scrollToTop}  style = {{color:"blue",borderBottom:"1px solid blue"}}>Вернуться обратно</div>
                        </div>
                    </form>
                </div>
        </div>
    );
}