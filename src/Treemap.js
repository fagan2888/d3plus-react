import {Treemap as type} from "d3plus-hierarchy";
import Shell from "./Viz";

/**
    @class Treemap
    @extends Viz
*/
class Treemap extends Shell {}
Treemap.defaultProps = Object.assign(Shell.defaultProps, {type});
export default Treemap;
