import { GoBell, GoCloudDownload, GoCode } from "react-icons/go";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCode />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Add To Cart!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Add To Cart!
        </Button>
      </div>
    </div>
  );
}

export default App;
