const root = ReactDOM.createRoot(document.getElementById("root"));

const head1 = React.createElement("h1", { id: "head1" }, "Heading 1");
const head2 = React.createElement("h2", { id: "head2" }, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  head1,
  head2,
]);
root.render(container);
