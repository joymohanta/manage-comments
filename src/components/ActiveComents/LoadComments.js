import React, { useEffect, useState } from "react";
import "./LoadComments.css";

const LoadComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 5)));
  }, []);

  return (
    <div>
      <div>
        <table border="1" cellPadding="8px" className="table-control w-25">
          <tr>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </table>
      </div>
      <div className="table-align">
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <div>
                <table border="1" cellPadding="5px" className=" w-100">
                  <tr>
                    <td className=" pe-3"> {comment.name.slice(0, 9)} </td>
                    <td>
                      {" "}
                      {comment.body.slice(0, 18)}{" "}
                      <input
                        className="ms-2"
                        type="checkbox"
                        id={comment.id}
                      ></input>{" "}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="side-table">
          {comments.map((comment) => (
            <div key={comment.id}>
              <div>
                <table border="1" cellPadding="5px" className=" w-100">
                  <tr>
                    <td>
                      {" "}
                      {comment.body.slice(0, 18)}{" "}
                      <input
                        className="ms-2"
                        type="checkbox"
                        id={comment.id}
                      ></input>{" "}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadComments;
