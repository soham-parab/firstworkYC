import React from "react";

function RenderForm({ formBreakdown = {} }) {
  const { title } = formBreakdown;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default RenderForm;
