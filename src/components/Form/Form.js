import React, { Component } from "react";
import { useState ,useEffect} from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
 const Form =({onSubmit})=> {

const [state,setState]=useState({  name: "",
    number: "",});


  const handleChange = (e) => {
    setState(prevState=>{return{...prevState, [e.target.name]: e.target.value }});
  };

 const  handleSubmit = (e) => {
    e.preventDefault();
   onSubmit(state);
    reset();
  };

  const reset = () => {
    setState({
      name: "",
      number: "",
    });
  };

    return (
      <form className={styles.form} onSubmit={
        handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={state.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
Form.defaultProps={
  onSubmit:()=>{},
}
Form.propTypes={
  onSubmit:PropTypes.func,
}
export default Form;