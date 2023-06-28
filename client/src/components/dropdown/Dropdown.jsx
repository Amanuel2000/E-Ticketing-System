import Select from "react-select";

const Dropdown = () => {
  const options = [
    {value: "Aman", label: "Aman"},
    {value: "Elias", label: "Elias"},
  ];
  return <Select options={options} />;
};
export default Dropdown;