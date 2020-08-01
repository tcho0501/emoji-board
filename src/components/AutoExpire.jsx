import React, { Fragment, useState, useEffect } from "react";

const AutoExpire = ({ children }) => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsExpired(true);
    }, 10000);
  }, []);

  return isExpired ? null : <Fragment>{children}</Fragment>;
};

export default AutoExpire;
