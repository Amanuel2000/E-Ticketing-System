import Select from "react-select";

const Dropdown = () => {
  const options = [
    {value: "telebirr", label: "telebirr"},
    {value: "CBEbirr", label: "CBEbirr"},
    {value: "HelloCash", label: "HelloCash"},
    {value: "Amole", label: "Amole"},
  ];
  return <Select options={options} />;
};
export default Dropdown;