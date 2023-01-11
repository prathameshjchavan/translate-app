import { useCallback, useEffect, useState } from "react";
import translate from "./utils/translate";

const Translate = ({ word }) => {
	const [text, setText] = useState("");

	// functions
	const translateText = useCallback(async () => {
		const translatedWord = await translate(word, "es");
		setText(translatedWord);
	}, [word, setText]);

	// useEffects
	useEffect(() => {
		if (!word) return;

		translateText();
	}, [word, translateText]);

	console.log("called");

	return <div>Spanish: {text || "NA"}</div>;
};

export default Translate;
