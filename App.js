/*
<div id="parent">
    <div id="child1">
        <h1>H1 tag !! </h1>
        <p id="para1">Paragraph tag !!</p>
        <span id="span1">I am span 1</span>
    </div>
    <div id="child2">
        <h1>H1 tag !! </h1>
        <h3 id="heading2">H3 tag !!</h3>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag !! "),
    React.createElement("p", { id: "para1" }, "Paragraph tag !!"),
    React.createElement("span", { id: "span1" }, "I am span 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 tag !! "),
    React.createElement("h3", { id: "heading2" }, "H3 tag !!"),
  ]),
]);

const element = React.createElement(
  "h2",
  { id: "heading", className: "headingClass" },
  "Hello from React !!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
