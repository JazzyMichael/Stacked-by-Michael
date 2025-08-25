import { createContext, ReactNode, useContext, useState } from "react";

// @ts-ignore
const DragDropContext = createContext([null, (_) => {}]);

export const DragDropProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState(null);

  return (
    <DragDropContext.Provider value={[type, setType]}>
      {children}
    </DragDropContext.Provider>
  );
};

export default DragDropContext;

export const useDragDrop = () => {
  return useContext(DragDropContext);
};
