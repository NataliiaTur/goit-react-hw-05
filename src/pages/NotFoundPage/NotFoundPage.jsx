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
  return (
    <div className={css.container}>
      <div className={css.message}>Page not found</div>
      <div className={css.returnText}>
        Returning to the main page in 3 seconds...
      </div>
    </div>
  );
};

export default NotFoundPage;
