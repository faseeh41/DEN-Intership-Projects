import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductDetails() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <Accordion sx={{ mb: { xs: 1, sm: 2 }, boxShadow: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" }, // Responsive font size
            fontWeight: 500,
            padding: { xs: "8px 16px", sm: "12px 24px" }, // Responsive padding
          }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: { xs: "8px 16px", sm: "12px 24px" } }}>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: { xs: 1, sm: 2 }, boxShadow: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: 500,
            padding: { xs: "8px 16px", sm: "12px 24px" },
          }}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: { xs: "8px 16px", sm: "12px 24px" } }}>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ boxShadow: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: 500,
            padding: { xs: "8px 16px", sm: "12px 24px" },
          }}
        >
          <Typography>Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: { xs: "8px 16px", sm: "12px 24px" } }}>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <AccordionActions sx={{ padding: { xs: "4px 8px", sm: "6px 12px" } }}>
          <Button
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              padding: { xs: "4px 8px", sm: "6px 12px" },
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              padding: { xs: "4px 8px", sm: "6px 12px" },
            }}
          >
            Agree
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
