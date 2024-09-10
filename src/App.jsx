import { useEffect } from "react";
import AppRoute from "./route/AppRoute";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("AUTH");
    if (!userData) return;
    dispatch({ type: "signin", payload: JSON.parse(userData) });
  }, [dispatch]);
  return <AppRoute />;
}

export default App;
