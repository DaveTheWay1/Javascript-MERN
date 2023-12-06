const [text, setText] = useState("");
setText("state state I am setting state!!!");
console.log(text);

// prediction: "state state i am setting state"

// output: an empty string still because setting is asychronous from calling
// so it will not be avaiblbe right away


const [state, setState] = useState({
    items: [],
    totalPrice: 0.00
});
setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
console.log(state.items);

const [arr, setArr] = useState([]);
for(let i=1; i<=5; i++) {
    setArr([...arr, i]);
}
console.log(arr);

const [state1, setState1] = useState({
    greeting: "Knock knock, "
});
setState({ greeting: state1.greeting + "Neo" });
console.log(state.greeting);