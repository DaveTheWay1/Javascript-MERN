const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")
// * the above says we want a component in which the string as an h1

const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))
// * the above is a nested react component