import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertNotification() {
  return (
    <Alert variant="info">
      <Alert.Heading>Added to Favorites!</Alert.Heading>
      <p className="mb-0">
        You can find your favorite news in the "Favorites" tab
      </p>
    </Alert>
  );
}

export default AlertNotification;
