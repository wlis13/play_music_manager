import { useContext, useState } from "react";
import Ximage from "./images/XImage_circle.png"
import "./mainPage.css";
import MyContext from "../../context/Context";
import Header from "../Header/header";

function MainPage() {

  const { fetchAddData, isUpdate, handleChange, fetchAddImage, fetchAddMusic } = useContext(MyContext);

  const [imageFile, setImageFile] = useState([]);

  function clearInputs() {
    document.getElementById("input_title").value = "";
    document.getElementById("input_music").value = "";
    document.getElementById("input_image").value = "";
    document.getElementById("input_category").value = "";
    document.getElementById("input_description").value = "";

  }

  function handleImage({ target }) {
    const { files } = target;
    if (files.length > 0) {
      setImageFile((prev) => ([...prev, URL.createObjectURL(files[0])]));
      fetchAddImage(files[0]);
    }
  }

  function handleMusic({ target }) {
    const { files } = target;
    if (files.length > 0) {
      fetchAddMusic(files[0]);
    }
  }

  function removeItem() {
    setImageFile([]);
  }

  return (
    <div className="container_main_page">
      <Header />
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
            defaultValue={isUpdate.is ? isUpdate.music.title : null}
          />
        </label>
        <p id="title_image">Imagem:</p>
        <div className="container_show_image">
          {imageFile
            ?
            <div className="container_image_and_remove_icon">
              <img
                onClick={() => { removeItem() }}
                id="remove_image_icon"
                src={Ximage}
                alt="remover"
              />
              <div className="container_image_input">
                <img
                  id="image_music"
                  src={isUpdate.is ? isUpdate.music.image : imageFile}
                  alt={`${imageFile}`}
                />
                {
                  isUpdate.is &&
                  <input
                    id="input_update_image"
                    type="text"
                    defaultValue={isUpdate.is && isUpdate.music.image}
                    onChange={handleChange}
                    name="image"
                  />
                }
              </div>
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
          <select
            onChange={handleChange}
            name="category"
            id="input_category"
            defaultValue={isUpdate.is && isUpdate.music.category}
          >
            <option value=""></option>
            <option value="trance">Trance</option>
            <option value="anos 80">Anos 80</option>
            <option value="rock'n roll">Rock in Roll</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="crista">Cristã</option>
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
            defaultValue={isUpdate.is ? isUpdate.music.description : ''}
          >
          </textarea>
        </label>
        <button
          type="button"
          onClick={async () => {
            await fetchAddData();
            clearInputs();
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
export default MainPage;
