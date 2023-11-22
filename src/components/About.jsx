import { Marcos } from "./Marcos";
import { NavBar } from "./NavBar";
import { Sabrina } from "./Sabrina";

export function About() {

    return(
      <div class="container" id="about">
           <div id="col1">
            <NavBar/>
            </div> 
      <div className="column" id="col2">
        <Marcos/>
        <div><hr/></div>
        <Sabrina/>
        </div>
     </div>
    )
  }