import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization: ' your-auth-token-goes-here',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }
  useEffect(() => {
    HandleFecth();
  }, [asin]);

  const HandleFecth = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization: "Bearer your-auth-token-goes-here",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("error");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;

// componentDidUpdate = async (prevProps) => {
//   if (prevProps.asin !== this.props.asin) {
//     setIsLoading({
//       isLoading: true,
//     })
//     try {
//       let response = await fetch(
//         'https://striveschool-api.herokuapp.com/api/comments/' +
//           this.props.asin,
//         {
//           headers: {
//             Authorization: 'Bearer your-auth-token-goes-here',
//           },
//         }
//       )
//       console.log(response)
//       if (response.ok) {
//         let comments = await response.json()
//         setComments(comments)
//         setIsLoading(false,)
//         setIsError(false,)
//       } else {
//         console.log('error')
//         setIsLoading(false)
//           setIsError(true)
//     }
//   } catch (error) {
//       console.log(error)
//       setIsLoading(false)
//       setIsError(true)
//     }
//   }
// }
