import translate from "translate";

// configurations
translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

export default translate;
