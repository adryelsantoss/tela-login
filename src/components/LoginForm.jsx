import styled from "styled-components";

const LoginFormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 0.25rem;
`;

const FormTitle = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.titleColor};
`;

const FormDescription = styled.p`
  color: ${({ theme }) => theme.colors.descriptionColor};
  line-height: 1.5;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const FieldLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const InputField = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.elementBorderColor};
  border-radius: 14px;
  padding: 0.95rem 1rem;
  background: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.titleColor};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.descriptionColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlightColor};
    box-shadow: 0 0 0 4px rgba(204, 199, 193, 0.28);
  }
`;

const RememberRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-size: 0.95rem;
`;

const RememberCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.colors.primaryButtonColor};
`;

export const PrimaryButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 14px;
  padding: 0.95rem 1rem;
  background: ${({ theme }) => theme.colors.primaryButtonColor};
  color: #ffffff;
  font-weight: 600;
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryButtonHoverColor};
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(17, 24, 39, 0.12);
  }
`;

const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-size: 0.92rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.elementBorderColor};
  }
`;

const SocialButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.elementBorderColor};
  border-radius: 14px;
  padding: 0.95rem 1rem;
  background: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 600;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.highlightColor};
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(17, 24, 39, 0.08);
  }
`;

const AlternateActionRow = styled.p`
  margin-top: 0.35rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.descriptionColor};
  line-height: 1.5;
`;

const AlternateActionButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;
  padding: 0;
  margin-left: 0.35rem;
  transition: color 0.25s ease, opacity 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryButtonHoverColor};
    opacity: 0.82;
  }
`;

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.5-5.5 3.5-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.6-2.5C16.8 3 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.8 0-.7-.1-1.3-.2-2H12Z"
    />
    <path
      fill="#34A853"
      d="M3.8 7.3 7 9.7C7.8 7.4 9.7 5.9 12 5.9c1.9 0 3.2.8 3.9 1.5l2.6-2.5C16.8 3 14.6 2 12 2 8.2 2 4.8 4.2 3.8 7.3Z"
    />
    <path
      fill="#FBBC05"
      d="M2 12c0 1.9.5 3.6 1.5 5.1L6.9 14C6.6 13.3 6.4 12.7 6.4 12s.2-1.3.5-2L3.5 6.9A10 10 0 0 0 2 12Z"
    />
    <path
      fill="#4285F4"
      d="M12 22c2.6 0 4.8-.9 6.4-2.5l-3.1-2.4c-.9.6-2.1 1-3.3 1-2.3 0-4.2-1.5-5-3.7l-3.4 2.6C4.8 19.8 8.2 22 12 22Z"
    />
  </svg>
);

function LoginForm({ onSwitchToSignUp }) {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <FormHeading>
        <FormTitle>Entrar</FormTitle>
        <FormDescription>
          Acesse sua conta para continuar de onde parou.
        </FormDescription>
      </FormHeading>

      <FieldGroup>
        <FieldLabel htmlFor="login-email">Email</FieldLabel>
        <InputField
          id="login-email"
          type="email"
          placeholder="Digite seu email"
        />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="login-password">Senha</FieldLabel>
        <InputField
          id="login-password"
          type="password"
          placeholder="Digite sua senha"
        />
      </FieldGroup>

      <RememberRow htmlFor="remember-password">
        <RememberCheckbox id="remember-password" type="checkbox" />
        Lembrar senha
      </RememberRow>

      <PrimaryButton type="submit">Entrar</PrimaryButton>

      <DividerRow>ou</DividerRow>

      <SocialButton type="button">
        <GoogleIcon />
        Entrar com Google
      </SocialButton>

      <AlternateActionRow>
        Ainda não tem uma conta?
        <AlternateActionButton type="button" onClick={onSwitchToSignUp}>
          Criar conta
        </AlternateActionButton>
      </AlternateActionRow>
    </LoginFormWrapper>
  );
}

export default LoginForm;