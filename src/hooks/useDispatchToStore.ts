import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

// TODO: Fix the payload type. 
export default function useDispatchToStore(type: string) {
  const dispatch: Dispatch = useDispatch();
  return (payload: any) => {
    dispatch({ type, payload })
  }
};