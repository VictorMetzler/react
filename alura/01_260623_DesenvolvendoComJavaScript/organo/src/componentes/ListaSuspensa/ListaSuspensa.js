import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option required={props.obrigatorio} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
