"use client";

import { Button, Loading } from "@nextui-org/react";

export default function BtnGroup() {
  return (
    <>
      <Button.Group>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
      <Button.Group>
        <Button clickable={false}>
          <Loading color="white" size="sm" />
        </Button>
        <Button clickable={false}>
          <Loading type="spinner" color="white" size="sm" />
        </Button>
        <Button clickable={false}>
          <Loading type="points" color="white" size="sm" />
        </Button>
      </Button.Group>
    </>
  );
}
