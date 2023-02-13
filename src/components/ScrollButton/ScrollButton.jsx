import ScrollToTop from 'react-scroll-to-top';
import { BiChevronUp } from 'react-icons/bi';

export const ScrollButton = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        top={1500}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3f51b5',
          color: 'white',
          borderRadius: '100%',
          width: '50px',
          height: '50px',
        }}
        component={
          <p>
            <BiChevronUp size={50} />
          </p>
        }
      />
    </div>
  );
};
