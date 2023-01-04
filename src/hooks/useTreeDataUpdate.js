const useTreeDataUpdate = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.children.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        children: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.children.map((item) => {
      return insertNode(item, folderId, item, isFolder);
    });

    return { ...tree, children: latestNode };
  }

  const deleteNode = () => {}; // Do it Yourself

  const renameNode = () => {}; // Do it Yourself

  return { insertNode, deleteNode, renameNode };
};

export default useTreeDataUpdate;
