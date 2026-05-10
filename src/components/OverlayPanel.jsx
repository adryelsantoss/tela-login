import styled from "styled-components";

const OverlayPanelWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
  z-index: 3;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SlidingOverlay = styled.div`
  position: relative;
  left: -100%;
  width: 200%;
  height: 100%;
  display: flex;
  background: linear-gradient(135deg, #2f2f2f9c 0%, #060605 100%);
  transform: ${({ $isSignUpActive }) =>
    $isSignUpActive ? "translateX(50%)" : "translateX(0)"};
  transition: transform 0.6s ease-in-out;
`;

const OverlaySide = styled.div`
  width: 50%;
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const OverlayContent = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  color: #ffffff;
`;

const OverlayTitle = styled.h2`
  font-size: 2.2rem;
  line-height: 1.1;
`;

const OverlayDescription = styled.p`
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const OverlayActionButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }
`;

function OverlayPanel({ isSignUpActive, setIsSignUpActive }) {
  return (
    <OverlayPanelWrapper>
      <SlidingOverlay $isSignUpActive={isSignUpActive}>
        <OverlaySide>
          <OverlayContent>
            <OverlayTitle>Bem-vindo de volta!</OverlayTitle>
            <OverlayDescription>
              Já tem uma conta? Faça login e continue de onde parou.
            </OverlayDescription>
            <OverlayActionButton
              type="button"
              onClick={() => setIsSignUpActive(false)}
            >
              Entrar
            </OverlayActionButton>
          </OverlayContent>
        </OverlaySide>

        <OverlaySide>
          <OverlayContent>
            <OverlayTitle>Olá, amigo!</OverlayTitle>
            <OverlayDescription>
              Ainda não tem uma conta? Cadastre-se e comece agora.
            </OverlayDescription>
            <OverlayActionButton
              type="button"
              onClick={() => setIsSignUpActive(true)}
            >
              Criar conta
            </OverlayActionButton>
          </OverlayContent>
        </OverlaySide>
      </SlidingOverlay>
    </OverlayPanelWrapper>
  );
}

export default OverlayPanel;


