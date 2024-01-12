import React from "react";

function App() {
  const ref = React.useRef(null);
  const [appInput, setAppInput] = React.useState("");

  React.useEffect(() => {
    // 🚨 ref.current is always null when this runs
    ref.current?.focus();
  }, []);

  // return <Form ref={ref} />;

  return (
    <div>
      <label>I'm input from App</label>
      <input value={appInput} onChange={(e) => setAppInput(e.target.value)} />
      <br />
      <DummyInput initialValue={appInput} />
    </div>
  );
}

function DummyInput({ initialValue }) {
  const [inputState, setInputState] = React.useState(initialValue);

  return (
    <>
      <label>I'm a dummy input</label>
      <input
        // value takes inputState value NOT initialValue
        // even if App re-renders, inputState is still the same
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
    </>
  );
}

const Form = React.forwardRef((props, ref) => {
  const [show, setShow] = React.useState(false);

  return (
    <form>
      <button type="button" onClick={() => setShow(true)}>
        show
      </button>

      {show && <input ref={ref} />}
    </form>
  );
});

export default App;
