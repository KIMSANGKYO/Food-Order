export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}

// input={{
//     id: "amount",
//     type: "number",
//     min: "1",
//     max: "5",
//     step: "1",
//     defaultValue: "1",
//   }}
