import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DelModal from "./DelModal";
import EditModal from "./EditModal";

function App() {
  const [editModal, setEditModal] = useState({ state: false, data: null });
  const [delModal, setDelModal] = useState({ state: false, data: null });

  const [val, setVal] = useState("");

  const [data, setData] = useState([
    {
      id: "1",
      data: "Todo list 1",
    },
    {
      id: "2",
      data: "Todo list 2",
    },
  ]);

  const HandleSubmit = async () => {
    if (val === "") {
      alert("Please enter Note");
      return;
    } else {
      if (val) {
        const newNote = {
          id: (data.length + 1).toString(),
          data: val,
        };
        setData([...data, newNote]);
      }
      setVal("");
    }
  };

  return (
    <div className="App-header">
      <EditModal
        setEditModal={setEditModal}
        editModal={editModal}
        data={data}
        setData={setData}
      />
      <DelModal
        data={data}
        setData={setData}
        setDelModal={setDelModal}
        delModal={delModal}
      />
      <Typography
        style={{
          textAlign: "center",
          padding: "20px",
          fontWeight: "bold",
          fontSize: "20px",
          background: "#d0e9f1",
          margin: "15px",
          borderRadius: "5px",
        }}
      >
        Keep Note
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          gap: "20px",
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Note"
          fullWidth
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            HandleSubmit();
          }}
        >
          Add
        </Button>
      </div>
      <div style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {data?.map((data) => (
            <Grid item xs={12} md={6} lg={3}>
              <Card
                key={data?.id}
                style={{
                  padding: "10px",
                  height: "250px",
                  background: "#d0e9f1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    background: "#1976d2",
                    borderRadius: "5px",
                    padding: "5px",
                    marginBottom: "10px",
                  }}
                >
                  <div></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      paddingRight: "5px",
                    }}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setEditModal({ state: true, data: data })}
                    >
                      📝
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setDelModal({ state: true, data: data?.id })
                      }
                    >
                      ✖
                    </div>
                  </div>
                </div>
                {data?.data}
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
