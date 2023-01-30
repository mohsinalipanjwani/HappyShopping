import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./Styled";
import SearchIcon from "@mui/icons-material/Search";
import messages from "./messages";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

const SearchField = () => {
  const searchPlaceholder = useFormattedMessage(messages.placeholder);
  return (
    <>
      <Search>
        <StyledInputBase placeholder={searchPlaceholder} />

        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </>
  );
};

export default SearchField;
