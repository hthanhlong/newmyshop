import React, { useState, useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_ROOT } from "../../../Api/configAxios";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`${API_ROOT}/order`)
      .then((res) => setData(res.data))
      .catch((err) => err.message);
  }, []);

  return (
    <div className="container-fluid admin">
      <nav className="admin__nav">
        <div className="admin__nav-leftside">
          <h1>Admin</h1>
        </div>
        <div className="admin__nav-rightside">
          <div className="dropdown show">
            <Link
              className="btn btn-secondary"
              role="button"
              to="#"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <PersonIcon />
              <ExpandMoreIcon />
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <ul>
                <li>
                  <Link className="dropdown-item" to="/">
                    Setting
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Activity Log
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="admin__layout">
        <div className="admin__layout-left">
          <ul>
            <li className="nav-left-title">
              <span>
                <DashboardIcon />
              </span>
              <h2>Dashboard</h2>
            </li>
            <li>
              <h3>Order </h3>
            </li>
          </ul>
        </div>
        <div className="admin__layout-right">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FristName</th>
                <th scope="col">LastName</th>
                <th scope="col">Addres</th>
                <th scope="col">Phone</th>
                <th scope="col">Product</th>
                <th scope="col">Create At</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {!data ? (
                <div>No data </div>
              ) : (
                data.map((item, index) => (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      {item.cart.map((x, index) => (
                        <div key={index}>{x.id},</div>
                      ))}
                    </td>
                    <td>{item.created_at}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;

// <div className="dropdown">
// <button
//   className="btn btn-secondary"
//   type="button"
//   id="dropdownMenuButton"
//   data-toggle="dropdown"
//   aria-haspopup="true"
//   aria-expanded="false"
// >
//
// </button>
// <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//   <ul>
//     <li>
//       <h3>Name</h3>
//     </li>
//     <li>
//       <Link to="/" className="dropdown-item">
//         Setting
//       </Link>
//     </li>
//     <li>
//       <Link to="/" className="dropdown-item">
//         Activity log
//       </Link>
//     </li>
//     <li>
//       <Link to="/" className="dropdown-item">
//         Log out
//       </Link>
//     </li>
//   </ul>
// </div>
// </div>
