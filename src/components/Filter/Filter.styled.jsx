import styled from '@emotion/styled';

export const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-left: ${p => p.theme.space[4]}px;
`;

export const FilterLabel = styled.p`
  font-size: ${p => p.theme.fontSize.m};
  color: ${p => p.theme.colors.secondary};
`;

export const FilterInput = styled.input`
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
