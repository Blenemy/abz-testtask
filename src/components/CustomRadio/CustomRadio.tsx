import { Position } from "./types/Position";

import "./CustomRadio.scss";
import { ChangeEventHandler, HTMLAttributes } from "react";

interface PositionSelectorProps extends HTMLAttributes<HTMLInputElement> {
  positions: Position[] | [];
  name: string;
  required: boolean;
  value?: string | undefined | number;
  onChangeFunc?: ChangeEventHandler<HTMLInputElement>;
  error?: string | false | undefined;
}

export const CustomRadio: React.FC<PositionSelectorProps> = ({
  positions,
  name,
  required,
  value,
  onChangeFunc,
  ...props
}) => {
  return (
    <div className="custom-radio">
      <p>Select your position</p>
      {positions.map((position) => (
        <label className="custom-radio__label" key={position.id}>
          <input
            type="radio"
            name={name}
            className="custom-radio__field"
            id={`position-${position.id}`}
            value={position.id || 1}
            onChange={onChangeFunc}
            checked={value !== undefined && +value === position.id}
            {...props}
          />
          <span className="custom-radio__text">{position.name}</span>
        </label>
      ))}
    </div>
  );
};
