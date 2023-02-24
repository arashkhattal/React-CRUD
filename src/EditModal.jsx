import React from "react";
import { Grid, Card, TextField, Box, Typography, Divider } from "@mui/material";
import { useState, useEffect } from "react";
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

const EditModal = ({ setData, data, editModal, setEditModal }) => {
  // store event info
  const [val, setVal] = useState("");

  useEffect(() => {
    if (editModal?.state) {
      setVal(editModal?.data?.data);
    }
  }, [editModal?.state]); //eslint-disable-line react-hooks/exhaustive-deps

  // submit created event
  //   const HandleSubmit = async () => {
  //     if (val === "") {
  //       alert("Please enter Note");
  //       return;
  //     } else {
  //       if (val) {
  //         const newNote = {
  //           id: editModal?.data?.id,
  //           data: val,
  //         };
  //         setData([...data,newNote]);
  //       }
  //       alert("Note Edited successfully");
  //       setVal("");
  //     }
  //     setEditModal(false);
  //   };
  const editItem = (id, newData, data, setData) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, data: newData };
      }
      return item;
    });
    setData(updatedData);
  };

  const HandleSubmit = async () => {
    if (val === "") {
      alert("Please enter Note");
      return;
    } else {
      if (val) {
        const editedNote = {
          id: editModal?.data?.id,
          data: val,
        };
        editItem(editModal?.data?.id, val, data, setData);
        setVal("");
        setEditModal(false);
      }
    }
  };

  return (
    <Modal
      open={editModal?.state}
      onClose={() =>
        setEditModal({
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
          Edit Event
        </Typography>
        <Divider sx={{ mx: 0, position: "relative", zIndex: "3" }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              type="text"
              label="Create Event"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          </Grid>
        </Grid>
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
              setEditModal({
                state: false,
                data: null,
              })
            }
          >
            Cancel
          </button>
          <button
            style={{
              color: "white",
              background: "#1976d2",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              HandleSubmit();
            }}
          >
            Save
          </button>
        </Box>
      </Card>
    </Modal>
  );
};
export default EditModal;
