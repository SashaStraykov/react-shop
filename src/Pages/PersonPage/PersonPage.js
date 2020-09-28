import React, { useEffect } from "react";

function PersonPage() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
      console.log(data.json())
    );
  });

  return (
    <div>
      <h1>Person Page</h1>
    </div>
  );
}

export default PersonPage;
