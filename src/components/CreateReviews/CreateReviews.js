import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const CreateReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    
  const onSubmit = data => {
      fetch(`https://watch-hunter.herokuapp.com/review`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: user.displayName, image: user.photoURL, ...data})
      })
      .then(res => res.json())
      .then(data => alert(data.message))
    reset();
  }
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
            <h1 className="text-center my-5">Give A Review</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Enter Your Review</Form.Label>
                <textarea className="form-control" {...register("description", { required: true})} placeholder="Enter your opinion" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Enter Your Rating</Form.Label>
                <input className="form-control" {...register("rating", {valueAsNumber: true, required: true})} placeholder="Enter your rating" />
            </Form.Group>
                <input className="btn btn-primary" type="submit" value="Add Review" />
            </Form>           
        </div>
        </Container>
    )
}

export default CreateReview
