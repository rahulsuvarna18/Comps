import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
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
