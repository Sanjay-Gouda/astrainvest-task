import { DataTable } from "@/components/Table/table";
import { ThemeToggle } from "@/components/ThemeToggle/themeToggle";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <div style={{ display: "flex", width: "100%", justifyContent: "end" }}>
        <ThemeToggle />
      </div>
      <DataTable />
    </Container>
  );
}
