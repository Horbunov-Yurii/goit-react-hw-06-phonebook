import { useDispatch } from "react-redux";
import {setFilter} from "redux/filterSlice"


export const Filter = () => {
  const dispatch = useDispatch()
  return <input name="filter" onChange={(event)=>dispatch(setFilter(event.target.value))} />;
};
