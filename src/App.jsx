
import styled from 'styled-components';
import { Navbar} from './components';
import { Myroutes } from './routes/';

const App = () => {
  return (
    <Contenedor>
      <Navbar/>
          <Myroutes/>    
         
    </Contenedor>
  )
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    /* display: grid; */
    /* gap: 20px; */
    /* dos columnas */
    /* grid-template-columns: 2fr 1fr; */
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 


export default App;