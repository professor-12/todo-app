import { Todos } from "@/store/ToDoState";
import Fuse from "fuse.js"


const useSearch = (uncompleted: Todos[] , query:string) => {
      const options = {
    keys: ['title', 'note'] // specify which properties of your data to search
    // Other options...
      };
      const fuse = new Fuse(uncompleted, options);
      
      return fuse.search(query)
}

export default useSearch