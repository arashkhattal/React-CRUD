import React from "react";
import { Card, Box, Typography } from "@mui/material";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50%",
  maxWidth: "600px",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const DelModal = ({ setData, data, delModal, setDelModal }) => {
  // submit created event
  const HandleSubmit = async () => {
    let allDataNow = data?.filter((a) => a?.id !== delModal?.data);
    setData([...allDataNow]);
    setDelModal(false);
  };

  return (
    <Modal
      open={delModal?.state}
      onClose={() =>
        setDelModal({
          state: false,
          data: null,
        })
      }
    >
      <Card sx={style}>
        <Typography
          className="fs_24"
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Are you sure ?
        </Typography>
        <Box
          pt={3}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            color="secondary"
            size="small"
            onClick={() =>
              setDelModal({
                state: false,
                data: null,
              })
            }
          >
            Cancel
          </button>
          <button
            style={{
              color: "#000",
              background: "#FFA499",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              HandleSubmit();
            }}
          >
            Delete
          </button>
        </Box>
      </Card>
    </Modal>
  );
};
export default DelModal;
