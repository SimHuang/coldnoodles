import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
}));

const PrimaryButton = ({ onClick, label, disabled, fullWidth, type }) => {
  const classes = useStyles();
  return (
    <Button
      classes={classes}
      color="primary"
      size="large"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PrimaryButton;
