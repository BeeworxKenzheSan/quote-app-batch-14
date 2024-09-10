import { SignUp } from "../../copmonents/auth/SignUp";
import { API_URL } from "../../utils/constants";

export const SignUpPage = () => {
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(data),
      });

      const result = response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log("FAA:", data);
  };
  return <SignUp onSubmitFunction={onSubmit} />;
};
