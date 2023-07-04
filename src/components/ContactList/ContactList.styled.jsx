import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const ContactItem = styled.li`
  justify-content: space-between;
  gap: 16px;
`;

export const Contact = styled.p`
  font-size: ${p => p.theme.fontSize.m};
  color: ${p => p.theme.colors.secondary};
`;

export const DeleateButton = styled.button`
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
