import HijoUno from './components/HijoUno';
import HijoDos from './components/HijoDos';
import HijoTres from './components/HijoTres';
import CompPadre from './context/datosContext';

function App() {

//? Podemos enviarles datos a nuestro nieto mediante el transpaso de Padre a Hijo y de Hijo a Nieto con PROPS

//* Creamos la variable datos y le pasamos al hijo : datos={datosNieto}

//? CONTEXTO: si queremos entender que es contexto nos permite hacer valores globales en terminos de js, valores que son accesibles desde donde yo quiera, estos son valores que lo tendran y veran los componentes que yo quiera.
  return (
    <div>
       <CompPadre>
        <div>
          <HijoUno> 
  {/*//* Para pasar data/informacion al hijo tenemos que pasarles desde el Padre al hijo */}
            <h2>HIJO UNO</h2>
            <p>Hola desde App a HijoUno</p>
          </HijoUno>
          <HijoDos/>
        </div>
    </CompPadre>
          <HijoTres/> {/*//*si quiero dejar afuera algun componente se puede */}
    </div>
  )
}

export default App;
