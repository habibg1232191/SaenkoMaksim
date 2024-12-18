import ScrollAnimation from "react-animate-on-scroll";
import "./Contacts.css"
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { ChangeOpenModal } from "../../store/consReducer";


export function Contacts(){

    const dispatch = useDispatch();
    const S1 = useMediaQuery({ maxWidth: 900 });

    return(
        <footer className="MainDivContacts">
            <div className="firstDivContacts">
                <div className= {S1 ? "DivContacts900" : "DivContacts"}>
                    <div style = {{width:"min-content"}}> 
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            <h1 className="H1">ГДЕ НАС НАЙТИ</h1>
                        </ScrollAnimation>
                    </div>

    
                    <div className="RowDiv">
                        <img src = "img/telefone.png" alt = "Номер телефона"/>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            <p><a href="tel:+79102109694">+7-910-210-96-94</a></p>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src="img/map.png" alt  = "карта" />
                        <ScrollAnimation animateIn="fadeIn" delay={400}>
                            <p>
                                <a href = "https://yandex.ru/maps/8/kursk/house/ulitsa_deyneki_5ye/Z08YdwNhT0QEQFtrfXtxeXplZg==/?ll=36.141613%2C51.708663&source=serp_navig&z=16.62">   
                                Российская Федерация, 305007, город Курск ул. Дейнеки д. 5е к.7</a>
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="RowDiv">
                        <img src = "img/email.png" alt = "Почта"/>
                        <ScrollAnimation animateIn="fadeIn" delay={500}>
                            <p><a href="mailto:Saenko-kursk@mail.ru">Saenko-kursk@mail.ru</a></p>
                        </ScrollAnimation>
                    </div>
                    <br/><br/>
                    <div className="RowDiv">
                        <a href="https://vk.com/id609725624" style = {{display:"flex",justifyContent:"center",alignItems:"center"}}  target="_blank">
                        <img src = "img/vk1.png" style={{width:"40px" ,height:"40px"}} alt = "вконтакте Саенко Максим"/>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            <p>Свяжитесь со мной в вк </p>
                        </ScrollAnimation></a>
                    </div>


                    
                </div>

                <div className= {S1 ? "Map900" : "Map"}>
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=36.141613%2C51.708663&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjQ2ODAwMBKUAdCg0L7RgdGB0LjRjywg0JrRg9GA0YHQuiwg0LzQuNC60YDQvtGA0LDQudC-0L0g0JrRg9GA0YHQutC-0LPQviDQl9Cw0LLQvtC00LAg0KLRgNCw0LrRgtC-0YDQvdGL0YUg0JfQsNC_0YfQsNGB0YLQtdC5LCDRg9C70LjRhtCwINCU0LXQudC90LXQutC4LCA10JUiCg0EkRBCFazVTkI%2C&z=16.54" 
                            width="100%" 
                            height="100%" 
                            frameborder="1" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            style={{border:0}} ></iframe>
                </div>
            </div>

            <div className="lastDivContacts">
                <p>Саенко Максим ©, 2024 </p> <p style = {{marginRight:"1vw",marginLeft:"1vw"}}>|</p> <p className="pol" onClick={() => dispatch(ChangeOpenModal())}>Политика конфиденциальности</p>
            </div>
        </footer>
    );
}