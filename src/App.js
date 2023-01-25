import * as Style from './Style'
import LogoNetflix from '../src/public/images/LogoNetflix.png'
import { BsGlobe2,BsChevronRight } from 'react-icons/bs';
import { AiFillCaretDown, AiOutlineRight } from 'react-icons/ai';

function App() {
  return (
    <Style.PageAll>

      <Style.AllTopBar>

        <Style.ContainerLeftTopBar>
          <img src={LogoNetflix} alt="" />
        </Style.ContainerLeftTopBar>

        <Style.ContainerRightTopBar>
          <Style.SelectLanguageTopBar>
            <BsGlobe2 fontSize="14px" />
            Português
            <AiFillCaretDown fontSize="15px" />
          </Style.SelectLanguageTopBar>
          <a href="https://www.netflix.com/br/login">Entrar</a>
        </Style.ContainerRightTopBar>

      </Style.AllTopBar>

      <Style.TitleMessageBody>
        Filmes, séries e muito mais.<br></br>Sem limites.
      </Style.TitleMessageBody>

      <Style.SubTitleMessageBody>
        Assista onde quiser. Cancele quando quiser.
      </Style.SubTitleMessageBody>

      <Style.TextMessageBody>
        Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
      </Style.TextMessageBody>

      <Style.BoxRegister>
        
        <Style.FieldEmail type="text" placeholder='Email'/>
        <Style.ButtonRegister type="button">Vamos lá <BsChevronRight fontSize="20px"/> </Style.ButtonRegister>

      </Style.BoxRegister>      

    </Style.PageAll>
  );
}

export default App;
