import React from "react";

import Box from "@material-ui/core/Box";
import PrimaryButton from "../ui_components/PrimaryButton";

class CreateGame extends React.Component {
  render() {
    const { handleCreateGame } = this.props;
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Box mt={5} mb={5} pb={5}>
          <PrimaryButton
            label="Create New Game"
            onClick={handleCreateGame}
            disabled={false}
          />
        </Box>
      </div>
    );
  }
}

export default CreateGame;
