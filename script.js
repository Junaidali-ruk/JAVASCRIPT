let mydate = new Date();
let custom = mydate.toLocaleString("default", {
  weekday: "short",
  year: "numeric",
  month: "numeric",
});

console.log(custom);
