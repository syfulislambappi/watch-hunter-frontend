import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      fetch(`https://watch-hunter.herokuapp.com/admin`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({...data})
      })
      .then(res => res.json())
      .then(data => alert(data.message))
    reset();
  }
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
            <h1 className="text-center my-5">Make An Admin</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Enter Email</Form.Label>
                <input className="form-control" {...register("email", { required: true})} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Enter Password</Form.Label>
                <input className="form-control" type="password" {...register("password", {required: true})} placeholder="Enter password" />
            </Form.Group>
                <input className="btn btn-primary" type="submit" value="Make Admin" />
            </Form>           
        </div>
        </Container>
    )
}

export default MakeAdmin
