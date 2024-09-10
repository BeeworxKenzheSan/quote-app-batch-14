import { useDispatch } from "react-redux";
import { SignIn } from "../../copmonents/auth/SignIn";
import { signIn } from "../../api/userService";

export const SignInPage = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signIn(data));
  };
  return <SignIn onJonot={onSubmit} />;
};
