import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartModal from "../CartModal/CartModal";

export default function Cards() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 4 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://insignia.com.pk/cdn/shop/files/2_ff36b409-fc98-4317-9092-0351c3cfaf81.jpg?v=1705488336&width=493"
          title="shoe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Canvas Low Cut Sneakers
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Canvas Low Cut Sneakers are versatile, casual footwear made from
            lightweight canvas material. They feature a low-cut design that sits
            below the ankle, providing flexibility and comfort for everyday
            wear. Known for their simple yet stylish look, these sneakers pair
            well with a variety of outfits, making them a popular choice for
            both fashion and functionality. Ideal for relaxed, informal
            occasions, they offer a balance of durability and breathability.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setOpenModal(true)}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
      {openModal && (
        <CartModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}
