import { useEffect } from "react";
import AppRoute from "./route/AppRoute";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("AUTH");
    if (!userData) return;
    dispatch(login(JSON.parse(userData)));
  }, [dispatch]);

  return <AppRoute />;
}

export default App;
