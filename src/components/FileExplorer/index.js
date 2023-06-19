import "./index.css";
import { Icons, sortByType } from "../Helper";
import { useState } from "react";

function FileExplorer({ data, updateTree = () => {} }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const createNewItem = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddNewItem = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      updateTree({
        folderId: data.id,
        name: e.target.value,
        isFolder: showInput.isFolder,
      });
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (data.isFolder) {
    return (
      <div className="folder-explorer">
        <div
          className="explorer-item space-between"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <div className="item-details">
            {Icons["folder"]}
            {data.name}
          </div>
          <div className="item-actions">
            <div
              className="button"
              onClick={(e) => {
                createNewItem(e, true);
              }}
            >
              {Icons.newFolder}
            </div>
            <div
              className="button"
              onClick={(e) => {
                createNewItem(e, false);
              }}
            >
              {Icons.newFile}
            </div>
          </div>
        </div>
        <div
          className="explorer-item"
          style={{ display: expand ? "block" : "none" }}
        >
          {showInput.visible && (
            <>
              {Icons[showInput.isFolder ? "folder" : "file"]}
              <input
                type="text"
                name=""
                autoFocus
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
                onKeyDown={onAddNewItem}
              />
            </>
          )}
          {data.children &&
            sortByType({ list: data.children, sortOn: "isFolder" }).map(
              (item) => {
                return (
                  <FileExplorer
                    data={item}
                    key={item.id}
                    updateTree={updateTree}
                  />
                );
              }
            )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file-explorer">
        <div className="explorer-item space-between">
          <div className="item-details">
            {Icons["file"]}
            {data.name}
          </div>
        </div>
      </div>
    );
  }
}

export default FileExplorer;
