interface Tool {
  onMouseDown(): void;
  onMouseUp(): void;
}
class SelectionTool implements Tool {
  onMouseDown(): void {
    console.log("Selection start");
  }
  onMouseUp(): void {
    console.log("Selected");
  }
}
class BrushTool implements Tool {
  onMouseDown(): void {
    console.log("Brush stroke down");
  }
  onMouseUp(): void {
    console.log("Brush stroke marked");
  }
}
class EraserTool implements Tool {
  onMouseDown(): void {
    console.log("Erasering start");
  }
  onMouseUp(): void {
    console.log("Erased");
  }
}

class Canvas {
  constructor(private tool: Tool) {}
  setTool(tool: Tool) {
    this.tool = tool;
  }
  onMouseUp(): void {
    this.tool.onMouseUp();
  }
  onMouseDown(): void {
    this.tool.onMouseDown();
  }
}

// USAGE
const canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();
canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.setTool(new EraserTool());
canvas.onMouseUp();
