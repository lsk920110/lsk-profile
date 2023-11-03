import {
  Alert,
  Button,
  Card,
  CardContent,
  Input,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function ContactMe({success , setSuccess}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function submit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("email", email);
    fetch(
      `https://script.google.com/macros/s/AKfycbwrnS2UU_QNJ9rCbwBV72K_9DfPu4mOsf1R9J4rzAN0c8uBQx221aT2VIQph8FmYId0UA/exec`,
      { method: "POST", body: formData }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result === "success") {
          setSuccess(true);
          setName("");
          setEmail("");
          setSuccess("");
        }
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <Card>
      <CardContent>
        <Typography>Contact Me</Typography>
      </CardContent>
      {success ? (
        <Alert
        variant="info"
          onClose={() => {
            setSuccess(false);
          }}
        >
          Your message was sent successfully. Thanks.
        </Alert>
      ) : null}
      {error ? (
        <Alert
          variant="error"
          onClose={() => {
            setError(false);
          }}
        >
          Your message was sent successfully. Thanks.
        </Alert>
      ) : null}
      <CardContent>
        <List>
          <ListItem>
            <Input
              fullWidth
              placeholder="name"
              name="name"
              value={name}
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            <Input
              
              fullWidth
              // sx={{height : '50px'}}
              placeholder="message"
              name="message"
              value={message}
              defaultValue={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            <Input
            type="email"
              fullWidth
              placeholder="email"
              name="email"
              email={email}
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </ListItem>

          <ListItem>
            <Button
              fullWidth
              variant="contained"
              type="button"
              onClick={submit}
            >
              Leave Message
            </Button>
          </ListItem>
          <ListItem></ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
