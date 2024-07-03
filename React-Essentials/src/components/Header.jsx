import coreImg from "../assets/react-core-concepts.png" 

function Header() {
    function randomInt(max) {
      return Math.floor(Math.random() * max)
    }
    const words = ["Imporntant", "Core", "Unique"];
    return (
    <header>
        <img src={coreImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {words[randomInt(3)]} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
    );
}

export default Header;