import { MYINFO_ROUTE } from "../../utils/constants";
import "./MyInfo.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useMediaQuery } from "react-responsive";



export function MyInfo(){

    const S1 = useMediaQuery({ maxWidth: 992 });
    const S2 = useMediaQuery({ maxWidth: 620 });
    const S3 = useMediaQuery({ maxWidth: 500 });

    return(
    <div className="MainBlock" style = {{fontSize: S3 ? "12px" : S2 ? "14px" : S1 ? "16px" : "1.3em"}}>

        {S3 ?
        <div className= {"secondBlock"} style = {{width:"100vw",height:"auto"}}>
                <img style = {{objectFit:"cover"}} src="img/men.png" width={"100%"} height={"100%"} alt = "Юрист - Саенко Максим"/>
        </div> : undefined}

        <div className= {S3 ? "firstBlock450" : "firstBlock"} >
        <ScrollAnimation animateIn="fadeIn" >
            <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:"2vh",flexWrap: S1 ? "wrap" : "nowrap"}}>
                <h4 style = {{color:"white"}}>
                Юрист  высшей {S1 ? undefined  :<br/>}категории 
                </h4>
                <h1 style = {{color:"gold",marginTop:"1vh"}}>
                    Саенко Максим
                </h1>
            </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeIn" >
            <p style={{color:"#898989",fontWeight:"400"}}>
            <span className="g"> Саенко Максим Леонидович</span> - опытный юрист с глубокими знаниями в области права. 
            Он получил образование в ЧОУ ВО «Санкт-Петербургский университет технологий 
            управления и экономики», где завершил обучение с квалификацией <span className="g">Магистр по программе юриспруденция.</span>
            <br/><br/>
            С <span className="g"> 2006 </span>года Максим активно занимается юридической деятельностью, приобретая ценнейший опыт 
            в различных областях права.
            Саенко Максим Леонидович – это <span className="g"> профессионал </span>, который стремится обеспечить своим клиентам надежную правовую защиту и высокое качество услуг.
            <br/><br/>
            <span className="g"> 
                Гарантирует реалистическую оценку перспективам дела и защиту ваших прав.
            </span>
            </p>
        </ScrollAnimation>
        </div>

        {S3 ? undefined :

        <div className= {"secondBlock"} >
                <img style = {{objectFit:"cover"}} src="img/men.png" width={"100%"} height={"100%"} alt = "Юрист - Саенко Максим" />
        </div>}


        
        
    </div>
    );
}