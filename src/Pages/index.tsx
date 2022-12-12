import React from "react";

export const A = React.lazy(() => 
new Promise((res,rej)=>{
  setTimeout(()=>res(import("./A")), 4000);
}));
export const B = React.lazy(() => 
new Promise((res,rej)=>{
  setTimeout(()=>res(import("./B")), 4000);
}));
