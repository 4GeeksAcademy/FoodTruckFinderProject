export async function loader(){
    try{
    const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=10"
    );
    const data = await response.json();
    console.log(data);
}catch (error){
    console.error("error fetching",error);
    return[]
}}

export const Cart = ()=> {


    return(
        <ul>
            <link to="/users">
        </ul>
    )

}