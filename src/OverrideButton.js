import { Radio } from "antd";

const OverrideButton = ({ onChange, className }) => {
  return (
    <Radio.Group
      defaultValue={false}
      buttonStyle="solid"
      onChange={onChange}
      className={className}
    >
      <Radio.Button value={true}>Override</Radio.Button>
    </Radio.Group>
  );
};

export default OverrideButton;
