import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const GlobalTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

GlobalTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
