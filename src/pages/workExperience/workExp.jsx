import ScrollAnimation from "react-animate-on-scroll";
import "./workExp.css";
import { useMediaQuery } from "react-responsive";

export function WorkE(){

    const S1 = useMediaQuery({ maxWidth: 1200 });
    const S2 = useMediaQuery({ maxWidth: 992 });
    const S3 = useMediaQuery({ maxWidth: 700 });
    const S4 = useMediaQuery({ maxWidth: 500 });

    return(
        <div className="mainBlockYO" style = {{backgroundImage:"url(img/bacYO4.png)",backgroundSize: !S4 ? "100% 100%" : "auto",objectFit:"cover",height:"auto"}}>
            <div className= {S2 ? "firstBlockYO firstBlockYO992" : "firstBlockYO"} >
                <ScrollAnimation animateIn="fadeIn" delay={400}>
                    <h1>ЮРИДИЧЕСКАЯ ПОМОЩЬ</h1>{S4 ? <br/> : undefined}
                    <h1 >БОЛЕЕ <span style={{color:"gold"}}>15 ЛЕТ</span> ОПЫТА</h1>
                </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" delay={500}>
                        {S1 ? 
                            <h4 style = {{marginTop:"10vh"}}>Мы гордимся тем, что наша юридическая фирма предлагает <span style={{color:"gold"}}>первоклассные юридические услуги по доступным ценам  по всей стране.</span></h4>    
                        :
                        <h4>Мы гордимся тем, что наша юридическая фирма предлагает <span style={{color:"gold"}}>первоклассные юридические услуги по доступным ценам  по всей стране.</span>
                        <br/><br/>Наша цель — сделать <span style={{color:"gold"}}>качественную юридическую помощь</span> доступной для каждого клиента, независимо от его финансового положения.
                        </h4>
                        }
                    </ScrollAnimation>
            </div>

            {!S3 ? 
            <ScrollAnimation animateIn="fadeIn" delay={600}>
            <div className= {S1 ? "lastBlockYO lastBlockYO1200" : "lastBlockYO"}>
                
                <div className="elementYO">
                    <h1 style={{color:"gold"}}>-900-</h1>
                    <h5>Довольных клиентов</h5>
                </div>
                <div className="elementYO">
                    <h1 style={{color:"gold"}}>-672-</h1>
                    <h5>Успешных дела</h5>
                </div>
                <div className="elementYO">
                    <h1 style={{color:"gold"}}>-18-</h1>
                    <h5>Лет стажа</h5>
                </div>
            </div>
            </ScrollAnimation>:
            undefined
            }

        </div>
    );
}