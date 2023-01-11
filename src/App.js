import { useRef, useState } from "react";
import Translate from "./Translate";

function App() {
	const [text, setText] = useState("");
	const inputRef = useRef(null);

	return (
		<div className="app">
			<input ref={inputRef} type="text" />
			<button onClick={() => setText(inputRef.current.value)}>Translate</button>
			<Translate word={text} />
		</div>
	);
}

export default App;
