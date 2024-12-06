import PropTypes from "prop-types";
function Article(props) {
    Article.propTypes = {
        title: PropTypes.string.isRequired,
        mentor: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      };
    return(
        <>
        <h3>{props.title}</h3>
        <small>
            <li>mentor : {props.mentor}</li>
            <li>jadwal : {props.date}</li>
            <li>{props.status ?"latest" : "old"}</li>
        </small>
        </>
    );  
}
export default Article