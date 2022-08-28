import { useAppSelector } from '../../hooks';

const Error = ():JSX.Element | null => {
  const error = useAppSelector((state) => state.error);

  return error ? <div className='Error-block'>{error}</div> : null;

};

export default Error;

