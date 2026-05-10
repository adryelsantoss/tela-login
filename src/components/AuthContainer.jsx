import styled from "styled-components";
import LoginForm, { PrimaryButton } from "./LoginForm";
import OverlayPanel from "./OverlayPanel";
import RegisterForm from "./RegisterForm";

export const AuthWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const AuthCard = styled.section`
  position: relative;
  width: min(1040px, 100%);
  min-height: 680px;
  display: flex;
  background: ${({ theme }) => theme.colors.containerColor};
  border: 1px solid ${({ theme }) => theme.colors.containerBorderColor};
  border-radius: 32px;
    box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.75) inset,
    0 18px 40px rgba(17, 24, 39, 0.08);
 overflow: hidden;

  @media (max-width: 900px) {
    min-height: auto;
    flex-direction: column;
  }
    
`;

export const FormSection = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.25rem;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 2rem 1.4rem;
    transform: none;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  }
`;

const LoginSection = styled(FormSection)`
  left: 0;
  z-index: ${({ $isSignUpActive }) => ($isSignUpActive ? 1 : 2)};
  opacity: ${({ $isSignUpActive }) => ($isSignUpActive ? 0 : 1)};
  transform: ${({ $isSignUpActive }) =>
    $isSignUpActive ? "translateX(100%)" : "translateX(0)"};
`;

const RegisterSection = styled(FormSection)`
  left: 0;
  z-index: ${({ $isSignUpActive }) => ($isSignUpActive ? 2 : 1)};
  opacity: ${({ $isSignUpActive }) => ($isSignUpActive ? 1 : 0)};
  transform: ${({ $isSignUpActive }) =>
    $isSignUpActive ? "translateX(100%)" : "translateX(0)"};
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform: ${({ $isSignUpActive }) =>
    $isSignUpActive ? "translateX(-100%)" : "translateX(0)"};

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    height: auto;
    transform: none;
  }
`;

const MobileTogglePanel = styled.div`
  display: none;
  padding: 1.25rem 1.4rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: linear-gradient(
    180deg,
    rgba(204, 199, 193, 0.1) 0%,
    rgba(204, 199, 193, 0.02) 100%
  );

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
`;

const MobileToggleTitle = styled.h3`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.titleColor};
`;

const MobileToggleDescription = styled.p`
  color: ${({ theme }) => theme.colors.descriptionColor};
  line-height: 1.5;
`;

const GhostButton = styled(PrimaryButton)`
  max-width: 220px;
`;

function AuthContainer({ isSignUpActive, setIsSignUpActive }) {
  const mobileTitle = isSignUpActive
    ? "Bem-vindo de volta!"
    : "Olá, amigo!";
  const mobileDescription = isSignUpActive
    ? "Já tem uma conta? Faça login e continue de onde parou."
    : "Ainda não tem uma conta? Cadastre-se e comece agora.";
  const mobileButtonLabel = isSignUpActive ? "Entrar" : "Criar conta";

  return (
    <AuthWrapper>
      <AuthCard>
        <LoginSection
          $isSignUpActive={isSignUpActive}
          $isVisible={!isSignUpActive}
          aria-hidden={isSignUpActive}
        >
          <LoginForm onSwitchToSignUp={() => setIsSignUpActive(true)} />
        </LoginSection>

        <RegisterSection
          $isSignUpActive={isSignUpActive}
          $isVisible={isSignUpActive}
          aria-hidden={!isSignUpActive}
        >
          <RegisterForm onSwitchToLogin={() => setIsSignUpActive(false)} />
        </RegisterSection>

        <OverlayWrapper $isSignUpActive={isSignUpActive}>
          <OverlayPanel
            isSignUpActive={isSignUpActive}
            setIsSignUpActive={setIsSignUpActive}
          />
        </OverlayWrapper>

        <MobileTogglePanel>
          <MobileToggleTitle>{mobileTitle}</MobileToggleTitle>
          <MobileToggleDescription>{mobileDescription}</MobileToggleDescription>
          <GhostButton
            type="button"
            onClick={() => setIsSignUpActive((currentState) => !currentState)}
          >
            {mobileButtonLabel}
          </GhostButton>
        </MobileTogglePanel>
      </AuthCard>
    </AuthWrapper>
  );
}

export default AuthContainer;