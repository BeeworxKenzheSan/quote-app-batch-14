import { useNavigate } from "react-router-dom";
import { SignUp } from "../../copmonents/auth/SignUp";
import { API_URL } from "../../utils/constants";
import axios from "axios";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await axios.post(`${API_URL}/register`, data);
      navigate("/signIn");
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
  return <SignUp onSubmitFunction={onSubmit} />;
};
