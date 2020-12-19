import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";

function chekoutCard(props) {
  
    

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div style={{ width: "65px", height: "65px" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyWmV7cmlqZ1bk0V_mDOevvOyiA3-pgYm78g&usqp=CAU"
            alt="cardipicture"
            class="img-fluid max-width: 100%; shadow-sm"
          />
        </div>
      </TableCell>
      <TableCell >{props.name}</TableCell>
      <TableCell align="right">{props.price}$</TableCell>
      <TableCell align="right">
        <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color: "white"}} onClick={props.increaseQuantity}>+</Button>
        <Button variant="contained" disabled style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',color:'black'}}>{props.units}</Button>
        <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color: "white"}} onClick={props.decreaseQuantity}>-</Button>
      </TableCell>
      <TableCell align="right">{props.unitTotal}$</TableCell>
      <TableCell align="right">
      <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color: "black"}} onClick={props.deleteItem}>
          <DeleteOutlineRoundedIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

const mapStateToProps = (state) => {
  return {
    formdata: state.formdata,
    slider: state.slider,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFormData: (formdata) => {
      dispatch({ type: "ADD_FORM_DATA", formdata: formdata });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(chekoutCard);
