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
  width: { xs: "90%", sm: 500, md: 600 }, // Responsive width
  height: { xs: "auto", md: 450 }, // Responsive height
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: { xs: 2, md: 4 }, // Responsive padding
  overflowY: "auto", // Enables scrolling if content overflows on smaller screens
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Add To Cart
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            Canvas Cut Sneakers
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column layout on smaller screens
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                minWidth: { xs: "100%", md: "50%" },
                ml: { md: 2 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <ImageSlider />
            </Box>
            <Box
              sx={{
                minWidth: { xs: "100%", md: "50%" },
                margin: { xs: "0px", md: "0px 10px" },
              }}
            >
              <ProductDetails />
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#0000FF",
                color: "#fff",
                paddingX: { xs: "8px", md: "10px" },
                fontSize: { xs: "0.8rem", md: "0.9rem" },
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
