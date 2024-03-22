import { useEffect, useState } from "react";
import MyContext from "./Context";
import PropTypes from "prop-types";

function Provider({ children }) {

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    image: "",
    music: "",
    category: "",
    description: ""
  });

  const [musics, setMusics] = useState([]);
  const [isUpdate, setIsUpdate] = useState({
    music: {},
    is: false,
  });

  function clearInputs() {
    document.getElementById("input_title").value = "";
    document.getElementById("input_music").value = "";
    document.getElementById("input_image").value = "";
    document.getElementById("input_category").value = "";
    document.getElementById("input_description").value = "";
  }


  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  async function fetchMusics() {

    const url = "https://playmusicservice.vercel.app/all_musics";
    const promise = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const response = await promise.json();
    setMusics(response);
  }

  async function fetchAddImage(image) {
    const url = "https://playmusicservice.vercel.app/add_image_firebase";

    const formDataFormatte = new FormData();
    formDataFormatte.append("file", image);

    const promise = await fetch(url, {
      method: "POST",
      body: formDataFormatte
    });
    const response = await promise.json();
    setFormData((prev) => ({ ...prev, image: response.url }));
  }

  async function fetchAddMusic(music) {
    const url = "https://playmusicservice.vercel.app/add_music_firebase";

    const formDataFormatte = new FormData();
    formDataFormatte.append("file", music);

    const promise = await fetch(url, {
      method: "POST",
      body: formDataFormatte
    });
    const response = await promise.json();
    setFormData((prev) => ({ ...prev, music: response.url }))
  }


  function clearData() {
    setFormData({
      title: "",
      image: "",
      music: "",
      category: "",
      description: ""
    })
  }

  async function fetchAddData() {
    const url = "https://playmusicservice.vercel.app/add_music"
    const urlUpdate = "https://playmusicservice.vercel.app/update_music";
    const promise = await fetch(isUpdate.is ? urlUpdate : url, {
      method: isUpdate.is ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await promise.json();
    alert(response.message);
    clearData();
    setIsUpdate({ music: {}, is: false });
    clearInputs();
  }

  useEffect(() => {
    fetchMusics()
  }, [])

  const providerValue = {
    formData,
    setFormData,
    handleChange,
    fetchAddImage,
    fetchAddMusic,
    fetchAddData,
    musics,
    setIsUpdate,
    isUpdate
  }

  return (
    <MyContext.Provider value={providerValue}>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;