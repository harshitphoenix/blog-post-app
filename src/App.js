import AddPost from "./component/AddPost";
import BlogDetail from "./component/BlogDetail";
import BlogLists from "./component/BlogList";
import { Context } from "./context";
import mockData from "./mockData";
import Main from "./pages";
function App() {
  
  return (
    <Context>
      <Main/>
      {/* <BlogLists/> */}
      {/* <AddPost/> */}
      {/* <BlogDetail/> */}
    </Context>
  );
}

export default App;
