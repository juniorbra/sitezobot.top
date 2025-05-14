import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShieldCheck } from "react-icons/hi2";

const Privacy: React.FC = () => {
  return (
    <>
      {/* Header/Navigation */}
      <header className="header">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/zobot-logo-rosa2025.png" alt="Zobot.top" />
          </Link>
          <nav className="nav-links">
            <Link to="/">Voltar ao Início</Link>
            <a href="https://meu.zobot.top/login" target="_blank" rel="noopener noreferrer" className="nav-login-btn">Login</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="legal-content">
          <div className="page-header">
            <HiOutlineShieldCheck className="page-icon" />
            <h1>Política de Privacidade</h1>
          </div>
          
          <div className="legal-container">
            <h2>1. Introdução</h2>
            <p>
              A zobot.top está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso serviço.
            </p>

            <h2>2. Informações que Coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul>
              <li><strong>Informações de Conta:</strong> Nome, endereço de e-mail, senha e outras informações fornecidas durante o registro.</li>
              <li><strong>Informações de Uso:</strong> Dados sobre como você interage com nosso serviço, incluindo logs de acesso, atividades e preferências.</li>
              <li><strong>Informações do Dispositivo:</strong> Dados sobre o dispositivo que você usa para acessar nosso serviço, como tipo de dispositivo, sistema operacional e navegador.</li>
              <li><strong>Conteúdo do Usuário:</strong> Informações que você fornece para configurar seu agente de IA, incluindo base de conhecimento e configurações personalizadas.</li>
            </ul>

            <h2>3. Como Usamos Suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul>
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar e completar transações</li>
              <li>Enviar informações técnicas, atualizações e mensagens administrativas</li>
              <li>Responder a seus comentários e perguntas</li>
              <li>Monitorar e analisar tendências, uso e atividades relacionadas aos nossos serviços</li>
              <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
            </ul>

            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Podemos compartilhar suas informações nas seguintes circunstâncias:
            </p>
            <ul>
              <li><strong>Com Provedores de Serviços:</strong> Compartilhamos informações com fornecedores terceirizados que nos ajudam a operar, fornecer e melhorar nossos serviços.</li>
              <li><strong>Para Conformidade Legal:</strong> Podemos divulgar informações quando acreditamos, de boa fé, que a divulgação é necessária para cumprir uma obrigação legal ou proteger nossos direitos, sua segurança ou a segurança de outros.</li>
              <li><strong>Com Seu Consentimento:</strong> Podemos compartilhar informações com terceiros quando você nos der consentimento para fazê-lo.</li>
            </ul>

            <h2>5. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança projetadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não podemos garantir sua segurança absoluta.
            </p>

            <h2>6. Seus Direitos</h2>
            <p>
              Dependendo da sua localização, você pode ter certos direitos relacionados às suas informações pessoais, incluindo:
            </p>
            <ul>
              <li>Acessar e receber uma cópia das suas informações pessoais</li>
              <li>Retificar informações imprecisas</li>
              <li>Solicitar a exclusão de suas informações pessoais</li>
              <li>Opor-se ao processamento de suas informações pessoais</li>
              <li>Restringir o processamento de suas informações pessoais</li>
              <li>Portabilidade de dados</li>
            </ul>

            <h2>7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para fornecer os serviços solicitados e cumprir nossas obrigações legais. Quando não tivermos mais uma necessidade comercial legítima de processar suas informações pessoais, excluiremos ou anonimizaremos essas informações.
            </p>

            <h2>8. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e, se as alterações forem significativas, forneceremos um aviso mais proeminente.
            </p>

            <h2>9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do nosso site.
            </p>

            <div className="last-updated">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-logo">zobot.top</div>
          <div className="footer-links">
            <a href="https://meu.zobot.top/login" target="_blank" rel="noopener noreferrer">Login</a>
            <a href="https://youtube.com/@botvance" target="_blank" rel="noopener noreferrer">Canal no Youtube</a>
            <Link to="/termos">Termos de uso</Link>
            <Link to="/privacidade">Política de privacidade</Link>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} zobot.top - Todos os direitos reservados</p>
        </footer>
      </main>
    </>
  );
};

export default Privacy;
