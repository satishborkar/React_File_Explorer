import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import data from "./components/data/file_explorer_data.json";
import useTreeDataUpdate from "./hooks/useTreeDataUpdate";

function App() {
  const [explorerData, setExplorerData] = useState(data);
  const { insertNode } = useTreeDataUpdate();

  const handleTreeUpdate = ({ folderId, item, isFolder }) => {
    const updatedTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(updatedTree);
  };

  return (
    <div className="file-explorer">
      <FileExplorer data={explorerData} updateTree={handleTreeUpdate} />
    </div>
  );
}

export default App;
