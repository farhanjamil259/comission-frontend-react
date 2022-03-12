import React, { useEffect, useMemo, useRef, useState } from "react";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

export interface SelectOptions {
  label: string;
  value: string;
}

type SelectInputProps = {
  searcheable?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  options?: SelectOptions[];
};

const SelectInput = (props: SelectInputProps): React.ReactElement => {
  const [isOpened, setIsOpened] = useState(false);

  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState<string>("");

  const filteredOptions = useMemo(() => {
    return props.options?.filter((o) => {
      return o.label.includes(inputValue) || o.value.includes(inputValue);
    });
  }, [inputValue, props.options]);

  // TODO: Fix bug clicking again does not close
  useEffect(() => {
    if (isOpened) {
      const handler = (e: MouseEvent): void => {
        if (
          dropdownContainerRef.current &&
          !dropdownContainerRef.current.contains(e.target as Node)
        ) {
          setIsOpened(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return (): void => document.removeEventListener("mousedown", handler);
    }
  }, [isOpened, dropdownContainerRef]);

  const toggleDropdown = (): void => {
    isOpened ? setIsOpened(false) : setIsOpened(true);
  };

  return (
    <div className="select-input-parent">
      <div className="select-input" onClick={(): void => toggleDropdown()}>
        <div className="select-input__wrapper">
          <IGSText type="label-medium" className="select-input__label">
            Sales Rep
          </IGSText>
          <div className="select-input__container">
            {props.searcheable && (
              <IGSIcon
                className="select-input__icon"
                width="14px"
                height="14px"
                type="search"
              />
            )}
            {props.searcheable ? (
              <input
                type="text"
                className="select-input__field"
                value={inputValue}
                onChange={(e): void => setInputValue(e.target.value)}
              />
            ) : (
              // TODO: Style the placeholder
              "Please select a value"
            )}
          </div>
        </div>
        <IGSIcon
          onClick={(e): void => {
            e.stopPropagation();
            props.onChange && props.onChange("");
            toggleDropdown();
          }}
          type={props.searcheable ? "close" : isOpened ? "up" : "down"}
        />
      </div>

      <div
        ref={dropdownContainerRef}
        className={`select-input-parent__dropdown ${
          isOpened && "select-input-parent__dropdown--show"
        }`}
      >
        {filteredOptions?.map((o, i) => {
          return (
            <div
              key={i}
              onClick={(): void => {
                props.onChange && props.onChange(o.value);
                toggleDropdown();
              }}
              className="select-input-parent__dropdown--item"
            >
              <IGSIcon
                className="select-input-parent__dropdown--icon"
                width="16px"
                height="16px"
                type="right"
              />
              {o.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectInput;
