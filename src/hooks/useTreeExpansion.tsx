import { useState } from "react";

const useTreeExpansion = (initialExpandedNodes = []) => {
  const [expanded, setExpanded] = useState<string[]>(initialExpandedNodes);

  const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleExpandAll = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? ["1", "5"] : []));
  };

  return {
    expanded,
    handleToggle,
    handleExpandAll,
  };
};

export default useTreeExpansion;
