import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>

      <footer className="border-t border-zinc-900">
        <Container>
          <div className="py-8 text-center text-sm text-zinc-500">
            © 2026 Shivani Gollapalli . All rights reserved
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default MainLayout;
