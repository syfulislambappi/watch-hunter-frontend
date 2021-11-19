import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreateProducts = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      fetch(`https://watch-hunter.herokuapp.com/products`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => alert(data.message))
      reset()
  }
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
            <h1 className="text-center my-5">Add A New Product</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <input className="form-control" {...register("name", { required: true, maxLength: 100 })} placeholder="Enter product name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <textarea rows="5" className="form-control" {...register("description")} placeholder="Enter product description..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product Price</Form.Label>
                <input className="form-control" {...register("price")} placeholder="Enter product price" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product Image URL</Form.Label>
                <input className="form-control" {...register("image")} placeholder="Product image URL" />
            </Form.Group>
                <input className="btn btn-warning" style={{backgroundColor: "#F9706A", borderColor: "#F9706A", color: "white"}} type="submit" value="Add Product" />
            </Form>           
        </div>
        </Container>
    )
}

export default CreateProducts
