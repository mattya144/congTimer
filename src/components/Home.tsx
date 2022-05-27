import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { Container, TextField } from '@mui/material';
import Timer from './Timer';

type InputData = {
  time: number;
};

const Home: VFC = () => {
  const { register, watch } = useForm<InputData>({
    defaultValues: { time: 50 },
  });
  const watchTime = watch();

  return (
    <>
      <h1>Conguratulation Timer</h1>
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <TextField type="text" {...register('time')} />
        <Timer limit={watchTime.time} />
      </Container>
    </>
  );
};

export default Home;
