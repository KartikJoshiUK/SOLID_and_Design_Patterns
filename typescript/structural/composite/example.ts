// COMPONENT
interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}

// LEAF 1
class MyFile implements FileSystemComponent {
  constructor(private name: string, private size: number) {}
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
}

// COMPOSITE INTERFACE
interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponent(): FileSystemComponent[];
}

// COMPOSITE / LEAF 2
class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = [];
  constructor(private name: string) {}
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.components.reduce(
      (prevValue, curr) => prevValue + curr.getSize(),
      0
    );
  }
  addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }
  removeComponent(component: FileSystemComponent): void {
    this.components = this.components.filter(
      (comp) => comp.getName() !== component.getName()
    );
  }
  getComponent(): FileSystemComponent[] {
    return this.components;
  }
}

// USAGE

const file1 = new MyFile("index.ts", 96);
const file2 = new MyFile("package.json", 34);
const file3 = new MyFile("index.html", 12);
const folder = new Folder("src");
const folderParent = new Folder("frontend");
folder.addComponent(file1);
folder.addComponent(file2);
folderParent.addComponent(folder);
folderParent.addComponent(file3);
console.log(folderParent.getSize());
console.log(folderParent);
