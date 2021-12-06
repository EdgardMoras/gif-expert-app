import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export default function GifExpertApp() {
  //const categories = ["One Punch", "Samuray X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => {
          return <GiftGrid key={index} category={category} />;
        })}
      </ol>
    </div>
  );
}
