import { useLocation, useNavigate } from "react-router-dom";

const DogDelete = ({deleteHandler}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dog = location.state.dog;
    const formHandler = (e, action) => {
        e.preventDefault();
        if(action) {
          deleteHandler(dog);
        }
        navigate('/dogs');
    }
    return (
        <form>
            <div>
                <h1>Delete this dog?</h1>
                <div>
                    ID: {dog.id}
                </div>
                <div>
                    Name: {dog.name}
                </div>
                <div>
                    <button onClick={(e)=>{formHandler(e, true)}}>Yes</button>
                    <button onClick={(e)=>{formHandler(e, false)}}>No</button>
                </div>
          </div>
        </form>
    );
}

export default DogDelete;