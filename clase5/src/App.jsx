import ProfileCard from "./ProfileCard"

import AlexaImg from "./img/alexa.png"
import CortanaImg from "./img/cortana.png"
import SiriImg from "./img/siri.png"

function App(){
    return(
        <div>
            <h1>Asistentes</h1>
            <ProfileCard titulo="Alexa" arroba="@alexa88" img={AlexaImg}/> 
            <ProfileCard titulo="Siri" arroba="@SiriApple" img={SiriImg}/> 
            <ProfileCard titulo="Cortana" arroba="@cortana123" img={CortanaImg}/> 
        </div>
    )
}
//*titulo y arroba son props

//? para cambiar los componentes hijos se utiliza los props en el padre en este caso el padre es App y el hijo es ProfileCard

export default App;