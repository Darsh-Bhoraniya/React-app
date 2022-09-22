import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Student() {
  const [student, setstudent] = useState([]);
  useEffect(() => {
    fetch("https://630ee9c4379256341883572e.mockapi.io/Studentdetail")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setstudent(res);
      });
  }, []);
  const formetedstudent = student.map((s) => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s.Studentimage} />
          <Card.Body>
            <Card.Title>{s.StudentName}</Card.Title>
            <Card.Text>Email : {s.StudentEmail }</Card.Text>
            <Card.Text>Mobilenumber : {s.Mobilenumber}</Card.Text>
            <Card.Text>Perent number : {s.PerentMobilenumber}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Link to={"../Student/" + s.id}>
              <a href="#" class="btn btn-primary">
                View Deails
              </a>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
      <div className="row justify-content-center">{formetedstudent}</div>
    </>
  );
}
export default Student;
