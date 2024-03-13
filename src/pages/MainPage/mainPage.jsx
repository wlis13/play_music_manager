import { useContext, useState } from "react";
import Ximage from "./images/XImage_circle.png"
import "./mainPage.css";
import MyContext from "../../context/Context";

function MainPage() {

  const { formData, setFormData, fetchAddData } = useContext(MyContext);

  const [imageFile, setImageFile] = useState([]);

  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }


  function handleImage({ target }) {
    const { files } = target;
    if (files.length > 0) {
      setImageFile((prev) => ([...prev, URL.createObjectURL(files[0])]));
      setFormData((prev) => ({ ...prev, image: files[0] }))
    }
  }

  function handleMusic({ target }) {
    const { files } = target;
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, music: files[0] }))
    }
  }

  function removeItem() {
    setImageFile([]);
    const inputImage = document.getElementById("input-image");
    inputImage.value = "";
  }

  return (
    <div className="container_main_page">
      <form className="form_main_page">
        <label
          className="label_main_page"
          htmlFor="input_title">
          <p>Título:</p>
          <input
            onChange={handleChange}
            id="input_title"
            type="text"
            name="title"
          />
        </label>
        <p>Imagem:</p>
        <div className="container_show_image">
          {imageFile.length > 0
            ?
            <div className="container_image_and_remove_icon">
              <img
                onClick={() => { removeItem() }}
                id="remove_image_icon"
                src={Ximage}
                alt="remover"
              />
              <img
                id="image_music"
                src={imageFile[0]}
                alt={`${imageFile[0]}`}
              />
            </div>
            : <p id="image_message">Imagem aqui</p>
          }
        </div>
        <label className="label_main_page" htmlFor="input-image">
          <input
            className='input_link_add'
            id='input-image'
            type="file"
            accept='image/*'
            onChange={handleImage}
            multiple
          />
        </label>
        <label className="label_main_page" htmlFor="input_music">
          <p>Musica:</p>
          <input
            onChange={handleMusic}
            id="input_music"
            type="file"
            name="music"
            accept="audio/mp3"
            multiple
          />
        </label>
        <label className="label_main_page" htmlFor="input_category">
          <p>Categoria:</p>
          <select onChange={handleChange} name="category" id="input_category">
            <option value=""></option>
            <option value="trance">Trance</option>
            <option value="anos 80">Anos 80</option>
            <option value="rock'n roll">Rock in Roll</option>
            <option value="hip-hop">Hip-Hop </option>
          </select>
        </label>
        <label className="label_main_page" htmlFor="input_description">
          <p>Descrição:</p>
          <textarea
            onChange={handleChange}
            name="description"
            id="input_description"
            cols="30"
            rows="8"
          >
          </textarea>
        </label>
        <button type="button" onClick={fetchAddData}>Enviar</button>
      </form>
    </div>
  );
}
export default MainPage;
