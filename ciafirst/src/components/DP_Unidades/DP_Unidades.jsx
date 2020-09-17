import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { fetchUnidades } from "../../api/";

export default () => {
  const [Unidades, setUnidades] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setUnidades(await fetchUnidades({ parSortByKey: "nomeapresentacao" }));
    };
    fetchAPI();
  }, []);

  return (
    <InputGroup
      className="mx-auto"
      size="lg"
      style={{ border: "1px dotted red" }}
    >
      <InputGroup.Prepend>
        <InputGroup.Text htmlFor="idSelectUnidade">Unidades</InputGroup.Text>
      </InputGroup.Prepend>

      {Unidades !== undefined && Unidades.length ? (
        <Form.Control as="select" custom id="idSelectUnidade">
          {Unidades.map((unidade) => (
            <option key={unidade.id} value={unidade.id}>
              {unidade.nomeapresentacao}
            </option>
          ))}
        </Form.Control>
      ) : null}
    </InputGroup>
  );
};
