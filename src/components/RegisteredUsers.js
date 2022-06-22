import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTable } from "react-table";

const RegisteredUsers = () => {
  const users = useSelector((state) => state.users);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("error : ", err));
    if (response) {
      const products = response.data;
      console.log(products);
      setProducts(products);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log("users", users);
  }, []);

  const data = useMemo(() => {
    console.log("memo users:", users);
    return users.map((element) => {
      return {
        ...element,
        address: `${element["address1"]} +
        "," +
        ${element["address2"]} +
        "," +
        ${element["city"]} +
        "," +
        ${element["postalCode"]} +
        "," +
        ${element["state"]}`,
      };
    });
  }, []);

  // const data = useMemo(
  //   // () => [
  //   //   {
  //   //     id: 1,
  //   //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   //     price: 109.95,
  //   //     description:
  //   //       "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve",
  //   //     category: "men's clothing",
  //   //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   //     rating: { rate: 3.9, count: 120 },
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   //     price: 109.95,
  //   //     description:
  //   //       "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve",
  //   //     category: "men's clothing",
  //   //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   //     rating: { rate: 3.9, count: 120 },
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   //     price: 109.95,
  //   //     description:
  //   //       "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve",
  //   //     category: "men's clothing",
  //   //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   //     rating: { rate: 3.9, count: 120 },
  //   //   },
  //   // ],

  //   },
  //   []
  // );

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "DOB",
        accessor: "dob",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Aadhar",
        accessor: "aadharNumber",
      },
      {
        Header: "PAN Number",
        accessor: "panNumber",
      },
      {
        Header: "User Name",
        accessor: "userName",
      },
      {
        Header: "Mail Id",
        accessor: "mailId",
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
      },
      {
        Header: "Nationality",
        accessor: "nationality",
      },
      {
        Header: "Address",
        accessor: "address",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns: columns, data: data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <div>
        <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "solid 3px #4d5557",

                      background: "aliceblue",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "#d1e2e6",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="table  table-bordered table-secondary table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col"></th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Aadhar</th>
              <th scope="col">PAN Number</th>
              <th scope="col">User Name</th>
              <th scope="col">Mail Id</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Nationality</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((element) => {
                return (
                  <tr key={element.id}>
                    <th scope="row">{element.id}</th>
                    <td>
                      <Link to={`/signup/${element.id}`} state={element.id}>
                        {element.firstName}
                      </Link>
                      {/* <Link
                        to={{
                          pathname: "/signup",
                          state: { id: `${element.id}` },
                        }}
                      >
                        {element.firstName}
                      </Link> */}
                    </td>
                    <td>{element.lastName}</td>
                    <td>{element.dob}</td>
                    <td>{element.gender}</td>
                    <td>{element.aadharNumber}</td>
                    <td>{element.panNumber}</td>
                    <td>{element.userName}</td>
                    <td>{element.mailId}</td>
                    <td>{element.phoneNumber}</td>
                    <td>{element.nationality}</td>
                    <td>{`${element.address1},${element.address2},${element.city}:${element.postalCode},${element.state}`}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RegisteredUsers;
