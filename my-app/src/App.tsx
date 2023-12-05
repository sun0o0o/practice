import React from "react";
import {
  DndProvider,
  DragSource,
  DropTarget,
  useDrag,
  useDrop,
} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Types = {
  BOX: "box",
};

interface BoxProps {
  id: string;
}

interface DustbinProps {
  id: string;
}

const Box: React.FC<BoxProps> = ({ id }) => {
  const [{ isDragging }, drag] = useDrag({
    type: Types.BOX,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "lightblue",
        cursor: "pointer",
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      Box {id}
    </div>
  );
};

const Dustbin: React.FC<DustbinProps> = ({ id }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: Types.BOX,
    drop: () => {
      // 드롭 후 필요한 작업을 수행합니다.
      console.log(`Box dropped into Dustbin ${id}`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  const backgroundColor = isActive ? "lightgreen" : "white";

  return (
    <div
      ref={drop}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor,
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Dustbin {id}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Dustbin id="1">
          <Box id="1" />
        </Dustbin>
        <div>
          <Box id="2" />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
