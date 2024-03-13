import { useState } from "react";
import Ximage from "./images/XImage_circle.png"
import "./mainPage.css";

function MainPage() {

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    url: "",
    category: "",
    description: ""
  });

  const [imageFile, setImageFile] = useState([]);

  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }


  function handleImage({ target }) {
    const { files } = target;
    setImageFile((prev) => ([...prev, URL.createObjectURL(files[0])]));
    setFormData((prev) => ({ ...prev, image: files[0] }))

  }

  function removeItem() {
    setImageFile([]);
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
        <label className="label_main_page" htmlFor="input_url">
          <p>Url:</p>
          <input
            onChange={handleChange}
            id="input_url"
            type="url"
            name="url"
          />
        </label>
        <label className="label_main_page" htmlFor="input_url">
          <p>Url:</p>
          <select onChange={handleChange} name="category" id="input_category">
            <option value="">Escolha a categoria</option>
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
            rows="10"
          >
          </textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default MainPage;
