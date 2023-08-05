import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormComponent() {
  return (
    <Form className="mb-5 border p-4 rounded">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name or company name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your email</Form.Label>
        <Form.Control type="enail" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Reason for contact</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-button px-4">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;
