import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
  return (
    <div className="profileText">
      PROFILE PAGE USER: {props.username}
      <ChangeProfile setUsername={props.setUsername}/>
    </div>
  );
};
