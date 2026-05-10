import styled from "styled-components";
import { InputField, PrimaryButton } from "./LoginForm";

const RegisterFormWrapper = styled.form`
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

function RegisterForm({ onSwitchToLogin }) {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <RegisterFormWrapper onSubmit={handleSubmit}>
      <FormHeading>
        <FormTitle>Cadastrar</FormTitle>
        <FormDescription>
          Crie sua conta e comece sua jornada com uma experiência moderna.
        </FormDescription>
      </FormHeading>

      <FieldGroup>
        <FieldLabel htmlFor="register-name">Nome</FieldLabel>
        <InputField
          id="register-name"
          type="text"
          placeholder="Digite seu nome"
        />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="register-email">Email</FieldLabel>
        <InputField
          id="register-email"
          type="email"
          placeholder="Digite seu email"
        />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="register-password">Senha</FieldLabel>
        <InputField
          id="register-password"
          type="password"
          placeholder="Crie uma senha"
        />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="register-password-confirmation">
          Confirmar senha
        </FieldLabel>
        <InputField
          id="register-password-confirmation"
          type="password"
          placeholder="Confirme sua senha"
        />
      </FieldGroup>

      <PrimaryButton type="submit">Cadastrar</PrimaryButton>

      <AlternateActionRow>
        Já tem uma conta?
        <AlternateActionButton type="button" onClick={onSwitchToLogin}>
          Entrar
        </AlternateActionButton>
      </AlternateActionRow>
    </RegisterFormWrapper>
  );
}

export default RegisterForm;