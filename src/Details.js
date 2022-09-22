import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Details(){
 
  let params = useParams();
  const navigate = useNavigate();
  const [student, setstudent] = useState({});

  useEffect(() => {
    fetch(
      "https://630ee9c4379256341883572e.mockapi.io/Studentdetail/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setstudent(res);
      });
  }, []);
  return (
    <>
      <img src={student.Studentimage} class="rounded mx-auto d-block" alt="..." />
      <div className="d-grid gap-3 rounded-5 shadow-sm p-3 mb-5 bg-body rounded my-3 col-6 mx-auto">
        <div class="input-group">
          <span class="input-group-text">student Name</span>
          <input
            type="text"
            value={student.StudentName}
            aria-label="First name"
            class="form-control"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Department</span>
          <input
            type="text"
            value={student.Department}
            aria-label="First name"
            class="form-control"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Id</span>
          <input
            type="text"
            value={student.id}
            aria-label="First name"
            class="form-control"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Mobilenumber</span>
          <input
            type="text"
            value={student.Mobilenumber}
            aria-label="First name"
            class="form-control"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">PerentMobilenumber</span>
          <input
            type="text"
            value={student.PerentMobilenumber}
            aria-label="First name"
            class="form-control"
          />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => {
              fetch(
                "https://630ee9c4379256341883572e.mockapi.io/Studentdetail/" +
                  params.id,
                {
                  method: "DELETE"
                }
              ).then((res) => {
                navigate("/Student");
              });
            }}
          >
            Delete
          </button>

          <button
            type="button"
            class="btn btn-outline-warning"
            onClick={() => {
              navigate("/Student/edit/" + params.id);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
export default Details;