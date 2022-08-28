import { UserProvider } from "@auth0/nextjs-auth0";
import { render, screen } from "@testing-library/react";
import CreateTweet from "../components/CreateTweet";

import "../styles/dist/header.css";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <UserProvider>
        <CreateTweet />
      </UserProvider>
    );
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });
});
