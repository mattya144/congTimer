import { VFC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Popup.css';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '30px',
  width: 256,
});

const Output: VFC = () => {
  const array: Array<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <li>
      {array.map(() => (
        <div className="content">
          <MyButton>おめでとう</MyButton>
        </div>
      ))}
    </li>
  );
};

const Popup: VFC = () => (
  <div className="overalay">
    <ul>
      <Output />
    </ul>
  </div>
);

export default Popup;
