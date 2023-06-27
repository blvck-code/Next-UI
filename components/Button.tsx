"use client";

import { Button, Grid, Loading } from "@nextui-org/react";

export const HeartIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MyButton = () => {
  return (
    <>
      <Button
        auto
        color="error"
        icon={<HeartIcon fill="currentColor" filled />}
      />
      <Grid.Container gap={2}>
        <Grid>
          <Button shadow color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button disabled auto bordered color="primary" css={{ px: "$13" }}>
            <Loading color="currentColor" size="sm" />
          </Button>
        </Grid>
        <Grid>
          <Button disabled auto bordered color="secondary" css={{ px: "$13" }}>
            <Loading type="spinner" color="currentColor" size="sm" />
          </Button>
        </Grid>
        <Grid>
          <Button disabled auto bordered color="success" css={{ px: "$13" }}>
            <Loading type="points" color="currentColor" size="sm" />
          </Button>
        </Grid>
        <Grid>
          <Button disabled auto bordered color="warning" css={{ px: "$13" }}>
            <Loading type="points-opacity" color="currentColor" size="sm" />
          </Button>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid>
          <Button bordered color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button bordered color="secondary" auto>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button bordered color="success" auto>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button bordered color="warning" auto>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button bordered color="error" auto>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button bordered color="gradient" auto>
            Gradient
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default MyButton;
