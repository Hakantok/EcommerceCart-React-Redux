import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, ADD } from "../redux/actions/action";

const CardsDetail = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dlt = (id) => {
    dispatch(DELETE(id));
    history("/");
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Detail Page</h2>

        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> : $ {ele.price}
                          </p>
                          <p>
                            {" "}
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> : $ 350
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span style={{ fontSize: 24 }}>-</span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★{" "}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(ele.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetail;
