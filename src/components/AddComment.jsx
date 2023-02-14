import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // }
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  useEffect(() => {
    setComment({
      ...comment,
      elementId: asin,
    });
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer your-auth-token-goes-here",
        },
      });
      if (response.ok) {
        alert("Comment was sent!");
        setComment({
          comment: {
            comment: "",
            rate: 1,
            elementId: asin,
          },
        });
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
