import { ButtonLoad } from './LoadMore.styled';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <div>
      <ButtonLoad type="button" onClick={onLoadMore}>
        Load More
      </ButtonLoad>
    </div>
  );
};
