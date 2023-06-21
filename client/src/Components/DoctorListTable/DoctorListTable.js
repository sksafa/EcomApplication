import React from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorListTable.scss";
const DoctorListTable = ({ doctorData }) => {
  const {
    firstName,
    lastName,
    specialization,
    experience,
    feesPerCunsaltation,
    _id,
    // timings,
  } = doctorData;
  const navigate = useNavigate();
  return (
    <>
      <main className="table">
        <section className="table_header">
          <h1 className=" font-semibold text-2xl">Doctor,s Applycations</h1>
        </section>
        <section className="table_body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>feesPerCunsaltation</th>
              </tr>
            </thead>

            <tbody onClick={() => navigate(`/doctor/book-appointment/${_id}`)}>
              <tr>
                <td>${_id}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${specialization}</td>
                <td>${experience}</td>
                <td>${feesPerCunsaltation}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default DoctorListTable;
