import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">About</Typography>
        <br></br>
        <Typography lineHeight={"30px"}>
          현재 2년차 주니어 개발자입니다.
          <br />
          <br />
          Spring 개발자로 입사했지만, 취미로 Flutter를 학습하여 배포하였고, 회사
          프로젝트를 위해 React를 학습하여 Front개발까지 하게되었습니다.
          <br />
          <br /> 취미도 개발이고 업도 개발이다보니 여러 기술을 익히는것을
          좋아합니다
        </Typography>
      </CardContent>
    </Card>
  );
}
