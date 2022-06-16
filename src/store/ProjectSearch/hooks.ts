import { useContext } from "react";
import ProjectSearchContext from "./context";

const useProjectSearch = () => useContext(ProjectSearchContext);
export default useProjectSearch;
