import React from "react";
import { useState } from "react";
function Card() {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm group hover:bg-[#9333ea] transition-colors duration-300"
      data-v0-t="card"
    >
      <img
        src="/Inst.png"
        alt="Card Image"
        width="600"
        height="300"
        className="aspect-[3/2] object-cover rounded-t-lg"
        style={{}}
      />
      <div className="p-4 bg-white dark:bg-gray-950 rounded-b-lg">
        <h3 className="text-xl font-bold group-hover:text-white transition-colors duration-300">
          Open
        </h3>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
          Discover and know more
        </p>
      </div>
    </div>
  );
}

export default Card;
