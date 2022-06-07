import { useLocation, useNavigate } from "react-router-dom";

const CatDelete = ({deleteHandler}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const cat = location.state.cat;
    const formHandler = (e, action) => {
        e.preventDefault();
        if(action) {
          deleteHandler(cat);
        }
        navigate('/cats');
    }
    return (
        <form>
            <div>
                <h1>Delete this cat?</h1>
                <div>
                    ID: {cat.id}
                </div>
                <div>
                    Name: {cat.name}
                </div>
                <div>
                    <button onClick={(e)=>{formHandler(e, true)}}>Yes</button>
                    <button onClick={(e)=>{formHandler(e, false)}}>No</button>
                </div>
          </div>
        </form>
    );
}

export default CatDelete;