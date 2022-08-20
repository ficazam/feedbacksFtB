import React from "react";
import { Link } from 'react-router-dom'

import { Card } from "../components/Card";

export const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          This is a React project to leave feedback for a product or service
        </p>
        <p>Version: 1.0.0</p>
        <p><Link to='/'>Back to Feedback</Link></p>
      </div>
    </Card>
  );
};
