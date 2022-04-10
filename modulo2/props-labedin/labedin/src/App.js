import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5103AQHdj0KNT8CBSg/profile-displayphoto-shrink_100_100/0/1517573445657?e=2147483647&v=beta&t=XaD89_Uax460PykLqzMUpNsCtSErc_fmoWEblTAqJ_I" 
          nome="Sílvia Cristina Marques Viadanna" 
          descricao="Olá, eu sou a Sílvia. Sou estudante na Labenu. Já estudei JS, HTML e CSS. Agora estudando React"
        />
        
        <ImagemButton 
          imagem="https://media-exp1.licdn.com/dms/image/C5103AQHdj0KNT8CBSg/profile-displayphoto-shrink_100_100/0/1517573445657?e=2147483647&v=beta&t=XaD89_Uax460PykLqzMUpNsCtSErc_fmoWEblTAqJ_I"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://media-exp1.licdn.com/dms/image/C5103AQHdj0KNT8CBSg/profile-displayphoto-shrink_100_100/0/1517573445657?e=2147483647&v=beta&t=XaD89_Uax460PykLqzMUpNsCtSErc_fmoWEblTAqJ_I" 
          email="silviacristina@gmail.com" 
        
        />
               
      </div>

      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://media-exp1.licdn.com/dms/image/C5103AQHdj0KNT8CBSg/profile-displayphoto-shrink_100_100/0/1517573445657?e=2147483647&v=beta&t=XaD89_Uax460PykLqzMUpNsCtSErc_fmoWEblTAqJ_I" 
          
          endereco="Campinas, São Paulo, Brasil"
        />
               
      </div>





      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cmdrholambra.files.wordpress.com/2011/08/p8110949.jpg" 
          nome="Klaas Schoenmaker e Filhos" 
          descricao="Gerente Financeira" 
        />
        
        <CardGrande 
          imagem="https://www.paginarural.com.br/arquivos/noticias/2009_10/dsc07459.jpg" 
          nome="Cooperativa Holambra" 
          descricao="Gerente Comunicações" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
