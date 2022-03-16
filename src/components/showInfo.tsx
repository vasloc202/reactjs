import {userInfo} from "../type/user";
type ShowInfoProps = {
    person : userInfo;
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props);
       
    return <div>
        ShowInfo
        <h1>Name: {props.person.name}</h1>
    </div>
}
export default ShowInfo;