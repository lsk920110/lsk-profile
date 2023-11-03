import { CoPresent, Smartphone, Storage } from "@mui/icons-material";
import {
  Card,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function Works() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" marginBottom={'20px'}>Works</Typography>

        <Typography>2022.04 ~ (주)로웸 서버 개발자</Typography>
        <ul>
          <li>스타플래닛 백엔드 서버 유지/관리</li>
          <li>ifree 백엔드 서버 유지/관리</li>
          <li>ifree 웹뷰 개발</li>
        </ul>
      </CardContent>
    </Card>
  );
}
