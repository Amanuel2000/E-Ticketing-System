import Select from "react-select";

const LeftBar = () => {
  const options = [
    {value: "Men Football", label: "Men Football"},
    {value: "Female Football", label: "Female Football"},
    {value: "Tennis", label: "Tennis"},
  ];

  return (
    <div>
      <div className='leftBar'>
        <div className="leftBarWrapper">
          <button className="leftBarButton">Category</button>
          <Select options={options} />
        </div>
      </div>
    </div>
  )
}
export default LeftBar;