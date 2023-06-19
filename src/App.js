import { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import data from "./components/data/file_explorer_data.json";
import useTreeDataUpdate from "./hooks/useTreeDataUpdate";

function App() {
  const [explorerData, setExplorerData] = useState(data);
  const { insertNode } = useTreeDataUpdate();

  const handleTreeUpdate = ({ folderId, name, isFolder }) => {
    const updatedTree = insertNode({
      tree: explorerData,
      folderId,
      name,
      isFolder,
    });
    setExplorerData(updatedTree);
  };

  return (
    <div className="file-explorer" style={{ height: "100vh" }}>
      <FileExplorer data={explorerData} updateTree={handleTreeUpdate} />
    </div>
  );
}

export default App;
