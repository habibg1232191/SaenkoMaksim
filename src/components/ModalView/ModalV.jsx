import { useDispatch } from "react-redux"
import { ChangeModalViewOpen } from "../../store/consReducer"
import "./ModalV.css"

export function ModalView({state}){

    const dispatch = useDispatch()


    return(
        <div className="overlay" >
            <div className= {state ? "Modal green" : "Modal r"} >
                <p>{state ? "Письмо успешно отправлено!" : <p style={{textAlign:"center"}}>Не удалось отправить письмо.<br/>Попробуйте позже.</p>}</p>
                <button onClick={() => dispatch(ChangeModalViewOpen())} className= {state ? "button" : "B"}>Вернуться назад</button>
            </div>
        </div>)
}