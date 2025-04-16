import React, { useEffect } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <div>Page not found. Returning to the main page</div>;
};

export default NotFoundPage;
