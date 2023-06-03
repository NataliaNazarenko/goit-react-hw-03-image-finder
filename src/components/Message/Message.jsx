import PropTypes from 'prop-types';
import { Alert } from './Message.styled';

export function Message({ children }) {
  return (
    <Alert role="alert">
      <h2>Hello!</h2>
      <p>{children}</p>
    </Alert>
  );
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
};
