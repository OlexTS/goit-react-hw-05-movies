import PropTypes from 'prop-types';
import { BtnContainer, Btn } from './GoBackButton.styled';

export const GoBackButton = ({ onClick }) => {
  return (
    <BtnContainer>
      <Btn type="button" onClick={onClick}>
        GO BACK
      </Btn>
    </BtnContainer>
  );
};

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
