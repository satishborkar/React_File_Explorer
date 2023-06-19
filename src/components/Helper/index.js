import { FcFolder } from "react-icons/fc";
import { VscFileCode } from "react-icons/vsc";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";

export const Icons = {
  folder: <FcFolder className="icon" />,
  file: <VscFileCode className="icon" />,
  newFile: <AiOutlineFileAdd className="icon" />,
  newFolder: <AiFillFolderAdd className="icon" />,
};

export const sortByType = ({ list, sortOn }) => {
  return list.sort((a, b) => b[sortOn] - a[sortOn]);
};
