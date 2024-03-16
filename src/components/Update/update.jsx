import { useContext } from "react";
import "./update.css";
import MyContext from "../../context/Context";

function Update() {
  const { musics } = useContext(MyContext);

  return (
    <div className="container_manager_update">
      <ul>
        {
          musics.length > 0 &&
          musics.map((music) => (
            <li key={music._id}>
              {music.title}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default Update;
