import Counter from "./layout/counter"
import "bootstrap/dist/css/bootstrap.min.css";
import CounterFun from "./layout/CounterFun";

const App = () => {
  return (
    <>
    <h1 className="text-center">Using Class</h1>
<Counter />

<h1 className="text-center">Using Function</h1>
    <CounterFun />
    </>
  )
}

export default App