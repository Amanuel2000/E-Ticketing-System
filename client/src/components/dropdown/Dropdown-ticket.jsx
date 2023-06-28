import Select from "react-select";

const Dropdown = () => {
  const options = [
    {value: "VIP 200ETB", label: "VIP 200ETB"},
    {value: "Standard 100ETB", label: "Standard 100ETB"},
    {value: "Semi 50ETB", label: "Semi 50ETB"},
    {value: "Ordinary 20ETB", label: "Ordinary 20ETB"},
  ];
  return <Select options={options} />;
};
export default Dropdown;