import { Radio } from "antd";

const ShapeChoice = ({ onChange }) => {
  return (
    <Radio.Group defaultValue="square" buttonStyle="solid" onChange={onChange}>
      <Radio.Button value="square">Square</Radio.Button>
      <Radio.Button value="rectangle">Rectangle</Radio.Button>
      <Radio.Button value="circle">Circle</Radio.Button>
    </Radio.Group>
  );
};

export default ShapeChoice;
