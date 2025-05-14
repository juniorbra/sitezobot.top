import React from "react";
import { Link } from "react-router-dom";
import { 
  HiOutlineCog6Tooth, 
  HiOutlineChatBubbleBottomCenterText, 
  HiOutlineCalendarDays, 
  HiOutlineSquare3Stack3D, 
  HiOutlineAdjustmentsHorizontal, 
  HiOutlineQrCode,
  HiOutlineQuestionMarkCircle
} from "react-icons/hi2";

const Home: React.FC = () => {
  return (
    <>
      {/* Header/Navigation */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <img src="/zobot-logo-rosa2025.png" alt="Zobot.top" />
          </div>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => {
              const navLinks = document.querySelector('.nav-links');
              navLinks?.classList.toggle('active');
            }}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <nav className="nav-links">
            <a href="#features" onClick={() => document.querySelector('.nav-links')?.classList.remove('active')}>Funcionalidades</a>
            <a href="#steps" onClick={() => document.querySelector('.nav-links')?.classList.remove('active')}>Como Configurar</a>
            <a href="#pricing" onClick={() => document.querySelector('.nav-links')?.classList.remove('active')}>Preço</a>
            <a href="#faq" onClick={() => document.querySelector('.nav-links')?.classList.remove('active')}>FAQ</a>
            <a href="https://meu.zobot.top/login" target="_blank" rel="noopener noreferrer" className="nav-login-btn">Login</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Crie Agentes de IA Inteligentes, Conectados e Prontos para Atender no WhatsApp</h1>
          <div className="video-container">
            {/* Substitua o src pelo vídeo real depois */}
            <video width="640" height="360" controls poster="/vite.svg">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
          <h2 className="subheadline">
            Configure, personalize e publique seu agente com controle total – da base de conhecimento ao agendamento automático
          </h2>
          <div style={{ marginTop: "32px" }}>
            <a href="https://meu.zobot.top/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Começar Agora</a>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="features" id="features">
          <h2 className="section-title">Funcionalidades</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineCog6Tooth />
              </div>
              <h3 className="feature-title">Configuração Flexível da IA</h3>
              <p className="feature-description">
                Escolha entre diferentes modelos de IA para personalizar seu agente de acordo com suas necessidades específicas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineChatBubbleBottomCenterText />
              </div>
              <h3 className="feature-title">Assistente de Prompt Inteligente</h3>
              <p className="feature-description">
                Nosso assistente de prompt com IA garante as instruções mais eficientes para o seu agente, otimizando suas respostas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineCalendarDays />
              </div>
              <h3 className="feature-title">Agendamento Integrado</h3>
              <p className="feature-description">
                Integração perfeita com o Google Calendar para gerenciar compromissos e agendamentos automaticamente.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineSquare3Stack3D />
              </div>
              <h3 className="feature-title">Base de Conhecimento Dinâmica</h3>
              <p className="feature-description">
                Alimente seu agente com informações personalizadas da sua empresa para respostas precisas e contextualizadas.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineAdjustmentsHorizontal />
              </div>
              <h3 className="feature-title">Controles Avançados</h3>
              <p className="feature-description">
                Ajuste temperatura da IA, tokens, janela de contexto, pausas inteligentes, e muito mais para uma experiência humanizada.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <HiOutlineQrCode />
              </div>
              <h3 className="feature-title">Conexão Direta com WhatsApp</h3>
              <p className="feature-description">
                Integração simples e rápida com o WhatsApp através de QR Code, sem necessidade de configurações complexas.
              </p>
            </div>
          </div>
        </section>

        {/* Configurações */}
        <section className="steps" id="steps">
          <h2 className="section-title">Como Configurar Seu Agente</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Nomeie seu agente</h3>
                <p className="step-description">Dê um nome e descrição para o seu agente, definindo sua identidade e propósito.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Escolha o modelo de IA</h3>
                <p className="step-description">Selecione a LLM e o modelo de IA que melhor se adequam às suas necessidades.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Configure o prompt</h3>
                <p className="step-description">Utilize o assistente de prompt com IA para gerar as melhores instruções para o seu agente.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Defina horários e agenda</h3>
                <p className="step-description">Configure os horários de funcionamento e vincule seu calendário para gestão automática da agenda.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Alimente a base de conhecimento</h3>
                <p className="step-description">Adicione informações da sua empresa para que o agente possa responder com precisão.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3 className="step-title">Ajuste configurações avançadas</h3>
                <p className="step-description">Personalize parâmetros avançados para humanizar ainda mais o seu agente de IA.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3 className="step-title">Conecte ao WhatsApp</h3>
                <p className="step-description">Gere o QR Code e conecte o seu WhatsApp para começar a atender imediatamente.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: "600", color: "var(--color-light)" }}>
              Pronto, o seu agente já está pronto para atender!
            </p>
            <a href="https://meu.zobot.top/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "16px" }}>Começar Agora</a>
          </div>
        </section>

        {/* Preço */}
        <section className="pricing" id="pricing">
          <div className="pricing-content">
            <h2 className="pricing-title">Oferta Especial</h2>
            <p className="pricing-subtitle">Transforme seu atendimento com IA por um preço acessível</p>
            
            <div className="price-tag">
              <span className="old-price">De R$197</span>
              <span className="new-price">por apenas R$97</span>
              <span className="price-note">Oferta por tempo limitado!</span>
            </div>
            
            <a href="https://meu.zobot.top/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "24px" }}>
              Garantir Meu Acesso
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">
                <HiOutlineQuestionMarkCircle />
                Como funciona a integração com o WhatsApp?
              </h3>
              <p className="faq-answer">
                A integração é feita via QR Code, de forma simples e rápida. Basta escanear o código com seu WhatsApp e o agente estará pronto para atender em minutos.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">
                <HiOutlineQuestionMarkCircle />
                Posso escolher diferentes modelos de IA?
              </h3>
              <p className="faq-answer">
                Sim, você pode escolher entre diferentes LLMs e ajustar as configurações avançadas para personalizar completamente o comportamento do seu agente.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">
                <HiOutlineQuestionMarkCircle />
                O agente pode gerenciar minha agenda?
              </h3>
              <p className="faq-answer">
                Sim, com a integração ao Google Calendar, o agente pode verificar disponibilidade, agendar compromissos e enviar lembretes automaticamente.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">
                <HiOutlineQuestionMarkCircle />
                Posso personalizar o conhecimento do agente?
              </h3>
              <p className="faq-answer">
                Sim, você pode alimentar a base de conhecimento com informações específicas da sua empresa, produtos, serviços e políticas para respostas precisas.
              </p>
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

export default Home;
