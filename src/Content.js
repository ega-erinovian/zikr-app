import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

function Content() {
  const [counter, setCounter] = useState(0);

  // Tambah counter saat tombol dipencet
  function countUp() {
    if (counter < 33) {
      setCounter(counter + 1);
    } else {
      alert("it is done!");
    }
  }

  // Set counter menjadi 0 saat ganti bacaan
  const handleInput = (e) => {
    setCounter(Number(e.target.value));
  };

  return (
    <>
      <section className="content">
        <div className="content-con">
          <Container className="d-flex flex-column justify-content-center mt-5">
            <Form.Select aria-label="Default select example" className="my-5" id="select-form" onChange={handleInput}>
              <option>Pilih Zikr</option>
              <option value="0">Istigfar</option>
              <option value="0">Tasbih</option>
              <option value="0">Tahmid</option>
              <option value="0">Takbir</option>
              <option value="0">Tahlil</option>
            </Form.Select>
            <h1 className="text-center fw-bold">{counter}</h1>
          </Container>
          <Button size="lg" variant="success" className="btn-content w-100" onClick={countUp}>
            Press Here
          </Button>
        </div>
      </section>
    </>
  );
}

export default Content;
