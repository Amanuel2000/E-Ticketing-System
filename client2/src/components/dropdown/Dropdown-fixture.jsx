import Select from "react-select";

const Dropdown = () => {
  const options = [
    {value: "Men Football", label: "Men Football"},
    {value: "Female Football", label: "Female Football"},
    {value: "Tennis", label: "Tennis"},
  ];
  return <Select options={options} />;
};
export default Dropdown;