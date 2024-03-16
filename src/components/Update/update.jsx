import { useContext } from "react";
import "./update.css";
import MyContext from "../../context/Context";
import { useHistory } from "react-router-dom";

function Update() {
  const { musics, setIsUpdate, setFormData } = useContext(MyContext);

  const history = useHistory();

  function startUpdate(music) {
    setIsUpdate(({ music: music, is: true }));
    setFormData({
      title: music.title,
      image: music.image,
      music: music.music,
      category: music.category,
      description: music.description
    })

    history.push("/");
  }

  return (
    <div className="container_manager_update">
      <ul>
        {
          musics.length > 0 &&
          musics.map((music) => (
            <li
              onClick={() => { startUpdate(music) }}
              key={music._id}
            >
              {music.title}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default Update;
