import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Terms: React.FC = () => {
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
            <HiOutlineDocumentText className="page-icon" />
            <h1>Termos de Uso</h1>
          </div>
          
          <div className="legal-container">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a plataforma zobot.top, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
              O zobot.top é uma plataforma que permite a criação de agentes de IA para atendimento via WhatsApp. Nossos serviços incluem, mas não se limitam a, configuração de agentes de IA, integração com WhatsApp, gerenciamento de base de conhecimento e agendamento automático.
            </p>

            <h2>3. Contas de Usuário</h2>
            <p>
              Para utilizar nossos serviços, você precisará criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorrerem em sua conta. Você concorda em notificar imediatamente o zobot.top sobre qualquer uso não autorizado de sua conta.
            </p>

            <h2>4. Uso Aceitável</h2>
            <p>
              Você concorda em utilizar o zobot.top apenas para fins legais e de acordo com estes termos. Você não deve:
            </p>
            <ul>
              <li>Utilizar o serviço para enviar spam ou mensagens não solicitadas</li>
              <li>Violar quaisquer leis ou regulamentos aplicáveis</li>
              <li>Interferir ou interromper a integridade ou o desempenho do serviço</li>
              <li>Tentar obter acesso não autorizado ao serviço ou sistemas relacionados</li>
              <li>Utilizar o serviço para armazenar ou transmitir conteúdo ilegal, difamatório, ou que viole direitos de terceiros</li>
            </ul>

            <h2>5. Propriedade Intelectual</h2>
            <p>
              O conteúdo, recursos e funcionalidades do zobot.top, incluindo mas não se limitando a textos, gráficos, logotipos, ícones e imagens, são propriedade do zobot.top e estão protegidos por leis de direitos autorais e propriedade intelectual.
            </p>

            <h2>6. Limitação de Responsabilidade</h2>
            <p>
              O zobot.top não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do uso ou da incapacidade de usar o serviço.
            </p>

            <h2>7. Modificações do Serviço e dos Termos</h2>
            <p>
              O zobot.top reserva-se o direito de modificar ou descontinuar, temporária ou permanentemente, o serviço ou qualquer parte dele, com ou sem aviso prévio. Também podemos atualizar estes termos de uso a qualquer momento. Continuando a acessar ou utilizar nosso serviço após tais alterações, você concorda em estar vinculado aos termos revisados.
            </p>

            <h2>8. Lei Aplicável</h2>
            <p>
              Estes termos serão regidos e interpretados de acordo com as leis do Brasil, independentemente de seus conflitos de princípios legais.
            </p>

            <h2>9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do nosso site.
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

export default Terms;
