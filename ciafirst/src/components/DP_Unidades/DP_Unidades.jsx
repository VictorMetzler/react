import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { apiCall } from "../../api/";

export default () => {
  const [Unidades, setUnidades] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const objCall = {
        parMsgError: null,
        parResponse: "oi",
        parMethod: "GET",
        parUrl: "/unidades",
      };

      const response = await apiCall(objCall);

      if (!objCall.parMsgError) {
        //console.log(objCall.parResponse.message.unidades);

        objCall.parResponse.message.unidades = objCall.parResponse.message.unidades.sort(
          (a, b) => {
            if (a.nomeapresentacao > b.nomeapresentacao) {
              return 1;
            }
            if (a.nomeapresentacao < b.nomeapresentacao) {
              return -1;
            }
            return 0;
          }
        );

        setUnidades(objCall.parResponse.message.unidades);
      }
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
