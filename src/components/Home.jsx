import { NavBar } from "./NavBar";


export function Home () {
    return(
        <>
             <div class="container" id="home">
            <div className="column" id="col1"><NavBar/></div>
            <div className="column" id="col2">I would like to have information poupulated here when a link is active</div>
        </div>
       </>
    )
}