import React, { useEffect, useRef, useState } from "react";
import { StyledDropdown, StyledWrapper } from "./Dropdown.styled";

import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";

const Dropdown = ({ options, selectedOption, onOptionChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const mappedDropdownOptions = options.map((option) => {
    if (option === selectedOption) {
      return null;
    }
    return (
      <div key={option} onClick={() => onOptionChange(option)}>
        {option}
      </div>
    );
  });

  return (
    <StyledWrapper ref={ref} $hasSelectedValue={!!selectedOption}>
      <div className="field" onClick={() => setOpen(!open)}>
        <div className="text">{selectedOption || placeholder}</div>
        <DropdownIcon width={20} height={20} />
      </div>
      <StyledDropdown $isOpen={open}>{mappedDropdownOptions}</StyledDropdown>
    </StyledWrapper>
  );
};

export default Dropdown;
