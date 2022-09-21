import { useDispatch, useSelector } from "react-redux";
import ColorItem from "./ColorItem";
import {
  setPrimaryColorFromHistory,
  removeColorFromPrimaryArr,
} from "../redux/reducers/colors";
import { RootState } from "../redux";

const ColorList = () => {
  const { historyPrimaryColor, primaryColor } = useSelector(
    (state: RootState) => state.colors
  );
  const dispatch = useDispatch();

  const handleSelectingPrimary = (color: string) => {
    if (primaryColor !== color) {
      dispatch(setPrimaryColorFromHistory(color));
    }
  };

  const handleDelete = (colorHex: string) => {
    dispatch(removeColorFromPrimaryArr(colorHex));
  };

  return (
    <>
      {historyPrimaryColor?.map((color: string) => (
        <ColorItem
          key={color}
          color={color}
          onSelect={() => handleSelectingPrimary(color)}
          onDelete={() => handleDelete(color)}
        />
      ))}
    </>
  );
};

export default ColorList;
