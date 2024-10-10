import "./style.css";
import { updateTime } from "./time";

const initialLoader = (() => {
    updateTime(); //updateTime will constantly update time
})();