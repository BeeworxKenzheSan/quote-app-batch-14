import { signIn } from "../../api/userService";
import { SignIn } from "../../copmonents/auth/SignIn";
import { useAppDispatch } from "../../hooks";


export const SignInPage = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (data) => {
    dispatch(signIn(data));
  };
  return <SignIn onJonot={onSubmit} />;
};
