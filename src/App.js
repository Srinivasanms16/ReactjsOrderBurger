
import appcss from "./App.module.css";
import Layout from "./layout/Layout";

function App() {

  const cssClassname = ["col-md-12",appcss.screen]

  return (
    <div className="container-fluid" style={{backgroundColor:"rgb(0,0,0,0.25)"}}>
      <div className="row">
        <div className={cssClassname.join(" ")}  >
         <Layout></Layout>
        </div>
      </div>
    </div>
  );
}

export default App;
