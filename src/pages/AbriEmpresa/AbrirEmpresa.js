import React from 'react';

import useStyles from './styles';
import b from "../../components/img/b.jpg"
function Home(){
  const classes = useStyles();
  return( 
   
  <div className={classes.root}>  
      <div className={classes.box}>
          <div className={classes.title}>
              <h1 >Como abrir uma empresa:</h1>
              <h1 className={classes.title3}>Principais fatores há se preocupar na hora de abrir sua empresa.</h1>
          </div>
          <img src={b} alt="" className={classes.img}/>
      </div>

      <div className={classes.text}>
       <h1 className={classes.title2}>1. Cadastro Nacional de Pessoa Jurídica (CNPJ)</h1>
       <p>
          Esse é o primeiro documento a ser pedido ao empresário e pode ser considerado a identidade da pessoa jurídica. É o cadastro da companhia no Ministério da Fazenda e Receita Federal, o qual fará com que ela tenha existência em âmbito nacional. Ele indica em qual segmento o negócio se inclui e quais serão os impostos devidos. Sem um CNPJ, a organização de fato não existe, portanto, é considerada ilegal.
          Antes de solicitá-lo, o primeiro passo é separar tudo que for necessário para começar o cadastro. Para cada tipo de empresa, a Receita federal exige uma lista de documentos, por exemplo:
          sociedade simples limitada: contrato social com Registro Civil das Pessoas Jurídicas (RCPJ);
          sociedade simples pura: contrato social com registro no RCPJ ou na OAB, caso seja uma sociedade constituída por advogados;
          microempreendedor individual (MEI): CPF, número do título de eleitor e número da última declaração do imposto de renda;
          sociedade anônima (S.A): estatuto e ata de assembleia de constituição, com registro na junta comercial (JC);
          empresário individual: requerimento de empresário com registro na Junta Comercial, referente à inscrição no órgão de registro;
          empresa individual de responsabilidade limitada (Eireli): ato de constituição registrado no RCPJ ou JC.
          Para tirar o CNPJ, é preciso ir à Receita Federal do município, com a identidade dos donos da empresa original e cópia em mãos, comprovante de residência, CPF, endereço onde o negócio vai exercer as atividades e contrato social. O valor vai variar conforme o período do ano e o ramo da empresa e deverá ser pago na hora da inscrição.
        </p>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyNJ4GzBdb1cgL7qr_Vh-HvZsht-O2tE-9w&usqp=CAU'} alt="Logic" HEIGHT="200px" className={classes.image}/>
        <h1 className={classes.title2}>2. Contrato Social</h1>
          <p>
            Na verdade, o Contrato Social é uma base e só será utilizado uma vez no registro do CNPJ. Trata-se de um acordo pactuado entre os sócios da companhia, que indica quem são os donos, o nome de registro da empresa, o capital inicial, a divisão das ações, a atribuição de cada dono no negócio e as demais informações relevantes.
            É importante que seja feito por um advogado qualificado. Também deve ser registrado em cartório e estar assinado pelos sócios, duas testemunhas e pelo profissional de advocacia.
          </p>
          <h1 className={classes.title2}>3. Registro na Junta Comercial</h1>
          <p>
            Esse é o primeiro passo para constituir uma empresa. Esse registro serve como um tipo de Certidão de Nascimento de pessoas jurídicas e é essencial para a emissão de outros documentos necessários para a formalização do negócio.
            Caso a empresa seja uma fabricante de produtos ou uma prestadora de serviços, deve estar registrada na junta comercial do município. Esse é um cadastro somente para comerciantes que desejam abrir um negócio, para que incidam os impostos devidos e, assim, ficar em dia e funcionar regularmente sem causar prejuízos aos cofres públicos e também aos consumidores. Existe fiscalização e é cobrado um valor anual para a manutenção do registro.
            Para isso, é necessário ir pessoalmente ao órgão responsável com o contrato social, os documentos dos sócios da empresa (juntamente com cópia autenticada em cartório) e o comprovante de endereço do local onde a instituição exercerá suas atividades. É importante ter em mente que, antes de fazer o pedido, averígue se o nome que pretende registrar já não existe ou se há alguma restrição à nomenclatura escolhida.
            Depois de receber o Número de Identificação do Registro de Empresa (NIRE), conhecido como comprovante de registro feito na Junta Comercial, dê entrada ao pedido de CNPJ do negócio. Esse procedimento é praticamente todo online, pelo portal da Receita Federal. Será preciso mandar somente alguns documentos requisitados, que podem ser enviados por correspondência ou pessoalmente, para a Secretaria da Receita Federal.
          </p>
          <img src={'https://www.vilage.com.br/blog/wp-content/uploads/2021/02/registro-de-marca-junta-comercial.jpg'} alt="Logic" HEIGHT="200px" className={classes.image}/>
          <h1 className={classes.title2}>4. Inscrição estadual</h1>
          <p>
              Todas as cidades do país precisam saber quantos e quem são seus comerciantes. Isso não serve somente para dados estatísticos, mas também para que o negócio funcione de forma correta e recolha de forma adequada os seus impostos. Caso a empresa não seja registrada, poderá sofrer graves consequências, como multas ou até o seu fechamento.
              Geralmente, essa solicitação é feita pela internet. Para isso, é necessário contar com o auxílio de um contador que seja autorizado e que tenha a senha de acesso para solicitar a inscrição.
              Além do pagamento da taxa, que vai variar de cidade para cidade, no ato do registro é necessário estar em posse de:
              uma cópia do contrato social da organização (devidamente assinado e registrado em cartório);
              documentos e comprovantes de endereço de todos os sócios;
              comprovante de endereço do estabelecimento;
              Documento único de Cadastro (DUC);
              número de cadastro fiscal do contador;
              documento que prove o direito de uso do imóvel;
              cópia do CNPJ, entre outros.
              Em alguns estados, a inscrição estadual pode ser requisitada após o pedido de alvará de funcionamento.
          </p>


          <h1 className={classes.title2}>5. Inscrição Municipal</h1>
          <p>
              Para as empresas que atuam com prestação de serviços, é preciso fazer o registro na prefeitura do município onde o estabelecimento se encontra. O processo varia conforma as regras de cada município. Por isso, antes de qualquer coisa é necessário verificar como funciona na sua cidade.
              O município quer saber a respeito de tudo que está em andamento e cobrar os impostos devidos, tendo em vista que é dessa forma que ele consegue manter os órgãos públicos em pleno funcionamento. Cada cidade tem regras diferentes sobre os documentos para a abertura de uma empresa, mas em regra, é cobrado o registro na Receita Federal, o contrato social da empresa e os documentos dos sócios do negócio.
          </p>


          <h1 className={classes.title2}>6. Alvará de funcionamento</h1>
          <p>

              Além da inscrição municipal, os estabelecimentos precisam de uma licença prévia do município para funcionar. Essa licença se trata do Alvará de funcionamento e localização. Ele deve ser solicitado na prefeitura e o processo para adquiri-lo vai depender da lei de cada cidade.
              Diversas secretarias podem estar envolvidas no processo de legalização da companhia, como Saúde, Planejamento, Meio Ambiente, Desenvolvimento Econômico, entre outros. Isso vai variar conforme a atividade exercida. As principais informações serão obtidas no momento que fizer a consulta de viabilidade.
              Entre os documentos necessários estão o formulário da prefeitura, cópia do CNPJ, consulta prévia de endereço aprovada, cópia do contrato social, laudos dos órgãos de vistoria, quando preciso, entre outros.
          </p>
          <img src={'https://crisviland.com.br/wp-content/uploads/2019/11/alvara-667x330.jpg'} alt="Logic" HEIGHT="200px" className={classes.image}/>

          <h1 className={classes.title2}>7. Alvará do Corpo de Bombeiros</h1>
          <p>
              As edificações e áreas que correm risco de incêndios devem obter o Alvará de Prevenção e Proteção Contra Incêndio (APPCI), emitido pelo Corpo de Bombeiro Militar do estado. Todos os pontos comerciais de um município devem cumprir as regras relativas às normas de segurança do espaço.
              Após a solicitação, o Corpo de Bombeiros fará uma avaliação do grau de risco da edificação. Para isso, é cobrada uma taxa de inscrição que será paga anualmente e, então, uma vistoria será realizada no local para que a autorização de funcionamento seja cedida.
          </p>
          <img src={'https://noticias.itapevi.sp.gov.br/wp-content/uploads/2020/11/2020-11-19-Corpo-de-Bombeiros-Felipe-Barros-4.jpg'} alt="Logic" HEIGHT="200px" className={classes.image}/>

          <h1 className={classes.title2}>8. Alvará da vigilância sanitária</h1>
          <p>
            As regras são mais rígidas para as empresas que trabalham com manuseio e armazenamento de alimentos. Por esse motivo, todas essas instituições precisam de uma autorização concedida pela vigilância sanitária, na qual também será cobrada uma taxa anual para funcionamento.
          </p>


          <h1 className={classes.title2}>9. Licença ambiental</h1>
          <p>
              Quando falamos dos documentos para abertura de empresa, o empreendedor deve conferir se a atividade exercida pelo seu negócio exige licenciamento expedido por órgãos ambientais. Além da indústria e dos fabricantes de cosméticos e de perfumaria, existem vários tipos de empresas que se enquadram nessa determinação. As regras são mais duras na fiscalização, dependendo do que a organização desenvolve no mercado, por exemplo: alimentos, produtos inflamáveis, entre outros.
          </p>
          <img src={'https://thumbs.jusbr.com/imgs.jusbr.com/publications/images/4550bd306b264768ffa715b2c7c08909'} alt="Logic" HEIGHT="200px" className={classes.image}/>

          <h1 className={classes.title2}>10. Cadastro na Previdência Social</h1>
          <p>
            Após a emissão do alvará de funcionamento, a organização está apta para operar. Contudo, ainda é preciso regularizar algumas etapas para o seu funcionamento correto. A primeira é fazer o cadastro na Previdência, que independe da companhia ter funcionários ou não. Para contratar colaboradores, é necessário cumprir com as obrigações trabalhistas.
            Mesmo que seja somente um funcionário ou um sócio, a empresa deve se cadastrar na Previdência Social e pagar os tributos devidos. Dessa forma, o represente precisa ir à agência da previdência da sua jurisdição e requisitar o cadastramento da instituição e seus responsáveis legais. O prazo para fazer esse cadastro é de até 30 dias depois do início das operações.
          </p>


          <h1 className={classes.title2}>11. Instrumentos fiscais</h1>
          <p>
            Agora resta somente tratar dos instrumentos fiscais para que a empresa entre em ação, será preciso pedir a autorização para a emissão das notas fiscais e autenticação de livros fiscais.
            Isso é realizado na prefeitura de cada município. Companhias que desejam se dedicar às atividades de comércio e indústria precisam ir à Secretaria de Estado da Fazenda. Depois que tudo estiver pronto e registrado, a organização pode começar a exercer suas atividades de maneira legal.
          </p>
      </div>
  </div>
      
        );
}
export default Home;