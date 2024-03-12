import "./mainPage.css";

function MainPage() {
  return (
    <div>
      <form className="form_main_page">
        <p>Título:</p>
        <label htmlFor="input_title">
          <input id="input_title" type="text" />
        </label>
      </form>
    </div>
  );
}
export default MainPage;
