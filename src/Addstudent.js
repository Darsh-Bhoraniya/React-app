import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Addstudent(){
    
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    if (params.id > 0) {
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
          setData(res);
        });
    }
  }, []);
  return (
    <>
      <div className="container d-grid gap-3 rounded-5 shadow-sm p-3 mb-5 bg-body rounded my-3">
        <div class="input-group">
          <span class="input-group-text">StudentName</span>
          <input
            value={data.StudentName}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, StudentName: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">StudentEmail</span>
          <input
            value={data.StudentEmail}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, StudentEmail: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Mobilenumber</span>
          <input
            value={data.Mobilenumber}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({...data, Mobilenumber: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">PerentMobilenumber</span>
          <input
            value={data.PerentMobilenumber}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, PerentMobilenumber: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Department</span>
          <input
            value={data.Department}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, Department: e.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            value={data.Studentimage}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => {
              setData({ ...data, Studentimage: e.target.value });
            }}
          />
        </div>
        <button
          type="button"
          class="btn btn-outline-primary d-grid gap-2"
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://630ee9c4379256341883572e.mockapi.io/Studentdetail/" +
                  params.id,
                {
                  method: "PUT",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              ).then(() => {
                navigate("/Student");
              });
            } else {
              fetch("https://630ee9c4379256341883572e.mockapi.io/Studentdetail/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then((res) => {
                navigate("/Student");
              });
            }
          }}
        >
          {params.id > 0 && "Edit  "}
          {!(params.id > 0) && "Add  "}
         Student
        </button>
      </div>
    </>
  );
}

export default Addstudent;		