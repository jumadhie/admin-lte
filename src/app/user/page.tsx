"use client";
import Button from "@/component/ui/button";
import { Fragment, Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const User = () => {
  const [er, setErr] = useState("");

  const formatDate = (param: any) => {
    const fulldate = new Date(param);
    const date = fulldate.getDate();
    const month = fulldate.getMonth() + 1;
    const year = fulldate.getFullYear();
    const joindate = date + "-" + month + "-" + year;

    return joindate;
  };
  const getData = async () => {
    try {
      const data = await fetch("http://localhost:4000/api/v1/users");
      const posts = await data.json();
      console.log(posts.data);
      setDataUser(posts.data);
    } catch (error) {
      console.info("ada masalah dari server bro");
      setErr("eror bro");
    }
  };
  const [datauser, setDataUser] = useState([]);

  const addData = async () => {
    try {
      const url = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
      });
    } catch (error) {
      console.log("eror tambah data", error);
    }

    getData();
  };

  const remove = async (d: number) => {
    try {
      const url = await fetch(`http://localhost:4000/api/v1/users/${d}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("eror hapus data", error);
    }
    getData();
  };

  const refresh = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="breadcrumbs">
        <h3>halaman user</h3>
      </div>
      <div className="container-content">
        <div className="header-table-right">
          <Button title="Tambah User Baru" onClick={addData} />
          <div className="gap-w"></div>
          <Button title="Perbaharui Data" onClick={refresh} />
        </div>
        <div className="container-table">
          {er}
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Nik</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Tanggal Bergabung</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Suspense fallback={<Loading />}>
                {datauser.map((d: any, i: any) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{d.nik}</td>
                      <td>{d.nama}</td>
                      <td>{d.email}</td>
                      <td>{d.phone_number}</td>
                      {/* <td>{d.join_date}</td> */}
                      <td>
                        {d.join_date === null ? "-" : formatDate(d.join_date)}
                      </td>
                      <td>
                        <button onClick={() => remove(d.id)}>hapus</button>
                      </td>
                    </tr>
                  );
                })}
              </Suspense>
            </tbody>
          </table>
        </div>
        <div className="footer-table">pagination</div>
      </div>
    </Fragment>
  );
};

export default User;

async function getData() {
  // "use server";
  // const res = await fetch("http://localhost:4000/api/v1/users", {
  //   cache: "no-cache",
  // });
  // if (!res.ok) {
  //   // throw new Error("Failed to fetch data");
  //   console.log("eroor");
  // }
  // console.log("sss");
  // return res.json();
}

async function postData() {
  // const res = await fetch("http://localhost:4000/api/v1/users", {
  //   cache: "no-cache",
  // });
  // if (!res.ok) {
  //   // throw new Error("Failed to fetch data");
  //   console.log("eroor");
  // }
  // console.log("sss");
  // return res.json();
  alert("tes");
}
