"use client";
import Button from "@/component/ui/button";
import { Fragment, Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const User = () => {
  const getData = async () => {
    // "use server";
    const data = await fetch("http://localhost:4000/api/v1/users");
    const posts = await data.json();
    setDataUser(posts.data);
  };
  const [datauser, setDataUser] = useState([]);

  const addData = async () => {
    const url = await fetch("http://localhost:4000/api/v1/users", {
      method: "POST",
    });

    getData();
  };

  const remove = async (d: number) => {
    const url = await fetch(`http://localhost:4000/api/v1/users/${d}`, {
      method: "DELETE",
    });
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
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Alamat</th>
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
                      <td>{d.id}</td>
                      <td>{d.nama}</td>
                      <td>mail@amilc.om</td>
                      <td>09847348738</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum repudiandae, numquam provident hi
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
