import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: ${p => p.theme.colors.primary};
`;
export const Input = styled.input`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.border.none};
  outline: 0;
  border-radius: ${p => p.theme.space[4]}px;
  color: ${props => props.theme.colors.primary};
  text-shadow: ${p => p.theme.boxShadow.textShadow};

  background-color: transparent;
  box-shadow: ${p => p.theme.boxShadow.boxShadow};
`;

export const SubmitButton = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSize.l};
  font-weight: bold;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.success};
  border: ${p => p.theme.border.none};
  border-radius: ${p => p.theme.space[3]}px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${p => p.theme.colors.light};
  }

  &:focus {
    outline: none;
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }

  &:active {
    background-color: ${p => p.theme.colors.dark};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-left: ${p => p.theme.space[4]}px;
`;
