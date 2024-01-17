import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
          {categories.map((c) => (
            <div className="col mb-4" key={c._id}>
              <div className="card">
                <div className="card-body text-center">
                  <Link
                    to={`/category/${c.slug}`}
                    className="btn btn-primary btn-lg btn-block category-button"
                  >
                    {c.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
