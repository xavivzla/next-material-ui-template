import Head from "next/head";
import Image from "next/image";

import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
