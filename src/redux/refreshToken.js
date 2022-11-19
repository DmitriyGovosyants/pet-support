import { useAuth } from 'redux/useAuth';

export const RefreshToken = async () => {
  const auth = useAuth();
  console.log(auth)
}