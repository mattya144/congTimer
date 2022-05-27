import { VFC, useState, useEffect } from 'react';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Popup from './Popup';

const Timer: VFC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const [isActive, setIsActive] = useState(true);
  const tick = (): void => setTimeLeft((t) => t - 1);
  const reset = (): void => {
    setTimeLeft(limit);
    setIsActive(true);
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(limit);
      setIsActive(false);
    }
  }, [timeLeft, limit]);

  return (
    <Card>
      <div>
        {isActive === false ? (
          <Popup />
        ) : (
          <TextField color="secondary" value={timeLeft} />
        )}
        <Button variant="contained" onClick={reset}>
          submit
        </Button>
      </div>
    </Card>
  );
};

export default Timer;
