import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProductDetails from "../ProductDescription/ProductDetails";
import ImageSlider from "../ImageSlider/ImageSlider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CartModal({ openModal, setOpenModal }) {
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add To Cart
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            Canvas Cut Sneakers
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ minWidth: "50%", ml: 2 }}>
              <ImageSlider />
            </Box>
            <Box sx={{ minWidth: "50%", margin: "0px 10px" }}>
              <ProductDetails />
            </Box>
          </Box>
          <Box
            sx={{
              margin: "10px 0px 0px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                backgroundColor: " #0000FF",
                color: "#fff",
                paddingX: "10px",
              }}
              size="small"
              onClick={() => setOpenModal(false)}
            >
              Proceed
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
