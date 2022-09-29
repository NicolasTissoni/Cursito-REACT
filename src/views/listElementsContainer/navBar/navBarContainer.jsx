import React, { useEffect, useState } from "react";

import getCategories from "../../../components/data/categories/getCategories";

import ListNavBar from './listNavBar/ListNavBar'

const NavBarContainer = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    getCategories()
     .then((categories) => {setCategories(categories); setLoading(true);})
     .catch((error) => {console.log(error)}); setLoading(false);
  }, []);

  return (
    <div>{loading ? <ListNavBar categories={categories} /> : <p>No hay Elementos</p>}</div>
  );
};

export default NavBarContainer;
