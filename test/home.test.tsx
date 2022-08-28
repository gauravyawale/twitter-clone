import { UserProvider } from "@auth0/nextjs-auth0";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "../styles/dist/header.css";

describe.skip("Home", () => {
  it("renders a heading", () => {
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );
    const isLoading = false;
    const toggleIcon = screen.getByTestId("toggle-icon");
    expect(toggleIcon).toBeInTheDocument();
  });
});
